// Bot.JS //

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log("je suis prêt !");
  client.user.setGame("Sa Bim Bam !!!");
});

client.on('message', message => {
  if(message.content === "yo") {
    message.reply("@user Salut");
    }
}); 

client.login(process.env.BOT_TOKEN);

    

  
