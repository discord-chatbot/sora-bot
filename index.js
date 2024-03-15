const dotenv = require('dotenv');
// Check for --dev option
if (process.argv.includes('--dev')) {
    dotenv.config({path: '.env.dev'});
} else {
    dotenv.config({path: '.env'});
}

const {token} = process.env
const {ShardingManager} = require('discord.js');

const manager = new ShardingManager('./bot.js', {token: token});

manager.on('shardCreate', shard => console.log(`Launched shard ${shard.id}`));

manager.spawn();
