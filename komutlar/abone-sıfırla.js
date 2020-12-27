const Discord = require("discord.js");
const db = require('quick.db')
  //CodeArius
module.exports.run = async (client, message, args) => {
   if (!message.member.roles.cache.has("769604159699419136"))// Abone Sorumlusu id
    return message.channel.send(      
      `Bu komutu kullanabilmek için \`Merziki\` olmasınız.`
    );
  let kişi = message.mentions.users.first();
  if(!kişi) return message.channel.send('Bir kişiyi etiketlemen gerekli.')
  if(kişi) {  //CodeArius
  message.channel.send(`<@!${kişi.id}> Kişisinin teyit bilgileri başarıyla sıfırlandı.`)
db.delete(`merziki_${kişi.id}`)
  }
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 3
};
exports.help = {
  name: 'abone-sıfırla'
}