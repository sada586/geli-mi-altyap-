const db = require('quick.db')
const Discord = require('discord.js')
 
 
exports.run = async (bot, message, args) => {

  const akardiyan = require("../ayarlar.json");
let prefix = await db.fetch(`prefix.${message.guild.id}`) || akardiyan.prefix 
  
  if (!args[0]) return message.channel.send(`Aç yada kapat yazmalısın!! Örnek: **${prefix}sa-as aç**`)
  if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('**Bu komutu kullanmak için \`MESAJLARI_YÖNET\` yetkisine sahip olmalısın!**')
 
  if (args[0] === 'aç') {
    
    db.set(`ssaass_${message.guild.id}`, 'acik')
    message.channel.send(`**Artık bot Sa diyince As diyecek. Kapatmak için "\`${prefix}sa-as kapat\`" yazmalısın.**`)
 
  }
  
  if (args[0] === 'kapat') {
    
    db.set(`ssaass_${message.guild.id}`, 'kapali')
    message.channel.send(`**Artık biri sa diyince cevap vermeyecek.**`)

  }
 
}
exports.config = {
  name: 'sa-as',
  aliases: ['sa-as-sistemi']
};
 
