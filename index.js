const Discord = require('discord.js');

const client = new Discord.Client();

console.log(cryObject)

const umuToken = 'MzQxODY0MTM0MzQ3OTgwODAx.DGHXoQ.exsnNhKELtR4O9a-NEj-jusjiYA'
const nechiCreds = [
  'nechi',
  'เนชิ',
  'Nechi'
]

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  const cryObject = new Discord.RichEmbed()
    .setTitle('cry.png')
    .attachFile('images/cry.png')
  if (nechiCreds.includes(message.content)) {
    message.reply('Testing embed', {embed: cryObject});
  }
});

client.login(umuToken);
