require("dotenv").config(); //package for environmental variables

const Discord = require("discord.js"); //package for discord stuff
const client = new Discord.Client();

client.on("ready", () => {
	console.log("Logged in as ${client.user.tag}!");
});

client.on("message", msg => {
	if(msg.content === "ping"){
		msg.reply("pong");
	}
});

client.on("message", msg =>{
	if(msg.content.startsWith("!kick")){
		const member = msg.mentions.members.first();
		
		if(!member){
			return msg.reply("Who are you kicking?");
		}
		
		if(!member.kickable){
			return message.reply("You can't kick them");
		}
		
		return member.kick().then(() => msg.reply("${member.user.tag} was kicked.").catch(error => msg.reply("An error occured.")));
	}
});

client.on("guildMemberAdd", member => {
	member.send("Welcome to the server! My favorite class is the spy. Thanks, and have fun.");
});



client.login(process.env.BOT_TOKEN);