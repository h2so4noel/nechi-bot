const _ = require('lodash')
const Discord = require('discord.js');
const client = new Discord.Client();

const umuToken = 'MzQxODY0MTM0MzQ3OTgwODAx.DGHXoQ.exsnNhKELtR4O9a-NEj-jusjiYA'

function logMsg (op) {
  if (op) console.log('Triggering: ' + op)
  console.log('Sending messages, UMU!')
}

client.on('ready', () => {
  console.log('Umu, ready for action!');
});

client.on('message', message => {
  const enkidu = '<:riyo_enkidu:341123205345574912>'
  const umu = '<:nechi_brag:341123508526383111>'
  const fire = ':fire:'


  if (message.content.includes('เอนคิดู')) {
    logMsg('Enkidu')
    message.channel.send(fire + fire + fire + '\n' + fire + enkidu + fire + '\n' + fire + fire + fire)
  }
  else if (message.content.includes('เนชิ' || 'อุมุ')) {
    logMsg('Umu')
    message.channel.send(fire + fire + fire + '\n' + fire + umu + fire + '\n' + fire + fire + fire)
  }
});

client.login(umuToken);
