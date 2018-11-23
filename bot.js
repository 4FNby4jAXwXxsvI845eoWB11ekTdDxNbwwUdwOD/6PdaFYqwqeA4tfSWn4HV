const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "1";

client.on('ready', () => {
  console.log(`...`);  
});

client.on('ready', async() => {
var server = "514822456998101002"; //
var channel = "514822457706807312";//
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**hussein hussein hussein hussein hussein hussein hussein hussein hussein hussein hussein hussein hussein hussein hussein hussein hussein hussein hussein hussein hussein hussein hussein hussein hussein hussein hussein hussein hussein hussein**')
    },305);
 });

 
client.login("NTE0ODI0MzQ0NjE1MjU2MDY3.DtcOvQ.RtuKA7Ou6jaQ5NY2H9AWVhYMyUk");
