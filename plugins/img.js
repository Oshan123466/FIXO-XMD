const { cmd } = require('../command'); // Ensure the path is correct
const g_i_s = require('g-i-s'); // Import g-i-s for image search

cmd({
    pattern: "img",
    alias: ["googleimg"],
    react: "🔍",
    desc: "Search for images on Google",
    category: "search",
    use: '.imgsearch <query>',
    filename: __filename
},
async(conn, mek, m, { from, reply, q }) => {
    try {
        if (!q) return await reply("Please provide a search query!");

        g_i_s(q, (error, result) => {
            if (error || !result.length) return reply("No images found!");

            // Send the first 5 images
            const imageUrls = result.slice(0, 5).map(img => img.url);
            imageUrls.forEach(async (url) => {
                await conn.sendMessage(from, { image: { url } }, { quoted: mek });
            });
        });

    } catch (error) {
        console.error(error);
        reply('An error occurred while processing your request. Please try again later.');
    }
});
