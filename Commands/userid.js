const Discord = module.require("discord.js");

module.exports = {
    name:"userid",
    run: async (bot, message, args) => {
    var mention = message.guild.member(message.mentions.users.first());
    if(!mention) return message.channel.send("Mention a user to get their ID")
    const lolid = new Discord.MessageEmbed()
    const lolicon = mention.user.avatarURL;
    .setThumbnail(mention.user.avatarURL)
    .setColor("RANDOM")
    .setTitle('Here is ' + `${mention.user.username}\'s ID`)
    .setDescription(`${mention.id}`)
    .setThumbnail(lolicon)
    message.channel.send(lolid)  
}
}
