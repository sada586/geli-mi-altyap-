  const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message, args) => { 
const akardiyan = require("../ayarlar.json");
let prefix = await db.fetch(`prefix.${message.guild.id}`) || akardiyan.prefix   
let kanal = message.mentions.channels.first()
if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`**Bu komutu kullanabilmek için "\`SUNUCUYU YÖNET\`" yetkisine sahip olmalısın.**`);
  
 if(!kanal) return message.channel.send(`**Bu Özelliği Ayarlayabilmek İçin Bir Kanal Etiketlemelisin**\n **__Örnek__**: ${prefix}kayıt-kanal-ayarla \`#kayitkanal\``)
 
  message.channel.send(`**Kayıt kanalı** \`${kanal}\` **olarak ayarlandı!** `)
  db.set(`kayitKanal_${message.guild.id}`, kanal.id) 
};
exports.config = {
  name: 'kayıt-kanal-ayarla', 
  aliases: []
};

