require("dotenv").config();
const {Client, IntentsBitField, EmbedBuilder} = require("discord.js");

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

client.on("interactionCreate",async (interaction) => {
    
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

    if(interaction.commandName === "embed"){
        const embed = new EmbedBuilder()
            .setTitle("Embed Title")
            .setDescription("This is an Description")
            .setColor("Random")
            .addFields(
                {
                    name: "Field 1",
                    value: "Value 1",
                    inline: true
                },
                {
                    name: "Field 2",
                    value: "Value 2",
                    inline: true
                }
            );

        interaction.reply({embeds: [embed]});
    }

});

client.on("interactionCreate",async (interaction) => {
    if(interaction.isButton()){
        try {
            await interaction.deferReply({ephemeral: true});

            const role = interaction.guild.roles.cache.get(interaction.customId);
            
            if(!role){
                interaction.editReply({
                    content: "I could not find the role"
                });
                return;
            }

            const hasRole = interaction.member.roles.cache.has(role.id);

            if(hasRole){
                await interaction.member.roles.remove(role);
                await interaction.editReply(`Role ${role} has been removed.`);
                return;
            }

            await interaction.member.roles.add(role);
            await interaction.editReply(`Role ${role} has been added.`);
        } 
        catch (error) {
            console.log(error);
        }
    }
});


client.login(process.env.BOT_TOKEN);