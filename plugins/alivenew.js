const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');

cmd({
    pattern: "alive",
    alias: ["status", "runtime", "uptime"],
    desc: "Check uptime and system status",
    category: "main",
    react: "👨🏻‍💻",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Generate system status message
        const status = `┏━❮  𝗙𝗜𝗫𝗢 𝗫𝗠𝗗 🕊️❯━
┃◈┃🤖 ʙᴏᴛ ɴᴀᴍᴇ :ꜰɪxᴏ 𝚇𝙼𝙳 𝚅1
┃◈┃🔖 ᴠᴇʀsɪᴏɴ : 1.0.0 𝙱𝙴𝚃𝙰
┃◈┃📟 ᴘʟᴀᴛғᴏʀᴍ : 𝚁𝙴𝙿𝙻𝙸𝚃
┃◈┃👨‍💻ᴏᴡɴᴇʀ: ꜰɪxᴏ xᴅ
┃◈┃📆 ʀᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())} 
┃◈┃📈ʀᴀᴍ ᴜsᴀɢᴇ: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
┃◈┗━━━━━━━━━━━━━━𖣔𖣔
╰──────────────┈⊷
> © 𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗙𝗜𝗫𝗢 𝗫𝗠𝗗🕊️`;

        // Send the status message with an image
        await conn.sendMessage(from, { 
            image: { url: `https://files.catbox.moe/et3unf.png` },  // Image URL
            caption: status,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 1,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363420387793916@newsletter',
                    newsletterName: '𝗙𝗜𝗫𝗢 𝗫𝗠𝗗',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.error("Error in alive command:", e);
        reply(`An error occurred: ${e.message}`);
    }
});
