require("dotenv").config();
const {Client, IntentsBitField} = require("discord.js");

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent
    ]
});


client.on("ready", (c) => {
    console.log(`✅ ${c.user.tag} is Online`);
});

client.on("interactionCreate", (interaction) => {
    
    if(!interaction.isChatInputCommand()){
        return;
    }

    if(interaction.commandName === "hey"){
        interaction.reply("hey!");
    }

    if(interaction.commandName === "ping"){
        interaction.reply("Pong!");
    }

    if(interaction.commandName === "add"){
        const num1 = interaction.options.get('first-number').value;
        const num2 = interaction.options.get('second-number').value;

        interaction.reply(`Addition of ${num1} and ${num2} is : ${num1 + num2}`);
    }

    if(interaction.commandName === "add-choices"){
        const num1 = interaction.options.get('first-number').value;
        const num2 = interaction.options.get('second-number').value;

        interaction.reply(`Addition of ${num1} and ${num2} is : ${num1 + num2}`);
    }
});


client.login(process.env.BOT_TOKEN);