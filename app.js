var config = require('./config.js');
var Bot = require('./Turntable-API/bot.js');
var bot = new Bot(config.auth, config.uid, config.rid);

bot.on('roomChanged', function (data) {
  bot.speak("\
    Hello! I'm Chaotic Organizer, the mod bot.\
    Say /hello to me (that's all I understand right now)\
  ");
});

bot.on('speak', function (data) {
  if (data.text.match(/^\/hello$/)) {
    bot.speak('Hey! How are you @'+data.name+'?');
  }
});