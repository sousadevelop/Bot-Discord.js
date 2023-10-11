const { Client, Events, GatewayIntentBits, Collection } = require('discord.js');

// Configurando o dotenv
const dotenv = require('dotenv')
dotenv.config()
const { TOKEN, CLIENT_ID, GUILD_ID } = process.env

// Importação dos Comandos
const fs = require('node:fs')
const path = require('node:path')
const commandPath = path.join(__dirname, "commands")
const commandFiles = fs.readdirSync(commandPath).filter(file => file.endsWith(".js"))

// Instanciando o Client
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.command = new Collection()


for (const file of commandFiles) {
    const filePath = path.join(commandPath, file)
    const command = require(filePath)
    if ("data" in command && "execute" in command) {
        client.command.set(command.data.name, command)
    } else {
        console.log(`O "data" ou "execute" do comando a seguir está ausente\n${filePath}.`)
    }
}

// Login do Bot
client.once(Events.ClientReady, c => {
	console.log(`Parabéns! Login realizado como ${c.user.tag}`)
});

// Uso do Token para logar
client.login(TOKEN)

// Ouvindo as interações com o bot
client.on(Events.InteractionCreate, async interaction => {
    if(!interaction.isChatInputCommand()) return
    const command = interaction.client.commands.get(interaction.commandName)
    if(!command) {
        console.error("Sinto muito, este comando não está no nosso repositório :/")
        return
    }
    try {
        await command.execute(interaction)
    } catch (error) {
        console.error(error)
        await interaction.reply("Lamento, a execução deste comando não pode ser bem sucedida :/")
    }
})