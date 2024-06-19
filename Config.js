const fs = require('fs');
const chalk = require('chalk');
require('dotenv').config();

//contact details
global.ownernumber = [ process.env.OWNER_NUMBER || "436508326391111", "491746097289"],
global.ownername = process.env.OWNER_NAME || "💙𓆩‎ZAKUTOxKAI",
global.ytname = "YT: MYNUTS.inc"
global.socialm = "GitHub: Exiqonbotz"
global.location = "Germany"

global.botname = process.env.BOTNAME || "ҡאƶ Bot",//name of the bot

//sticker details
global.stickername = process.env.STICKER || "💙𓆩‎ZAKUTOxKAI",
global.packname = 'Sticker By'
global.author = process.env.AUTHOR || "💙𓆩‎ZAKUTOxKAI",
//console view/theme
global.themeemoji = '🧩'
global.wm = "Exiqonbotz inc."

//theme link
global.link = 'https://chat.whatsapp.com/HmPJSaTB8zF3MJC1IjlrYj'

//custom prefix
global.prefa = process.env.PREFIX || ".",

//false=disable and true=enable
global.welcome = process.env.WELCOME || "false", //auto welcome
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = false //auto update bio
global.anti212 = true //auto block +212
global.autoread_status = false //auto view status/story



//reply messages
global.mess = {
    done: '🍭 *Bitte sehr.* ',
    prem: '🍭 *My darling, this feature is reserved for premium users only*',
    admin: '*Dieser Befehl kann nur von einem Admin verwendet werden.* !',
    botAdmin: 'Sorry leider kann ich diesen Befehl nicht ausführen, ohne ein *Admin* dieser Gruppe zu sein. ',
    owner: '🍭 *My dearest, this feature is reserved for the owner only*',
    group: '🍭 *Sweetheart, this feature is exclusively for groups*',
    private: 'Dieser Befehl ist nur für *Private Chats* Verfügbar!',
    wait: '*Bitte warte einen moment,ich arbeite daran...* ',    
    error: '*Error!*',
}

module.exports = {
ownernumber: global.ownernumber,
ownername: global.ownername,
sessionId: process.env.id,
AUTO_BLOCK : process.env.PM_BLOCKER,
STATUS_SAVER : "true",
ANTI_BOT:"true",
}


global.thumb = fs.readFileSync('./Gallery/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
