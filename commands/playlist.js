const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("musiclofi")
        .setDescription("Rádio de música Lofi"),

    async execute(interaction) {
        await interaction.reply("https://www.youtube.com/watch?v=bGA1cU_qWMQ&ab_channel=SpongeBoyLofi")
    }
}