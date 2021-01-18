const Discord = require("discord.js");

const Client = new Discord.Client;

Client.on("ready", () => {
    console.log("bot ON");
});

Client.on('guildMemberAdd', member =>{
    const channel = member.guild.channels.cache.find(channel => channel.name === "『🎆』𝘼𝙧𝙧𝙞𝙫𝙖𝙣𝙩𝙨");
  
    if(!channel) return;
    let embed = new Discord.MessageEmbed()
    .setAuthor(`Salut ${member.displayName} !`) 
    .setImage(member.user.displayAvatarURL())
    .setDescription(`Bienvenue sur ***MontrealRP.LIVE***! :maple_leaf:\nMerci de lire les règles et bon jeux! :innocent:`)
    .setColor("PURPLE")
    .setFooter(` ${member.user.createdAt} `)
  
    channel.send(embed)
  
  });


Client.login(process.env.TOKEN);