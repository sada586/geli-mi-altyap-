const Discord = require('discord.js');
const db = require('quick.db');
exports.run = async (client, message, args) => { 
const akardiyan = require("../ayarlar.json");
let prefix = await db.fetch(`prefix.${message.guild.id}`) || akardiyan.prefix 
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`**Bu komutu kullanabilmek için** "\`Yönetici\`" **yetkisine sahip olmalısın.**`);
  
  let mesaj = args.slice(0).join(' ');
  if(mesaj.length < 5) return message.channel.send('**Sayaç Hoşgeldin Mesaj Sistemi İçin En Az 5 Karakter Belirtebilirsin!**\n`**__Örnek__**: ${prefix}sayac-hg-msj -server-, Sunucumuza Hoşgeldin, -uye-! -hedefuye- Kişiye Ulaşabilmek İçin -kalanuye- Kişi Kaldı!, **-uyesayisi-** Kişiyiz.`')
  
 message.channel.send('**Sayaç Hoşgeldin mesajı**\n`'+mesaj+'`\nOlarak ayarlandı.') 
 db.set(`sayacHG_${message.guild.id}`, mesaj)
    
  
};
exports.config = {
  name: 'sayac-hg-mesaj',
  aliases: ['sayaç-hg-mesaj']
};

