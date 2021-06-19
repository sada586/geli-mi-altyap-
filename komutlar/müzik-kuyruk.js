const Discord = require("discord.js")
const fs = require("fs")
const Alone = "#36393e";
const Dogru = "#22BF41";
const Hata = "#f30707";
const db = require("quick.db");
const akardiyan = require("../ayarlar.json");

module.exports.run = async (client, message) => {
  	let p = db.fetch(`prefix.${message.guild.id}`) || akardiyan.prefix;
const kuyruk = client.player.getQueue(message.guild.id);

//------------------------------------------------//

const hata1 = new Discord.MessageEmbed()
.setColor(Hata) 
.setTitle("• Hata: 010 •")
.setThumbnail(`https://drummofficial.com/wp-content/uploads/2017/08/equalizer3.gif`)
.setDescription(`Kuyruğu görüntüleyebilmek için bir ses kanalında olmanız gerekmektedir!`)
.setFooter(`©️ Tüm hakları saklıdır | Yeni Nesil Gelişmiş Bot | 2020`, client.user.avatarURL());  
if(!message.member.voice.channel) return message.channel.send(hata1)

//------------------------------------------------//
  
const hata3 = new Discord.MessageEmbed()
.setColor(Hata) 
.setTitle("• Hata: 001 •")
.setThumbnail(`https://drummofficial.com/wp-content/uploads/2017/08/equalizer3.gif`)
.setDescription(`Şu anda hiçbir müzik çalmamaktadır!`)
.setFooter(`©️ Tüm hakları saklıdır | Yeni Nesil Gelişmiş Bot | 2020`, client.user.avatarURL());    
if(!kuyruk) return message.channel.send(hata3)

//------------------------------------------------//    
  
if(!message.member.voice.channel) return message.channel.send({embed: {color: Hata, description: `Kuyruğu görüntüleyebilmek için bir ses kanalında olmanız gerekmektedir!` }})
if(!kuyruk) return message.channel.send({embed: {color: Hata, description: `Şu anda hiçbir müzik çalmamaktadır!` }})
let q = kuyruk.songs.map((song, i) => {
return `${i === 0 ? 'Şu Anda Çalınan Müzik' : `\nKuyruk No: ${i}`} \n**Müziğin Adı:** \`${song.name}\` \n**Müziği Yükleyen Kanal:** \`${song.author}\``
    }).join('\n');  
message.channel.send({embed: {color: Dogru, title: `Müzik Kuyruğu`, description: `${q}`}})
}
  
module.exports.config = {
    name: "kuyruk",
    aliases: []
};
