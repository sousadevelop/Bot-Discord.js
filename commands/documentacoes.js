const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, Component } = require("discord.js")

const row = new ActionRowBuilder()
    .addComponents(
        new StringSelectMenuBuilder()
            .setCustomId("select")
            .setPlaceholder("Nenhuma linguagem selecionada")
            .addOptions({
                label: "javascript",
                description: "Veja a documentação de Javascript",
                value: "javascript"
                },
                {
                label: "python",
                description: "Veja a documentação de Python",
                value: "python"
                },
                {
                label: "PHP",
                description: "Veja a documentação de PHP",
                value: "PHP"
                },
                {
                label: "flet",
                description: "Veja a documentação de flet",
                value: "flet"
                },
                {
                label: "discord.js",
                description: "Veja a documentação de discord.js",
                value: "discordjs"
                }
            )
    )

module.exports = {
    data: new SlashCommandBuilder()
        .setName("docs")
        .setDescription("Lista das Documentações mais Relevantes para o Grupo"),
    
    async execute(interaction) {
        await interaction.reply({content: "Selecione uma das techs abaixo:", components: [row]})
    }

}