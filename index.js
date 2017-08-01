const _ = require('lodash')
const Discord = require('discord.js');
const client = new Discord.Client();

const umuToken = 'MzQxODY0MTM0MzQ3OTgwODAx.DGHXoQ.exsnNhKELtR4O9a-NEj-jusjiYA'
const nechiCreds = [
  'nechi',
  'เนชิ',
  'Nechi',
  'Nechigawara',
  '@Nechigawara'
]
const cryCreds = [
  'แง้',
  'QAQ',
  'cry',
  'cri'
]

function getEmbeds () {
  const embeds = []
  const cry = new Discord.RichEmbed()
    .setTitle('BibleThump')
    .attachFile('images/cry.png')
  const umu = new Discord.RichEmbed()
    .setTitle('Umu')
    .attachFile('images/umu.png')

  embeds.push(cry, umu)

  return embeds
}

client.on('ready', () => {
  console.log('Umu, ready for action!');
});

client.on('message', message => {
  const embedsObj = getEmbeds()
  const embeds = (embedTitle) => {
    return _.find(embedsObj, (obj) => {
      return obj.title === embedTitle
    })
  }

  if (nechiCreds.includes(message.content)) {
    message.reply('อุมุ', {embed: embeds('Umu')});
  }
  else if (cryCreds.includes(message.content)) {
    message.reply('แง้', {embed: embeds('BibleThump')});
  }
});

client.login(umuToken);
