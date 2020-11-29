const Discord = require('discord.js');
const client = new Discord.Client();

const settings=require('./settings.json')
const banlist=require('./BlackList.json')
let prefix='+'
let küfürler_list= settings.küfür;
küfürler_list=küfürler_list.split(',');
küfürsay=küfürler_list.length;
bansay=banlist.length;

client.on('ready', () =>
{
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('giriş yapıldı');
});

client.on('message', msg => 

{
  kullanıcı_mej=msg.content;
  kullanıcı_mej_list=msg.content.split(' ');
  if(msg.author.bot)return;
  for(i=0;i<kullanıcı_mej_list.length;i++)
  {
    for(a=0;a<küfürler_list.length;a++)
    {
      if(kullanıcı_mej_list[i]==küfürler_list[a])
      {
        msg.reply('küfür etmemelisin');
        //küfürü sildir
        //guild.members.ban(msg.guild.user,'küfür amk');
        break;
      }
    }
  }
  
  if(msg.content.startsWith(prefix)) return;
  if (msg.content == 'ping')
  {
    msg.channel.send(msg)//Logged in as bot1#1950!
    msg.channel.send(prefix+'pong');
  }
  if (msg.content === settings.küfür)
  {
    //(msg.user)
  }
  
  if(msg.content[0]=="!")//adminler için
  {
      if(kullanıcı_mej_list[0]==='!banla')//ban
      {
        msg.reply('banla komutu etkinleşti');
        //guild.members.ban(kullanıcı_mej_list[1]+" + "+kullanıcı_mej_list[2]);

      }
      else if(kullanıcı_mej_list[0]==='!bankaldır')////ban kaldır
      {msg.reply('banlakaldır komutu etkinleşti');}
      else if(kullanıcı_mej_list[0]==='!rolekle')//rol ekle
      {msg.reply('rolekle komutu etkinleşti');}
      else if(kullanıcı_mej_list[0]==='!rolkaldır')//rol kaldır
      {msg.reply('rolkaldır komutu etkinleşti');}
      else if(kullanıcı_mej_list[0]==='!timeout')//time out ekle
      {msg.reply('timeout komutu etkinleşti');}
      else if(kullanıcı_mej_list[0]==='!timeoutkaldır')//time out kaldır
      {msg.reply('timeoutkaldır- komutu etkinleşti');}
      else if(kullanıcı_mej_list[0]==='!ping')
      {msg.channel.send("Botun gecikme süresi: " + Math.round(client.ping) + " MS");}
  }

  

  // başka bir channel'a mesaj
  if(msg.content.startsWith(prefix+'send'))
  { 
    msg.guild.channels.get('727603054769340528').send('selam yan kanaldan geldim')
  }
  if(msg.content==='!channelİnfo')
  {
    msg.channel.send(msg.channel.id);
    msg.channel.send(msg.channel.name);  
  }
  if(msg.content==='!zar')
  { 
    duyuru='0-10 arası rasgele bir sayı geliyor!=====>'
    msg.reply(duyuru+Math.round(Math.random()*10+0,9));
  }
  
}


)
client.login(settings.token);

/*
küfür eden kişi 3. küfürde mutelenicek
reklam yapmak kişi jail 2. reklamında ban

*/