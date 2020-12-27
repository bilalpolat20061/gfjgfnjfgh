const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  if (!message.member.roles.cache.has("770363301599117383"))// Abone Sorumlusu id
    return message.channel.send(      
      `Bu komutu kullanabilmek için \`Abone Yetkilisi\` rolüne sahip olmasınız.`
    );
  let merziki = db.fetch(`merziki_${message.author.id}`)

  let merziki2 = message.mentions.users.first();
  if (!merziki2)
    return message.channel.send("Bir Kişiyi Etiketlemen Gerekiyor!");
  let rol = message.mentions.roles.first();
  let member = message.guild.member(merziki);
  member.roles.add("784302415230926849"); //abone rolü idsi
  let aboneembed = new Discord.MessageEmbed()
   .setTitle("<a:konf:774629653763457055> ・ Abone Rolü Verildi")
        .setColor('#f0eb0e')
        .setDescription(`${message.author} **:** Abone Rolü Verme Sayısı: **${merziki ? `${merziki}` : "0"}**`)
        .addField("<a:elmas:774629652353515552> ・ Abone Rolü Veren Yetkili", `${message.author}`, true)
        .addField("<a:ZilGif:774629676437995521> ・ Abone Rolü Alan Kullanıcı", `${merziki2}`, true)
        .setColor("#7f00ff")
        .setTimestamp();

  let abonelog = client.channels.cache.get("769612726816210994")// abone log id
     if (!abonelog) return message.channel.send("Bu kanalda abone rolü verlilemez!");
    abonelog.send(aboneembed)
  db.add(`merziki_${message.author.id}`, 1)

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["abone"],
  permLevel: 0
};

exports.help = {
  name: "a",
  description: "abone",
  usage: "a"
};
