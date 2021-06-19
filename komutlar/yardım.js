const db = require("quick.db");
const Discord = require('discord.js');
const akardiyan = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || akardiyan.prefix 
let yardım = new Discord.MessageEmbed()  
.setAuthor(`Ovanakovic Yardım Menüsü`, client.user.avatarURL())
.setColor('GREEN')
.setDescription(`:bangbang: Beni Sunucunuca Eklemek İçin \`${prefix}davet\` Yazabilirsiniz :bangbang:`)
.setDescription(`• [Beni Sunucuna Ekle](https://discord.com/oauth2/authorize?client_id=777498134828810272&scope=bot&permissions=8)\n • [Website](https://ovanakovic-bot.glitch.me)`) 
.addField(`__Genel Komutlar__`,`\`${prefix}genel\``,true)
.addField(`__Mod Komutları__`,`\`${prefix}moderasyon\` `,true)
.addField(`__Guard Komutları__`,`\`${prefix}koruma\`  `,true)
.addField(`__Eğlence Komutları__`,`\`${prefix}eğlence\`  `,true)
.addField(`__Müzik Komutları__`,`\`${prefix}müzik\` `,true)
.addField(`__Eklenti Komutları__`,`\`${prefix}eklenti\`  `,true)
.addField(`__Prefix Değiştir__`,`\`${prefix}prefix\` `,true)
.addField(`__Bilgilendirme__`,`\`${prefix}davet\` | Beni Sunucunuza Davet Edersiniz\n\`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n\`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`)
.setImage(`https://cdn.discordapp.com/attachments/797498771788660747/832245310537334835/standard.gif`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(yardım) 
  };
exports.config = {
name: "yardım",
  aliases: []
}