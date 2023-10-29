require("dotenv").config();
const {Client, IntentsBitField, ActionRowBuilder, ButtonBuilder, ButtonStyle} = require("discord.js");

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent
    ]
});


const roles = [
    {
        id:'1168110340073074718',
        label: 'Red'
    },
    {
        id: '1168110039551201376',
        label: 'Blue'
    }
]


client.on("ready", async (c) => {

    try{
        const channel = await client.channels.cache.get('1167317326048264194');
        if(!channel) {
            return;
        }

        const row = new ActionRowBuilder();

        roles.forEach((role) => {
            row.components.push(
                new ButtonBuilder().setCustomId(role.id).setLabel(role.label).setStyle(ButtonStyle.Primary)
            )
        });

        await channel.send({
            content: 'Claim or remove a new role',
            components: [row]
        });

        process.exit();
    }
    catch(error){
        console.log(error);
    }
    
});


client.login(process.env.BOT_TOKEN);