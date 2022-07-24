module.exports = {
  Admins: ["861219840240254976", "UserID"], //Admin du bot
  ExpressServer: true,
  DefaultPrefix: process.env.Prefix || "-", //Prefix de base
  Port: 3000, 
  SupportServer: "https://discord.gg/jyhsJYAHuV", //Serveur support
  Token: process.env.Token || "MTAwMDM0NDM0NjYzOTQ4Njk4Nw.GULMh9.QRY1yHFvpFhGWXsEVGLjpD0Zzz58JuyQQr-lEE", //Ton Token
  ClientID: process.env.Discord_ClientID || "947133900457648200", //ID du Bot
  ClientSecret: process.env.Discord_ClientSecret || "cmUx3iM4-uuolsTANHSE4lavKsKxGCdT", //Client Secret du Bot
  Scopes: ["identify", "guilds", "applications.commands"], 
  CallbackURL: "/api/callback", 
  "24/7": false, 
  CookieSecret: "Pikachu is cute", 
  IconURL:
    "https://cdn.discordapp.com/attachments/997213515699986482/1000346215105429545/th_10.jpg", //Logo format discord
  Permissions: 2205280576, 
  Website: process.env.Website || "http://localhost", 

  //Lavalink
   Lavalink: {
    id: "Main",
    host: "lava.link",
    port: 80,
    pass: "youshallnotpass", 
    secure: false, 
  },
  

  //Accès = https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "ID", //Spotify ID Public
    ClientSecret: process.env.Spotify_ClientSecret || "ID", //Spotify Client Secret
  },
};
