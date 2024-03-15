const dotenv = require('dotenv');
// Check for --dev option
if (process.argv.includes('--dev')) {
    dotenv.config({path: '.env.dev'});
} else {
    dotenv.config({path: '.env'});
}

const {token, clientId} = process.env;
const { REST, Routes } = require('discord.js');

const commands = [
    {
        name: '도움말',
        description: '사용법 설명'
    }
];

const rest = new REST('10').setToken(token);

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - Math.ceil(min))) + Math.ceil(min);

const randomMessage = (msgList) => msgList[getRandomInt(0, msgList.length)];

const replies = ["그래.", "맞아.", "어.", "아니.", "안돼.", "안.돼."];

const { Client, GatewayIntentBits, codeBlock } = require('discord.js');
const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

const fs = require('fs');
const help = fs.readFileSync("help.md").toString();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.shard.fetchClientValues('guilds.cache.size')
    .then(results => {
        console.log(`${results.reduce((acc, guildCount) => acc + guildCount, 0)} total guilds`);
    })
    .catch(console.error);

client.on('messageCreate', message => {
    const { content, channel, author } = message;

    if (!['소라고둥', '소라고동'].some(word => channel.name.includes(word)) || author.bot) 
        return;

    if (content.endsWith('?')) {
        message.reply(randomMessage(replies));
    } else {
        message.reply('다시 한 번 물어봐.');
    }
});

client.on('interactionCreate', async interaction => {
    if (interaction.isChatInputCommand() && interaction.commandName === '도움말') {
        await interaction.reply({
            content: codeBlock(help),
            ephemeral: true
        });
    }
});

(async () => {
    try {
        console.log('Started refreshing application (/) commands.');
        await rest.put(Routes.applicationCommands(clientId), { body: commands });
        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();

client.login(token);