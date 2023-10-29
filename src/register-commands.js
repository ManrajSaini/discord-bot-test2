require("dotenv").config();
const {REST, Routes, ApplicationCommandOptionType} = require("discord.js");

const commands = [
    {
        name: "hey",
        description: "Replies with hey!"
    },
    {
        name: "ping",
        description: "Pong!"
    },
    {
        name: "add",
        description: "Add any two numbers",
        options: [
            {
                name: "first-number",
                description: "First Number",
                type: ApplicationCommandOptionType.Number,
                required: true
            },
            {
                name: "second-number",
                description: "Second Number",
                type: ApplicationCommandOptionType.Number,
                required: true
            }
        ]
    },
    {
        name: "add-choices",
        description: "Add two choosen numbers",
        options: [
            {
                name: "first-number",
                description: "First Number",
                type: ApplicationCommandOptionType.Number,
                choices: [
                    {
                        name: "one",
                        value: 1
                    },
                    {
                        name: "two",
                        value: 2
                    },
                    {
                        name: "three",
                        value: 3
                    }
                ],
                required: true
            },
            {
                name: "second-number",
                description: "Second Number",
                type: ApplicationCommandOptionType.Number,
                choices: [
                    {
                        name: "one",
                        value: 1
                    },
                    {
                        name: "two",
                        value: 2
                    },
                    {
                        name: "three",
                        value: 3
                    }
                ],
                required: true
            }
        ]
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
