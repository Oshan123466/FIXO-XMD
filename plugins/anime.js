const {cmd , commands} = require('../command')

cmd({
    pattern: "anime",
    desc: "anime the bot",
    category: "main",
    react: "⛱️",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `❮❮❮ *FIXO XMD ANIME PHOTOS* ❯❯❯`
await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/elqdl6.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/n4ga81.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/60tu5w.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/rsdykb.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/nq9pj3.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/105nw2.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/6f85a7.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
