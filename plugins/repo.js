const {cmd , commands} = require('../command')

cmd({
    pattern: "repo",
    desc: "repo the bot",
    category: "main",
    react: "⚔️",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `* *_Fixo XMD BOT REPO_* 


* 💫 REPO: *https://github.com/Thenuwa2007/THENUWA-XMD-V01*

👨‍💻OWENR: https://wa.me/94711767300?text=*Hi_I_AM_FIXO_XMD_OWNER*l


🔥 𝗧𝗵𝗮𝗻𝗸 𝗬𝗼𝘂 𝗙𝗼𝗿 𝗖𝗵𝗼𝗼𝘀𝗶𝗻𝗴 𝗙𝗜𝗫𝗢 𝗫𝗠𝗗 〽️

👉 Join My WhatsApp Channel✓ - :*https://whatsapp.com/channel/0029VbAbJCO35fLy2OzH9y1I* 


> *𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗙𝗜𝗫𝗢 𝗫𝗠𝗗 *
`
await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/et3unf.png`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
