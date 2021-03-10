const Discord = require('discord.js');
const moment = require('moment')
const humanizeDuration = require("humanize-duration")

exports.run = async (client, message, args)=> {
//let us = message.guild.members.cache.find(u => args.slice(0).join(' ').includes(u.username))
let muser = message.guild.member(message.mentions.users.first());
let userid;
if(isNaN(args[0])){
  if(!muser){
    userid = message.author.id;
  }else{
    userid = muser.id;
  }
}else{
  userid = args[0];
}
try{
let user = await client.users.fetch(userid);
let oluşturma = `${humanizeDuration(Date.now() - user.createdAt, {largest: 6, round: true})}`
let oluşturma2 = `${humanizeDuration(Date.now() - message.guild.members.cache.get(user.id).joinedAt, {largest: 6, round: true})}`
let nickname = message.guild.member(user).displayName 
let mentionFlags = user.flags.toArray().join('  ')
.replace('HOUSE_BRAVERY', '<:hypesquad_bravery:818071349808463902>')  
.replace('HOUSE_BRILLIANCE', '<:hypesquad_briliance:818071170493841419>')
.replace('HOUSE_BALANCE', '<:hypesquad_balance:818071472558833707>')
.replace('EARLY_VERIFIED_DEVELOPER', '<:devNew:818071613085319188>')
.replace('VERIFIED_DEVELOPER', '')
.replace('DISCORD_EMPLOYEE', 'Discord Çalışanı')
.replace('PARTNERED_SERVER_OWNER', '<:DiscordPartner:818072135595196436>')
.replace('HYPESQUAD_EVENTS', '<:hypesquad_events:818072675494133761> ')
.replace('BUGHUNTER_LEVEL_1', '<:BugHunter:818072859779661825>')
.replace('EARLY_SUPPORTER', 'Erken Destekçi')
.replace('TEAM_USER', 'Takım Üyesi')
.replace('SYSTEM', 'Sistem')
.replace('BUGHUNTER_LEVEL_2', '<:BugHunter_2:818072971888558090>')
.replace('VERIFIED_BOT', 'Onaylı Bot');

let avatar = user.displayAvatarURL({dynamic: true, size: 1024})
if(avatar.endsWith(".gif?size=1024")) {

let embed = new Discord.MessageEmbed()
.setAuthor(user.tag + ``, user.displayAvatarURL({dynamic: true}))
.addField('》User Info', [
`• **Name:** ${user.tag} ${mentionFlags} <:nitro_badge:818180020707131414>`,
`  • **Avatar:** [PNG](${user.displayAvatarURL({ format: 'png',  size: 1024 })}) | [JPEG](${user.displayAvatarURL({ format: 'jpeg',  size: 1024 })}) | [GIF](${user.displayAvatarURL({ format: 'gif',  size: 1024 })}) | [WEBP](${user.displayAvatarURL({ format: 'webp',  size: 1024 })})`,
`  • **Created At:** ${moment(  user.createdAt ).format('DD/MM/YYYY HH:mm:ss')}`,
'   └> `'  + `${oluşturma}` +' ago`'
])
.addField('》Member Info', [
  `• **Nickname:** ${nickname}`,
  `  • **Joined At:** ${moment.utc(message.guild.members.cache.get(user.id).joinedAt).format('DD/MM/YYYY HH:mm:ss')}`,
  '   └> `'  + `${oluşturma2}` +' ago`',
  `  • **Highest Role:** <@&${message.guild.member(user).roles.highest.id}>`,
  `   └> **Hex Color:** **${message.guild.member(user).roles.highest.hexColor}**`,
  `  • **Member Roles:** **${message.guild.member(user).roles.cache.size -1}**`
])
.setFooter('TheFuture v1.2', client.user.avatarURL())
.setThumbnail(user.displayAvatarURL({dynamic: true}))
.setColor(message.guild.member(user).roles.highest.hexColor)
message.channel.send(embed)

} else {

  let embed = new Discord.MessageEmbed()
.setAuthor(user.tag + `'s User Info`, user.displayAvatarURL({dynamic: true}))
.addField('》User Info', [
  `• **Name:** ${user.tag} ${mentionFlags}`,
  `  • **Avatar:** [PNG](${user.displayAvatarURL({ format: 'png',  size: 1024 })}) | [JPEG](${user.displayAvatarURL({ format: 'jpeg',  size: 1024 })}) | [WEBP](${user.displayAvatarURL({ format: 'webp',  size: 1024 })})`,
  `  • **Created At:** ${moment(user.createdAt ).format('DD/MM/YYYY HH:mm:ss')}`,
  '   └> `'  + `${oluşturma}` +' ago`'
])
.addField('》Member Info', [
  `• **Nickname:** ${nickname}`,
  `  • **Joined At:** ${moment.utc(message.guild.members.cache.get(user.id).joinedAt).format('DD/MM/YYYY HH:mm:ss')}`,
  '   └> `'  + `${oluşturma2}` +' ago`',
  `  • **Highest Role:** <@&${message.guild.member(user).roles.highest.id}>`,
  `   └> **Hex Color:** **${message.guild.member(user).roles.highest.hexColor}**`,
  `  • **Member Roles:** **${message.guild.member(user).roles.cache.size -1}**`
])
.setFooter('TheFuture v1.2', client.user.avatarURL())
.setThumbnail(user.displayAvatarURL({dynamic: true}))
.setColor(message.guild.member(user).roles.highest.hexColor)
message.channel.send(embed)

}
}catch{
  message.channel.send("Bir Hata Var!");
  return;
}

};

 exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ui'],
  permLevel: 0
};

exports.help = {
  name: 'userinfo',
  description: '',
  usage: 'userinfo [@kullanıcı]'
};
//let mentionFlags = user.flags.toArray().join('  ')
//.replace('HOUSE_BRAVERY', '<:bravery:792828246777528350>')  
//.replace('HOUSE_BRILLIANCE', '<:hypesquad_briliance:818071170493841419>')
//.replace('HOUSE_BALANCE', '<:balance:792828202459594822>')
//.replace('VERIFIED_DEVELOPER', ':botdev:')
//.replace('DISCORD_EMPLOYEE', 'Discord Çalışanı')
//.replace('PARTNERED_SERVER_OWNER', 'Discord Partner')
//.replace('HYPESQUAD_EVENTS', 'HypeSquad Events')
//.replace('BUGHUNTER_LEVEL_1', 'Bug Avcısı 1. Lvl')
//.replace('EARLY_SUPPORTER', 'Erken Destekçi')
//.replace('TEAM_USER', 'Takım Üyesi')
//.replace('SYSTEM', 'Sistem')
///.replace('BUGHUNTER_LEVEL_2', 'Bug Avcısı 2. Lvl')
//.replace('VERIFIED_BOT', 'Onaylı Bot');//