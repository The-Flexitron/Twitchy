var tmi = require('tmi.js');

var options = {
  options: {
    debug:true
  },
  connection: {
    cluster: "aws",
    reconnect: true
  },
  identity: {
    username: "{{username}}",
    password: "{{Oauth}}"
  },
  channels: ["{{channel}}"]
}

var client = new tmi.client(options);
client.connect();

client.on('connected', function() {
  client.action("{{channel}}", "Twitchy is operational!");
})
