module.exports = async (client) => {
  client.Ready = true, 
  client.user.setPresence({
    status: "online",  // You can show online, idle, and dnd
    activity: {
        name: "!help", // The message shown
        type: "PLAYING", // PLAYING, WATCHING, LISTENING, ,
        url: 'LanglamDEV',
    }
});
    client.Manager.init(client.user.id);
    client.log("Connexion réussie en tant que " + client.user.tag); // You can change the text if you want, but DO NOT REMOVE "client.user.tag"
client.RegisterSlashCommands();
};

