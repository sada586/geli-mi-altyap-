const Discord = require('discord.js'); 
const db = require('quick.db'); 
const akardiyan = require('../ayarlar.json')
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || akardiyan.prefix
if (!message.guild) return;


const sayfa = [`**${message.guild.name} | Sunucu Ayarları \n**\n**Botun Prefixi :** \**${prefix}**\n**Küfür Engel:** ${db.fetch(`reklamengel_${message.guild.id}`) ? `:white_check_mark:` : `:negative_squared_cross_mark:` }\n**Reklam Engel:** ${db.fetch(`kufurE_${message.guild.id}`) ? `:white_check_mark:` : `:negative_squared_cross_mark:` }`] 
const ayar = new Discord.MessageEmbed() 
.setColor(0xffd100) 
.setDescription(sayfa)
.setTimestamp() 
message.channel.send(ayar) 
}; 


exports.config = { 
name: "ayarlar",
aliases: ["sunucu-ayarları"]
}