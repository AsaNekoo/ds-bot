import { Client, Events, GatewayIntentBits } from 'discord.js';

// Add your token here
const { token } = require('./config.json');

// Create a new client instance
const client: Client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, (readyClient) => {
    if (readyClient.user) {
        console.log(`Ready! Logged in as ${readyClient.user.tag}`);
    } else {
        console.error("Client user is undefined");
    }
});

// Log in to Discord with your client's token
client.login(token).catch((error) => {
    console.error("Failed to log in:", error);
});
