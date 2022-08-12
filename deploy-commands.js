const { SlashCommandBuilder, Routes } = require('discord.js');
const { REST } = require('@discordjs/rest');
const { clientId, guildId, token } = require('./config.json');

const commands = [
    new SlashCommandBuilder().setName('help').setDescription('Shows bot commands!'),
    new SlashCommandBuilder().setName('playrock').setDescription('Starts the game with higher stats in rock!'),
    new SlashCommandBuilder().setName('playpaper').setDescription('Starts the game with higher stats in Paper!'),
    new SlashCommandBuilder().setName('playscissors').setDescription('Starts the game with higher stats in Scissors!'),
    new SlashCommandBuilder().setName('restart').setDescription('Restore all of the players health'),
]
	.map(command => command.toJSON());

const rest = new REST({ version: '10' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);
