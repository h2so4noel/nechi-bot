const _ = require('lodash')
const Discord = require('discord.js');
const client = new Discord.Client();

const umuToken = 'MzQxODY0MTM0MzQ3OTgwODAx.DGHXoQ.exsnNhKELtR4O9a-NEj-jusjiYA'

function logMsg (op) {
  if (op) console.log('Triggering: ' + op + ' msg from user: ')
}

client.on('ready', () => {
  console.log('Umu, ready for action!');
});

client.on('message', message => {
  const enkidu = '<:riyo_enkidu:341123205345574912>'
  const umu = '<:nechi_brag:341123508526383111>'
  const fire = ':fire:'

  const basiliskLink = 'http://imgur.com/a/wM52r'
  const mumiLink = 'http://imgur.com/a/qmWou'

  if (message.content.includes('!nechibot')) {
    const helpMsg = `เนชิ: Display Nero burning Rome.\nเอนคิดู: Burn Enkidu til he/she gets NP5.\nBasilisk: BASILISK TIEM!!!1!420!`

    logMsg('Displaying help msg')
    message.channel.send('', {embed: {
      title: 'NechiBot Commands',
      description: helpMsg
    }})
  }

  if (message.content.includes('เอนคิดู')) {
    logMsg('Enkidu')
    message.channel.send(fire + fire + fire + '\n' + fire + enkidu + fire + '\n' + fire + fire + fire)
  }
  else if (message.content.includes('เนชิ')) {
    logMsg('Umu')
    message.channel.send(fire + fire + fire + '\n' + fire + umu + fire + '\n' + fire + fire + fire)
  }
  else if (message.content.includes('Basilisk')) {
    logMsg('Basilisk Time')
    message.channel.send(basiliskLink)
  }
  else if (message.content.includes('มุมี้')) {
    logMsg('มุมี้')
    message.channel.send(mumiLink)
  }
});

client.login(umuToken);
