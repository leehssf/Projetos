iconst { AoiClient, LoadCommands } = require("aoi.js");
const {
  AoiVoice,
  PlayerEvents,
  PluginName,
  Cacher,
  Filter,
} = require("@akarui/aoi.music");

const { Util } = require("aoi.js");
const { setup } = require("aoi.parser");

setup(Util);

const client = new AoiClient({
  token: "MTA3NTM4NTU5NTM4OTU1ODg4NA.GRNGI7.kUH4kMBgFOKRITqnMjOSsv4UXDb5OmMOpQW2bU",
  prefix: ["$getGuildVar[prefixo]", '<@$clientID>', '<@!$clientID>'],
  intents: ["Guilds", "GuildMessages", "MessageContent", "GuildVoiceStates", "GuildMessageReactions"],
  events: ["onMessage", "onInteractionCreate", "onGuildJoin", "onGuildLeave", "onFunctionError"],
  database: {
    type: "aoi.db",
    db: require("aoi.db"),
    tables: ["main"],
    path: "./database/",
    extraOptions: {
      dbType: "KeyValue",
    },
  },
});

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Quack quack');
});

app.listen(3000, () => {
    console.log('Quack quack');
});

const voice = new AoiVoice(client, {
  searchOptions: {
    soundcloudClientId: "203982951",
    youtubegl: "US",
  },
  requestOptions: {
    offsetTimeout: 0,
    soundcloudLikeTrackLimit: 200,
  },
});

voice.addPlugin(PluginName.Cacher, new Cacher("memory"));
voice.addPlugin(
  PluginName.Filter,
  new Filter({
    filterFromStart: false,
  }),
);

voice.bindExecutor(client.functionManager.interpreter);

client.variables({
  prefixo: ".", 
cor: "#faec87", 
warn: "0", 
logs: "false",
patopoints: "0", 
cd_daily: "0"
})

client.status({
  name: "💛 › Quack quack!",
type: "PLAYING",
  status: "online",
  time: 30
})

client.command({
  name: "<@$clientID>",
  aliases: ['<@!$clientID>'], 
  nonPrefixed: 'true',
  code: `
  $reply
  Oii $username, use \`$getGuildVar[prefixo]ajuda\` para ver meus comandos!  $onlyIf[($commandInfo[$advancedTextSplit[$replaceTextWithRegex[$replaceText[$replaceText[$replaceText[$message[1];
;];<@!$clientID>;;1];<@$clientID>;;1]; +;g; ]; ;1];name]==)&&($commandInfo[$advancedTextSplit[$replaceTextWithRegex[$replaceText[$replaceText[$replaceText[$getMessage[$channelID;$messageID];
;];<@!$clientID>;;1];<@$clientID>;;1]; +;g; ]; ;2];name]==);]`
});

client.readyCommand({
  channel: "1182000775161970698",
  code: `
$randomText[Bom dia! Acordei com o ping em \`$pingms\`.;Hum... Bom dia, acho que dormi demais... \`(Ping: $pingms)\`;Bom dia! Oxi, quem me deixou aqui nesse armário?! \`(Ping: $pingms)\`]
$joinVC[1182032431671427173]`
});

const loader = new LoadCommands(client);
loader.load(client.cmd, `./comandos/`);
