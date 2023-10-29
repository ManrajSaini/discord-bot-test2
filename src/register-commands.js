require("dotenv").config();
const {REST, Routes} = require("discord.js");

const commands = [
    {
        name: "hey",
        description: "Replies with hey!"
    },
    {
        name: "ping",
        description: "Pong!"
    }
];

const rest = new REST({version: '10'}).setToken(process.env.BOT_TOKEN);

async function registerCommands(){
    try {
        console.log("Registering slash commands ...");

        await rest.put(
            Routes.applicationGuildCommands(
                process.env.BOT_ID,
                process.env.SERVER_ID
            ),
            {body: commands}
        );

        console.log("Slash commands registered!");
    } 
    catch (error) {
        console.log(error);
    }
}

registerCommands();
