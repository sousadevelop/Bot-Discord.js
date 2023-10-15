const { SlashCommandBuilder, EmbedBuilder } = require("discord.js")

const exampleEmbed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle("Comandos do Git para Subir um Projeto")
	.addFields(
        { name: '\u200B', value: '\u200B' },
		{ name: '$ git init', value: 'Cria um novo repositório local com um nome especificado', inline: true },
        { name: '$ git add .', value: 'Adiciona todos os arquivos no snapshot para subir', inline: true },
        { name: '$ git commit -m "frase commit"', value: 'Grava de forma permanente o snapshot dos arquivos com uma mensagem', inline: true },
        { name: '$ git branch -M main', value: 'Determina a branch principal com o nome de Main', inline: true },
        { name: '$ git remote add origin <url-https-projeto>', value: 'Faz um link do projeto local para o projeto remoto', inline: true },
        { name: '$ git push -u origin main', value: 'Envia todos os commits locais para o Github', inline: true },
	)

module.exports = {
    data: new SlashCommandBuilder()
        .setName("git")
        .setDescription("Relembrar comandos do Git"),

    async execute(interaction) {
        await interaction.reply({ embeds: [exampleEmbed] })
    }
}