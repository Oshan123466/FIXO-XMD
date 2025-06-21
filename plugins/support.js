const config = require('../config')

const {cmd , commands} = require('../command')



cmd({

    pattern: "support",

    desc: "To get the bot informations.",

    react: "😸",

    category: "main",

    filename: __filename

},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

try{



let about = ` *👋 Hello ${pushname}*

*⚒️ FIXO XMD Support Channels⚒️*

*Whatsapp Channel Link:* https://whatsapp.com/channel/0029VbAbJCO35fLy2OzH9y1I

> ❯❯ ꜰɪxᴏ 𝚇𝙼𝙳 𝚆𝙰𝚃𝚂 𝙰𝙿𝙿 𝙱𝙾𝚃 ➣`

return await conn.sendMessage(from,{image: {url: config.ALIVE_IMG},caption:about},{quoted:
}catch(e){

console.log(e)

reply(`${e}`)

}

})
