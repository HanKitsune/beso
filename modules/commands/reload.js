module.exports.config = {
	name: "reload",
	version: "1.0.0",
	hasPermssion: 1,
	credits: "Chill with Tea",
	description: "Khởi động lại Bot",
	commandCategory: "Tiện ích",
	usages: "reload + time",
	cooldowns: 5
};

module.exports.run = async ({ api, event, args, Users }) => {
 const permission = ["100050999371837",""];
             if (!permission.includes(event.senderID))
             return api.sendMessage("《Muốn reload sao ừ bạn không đủ tuổi》", event.threadID, event.messageID);
  const name = await Users.getNameUser(event.senderID)
    let uid = event.senderID;
  var vtan = moment.tz('Asia/Ho_Chi_Minh').format('HH:mm:ss || DD/MM/YYYY');
	const { threadID, messageID } = event;
	var time = args.join(" ");
	var rstime = "68";
	if (!time) rstime = "69";
	else rstime = time;
	api.sendMessage(`====[ 𝐑𝐄𝐋𝐎𝐀𝐃 ] ====\n━━━━━━━━━━━━━━━━\n[🍍] → 𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 : ${name}\n[🥥] → 𝗩𝗮̀𝗼 𝗟𝘂́𝗰 : ${vtan}\n━━━━━━━━━━━━━━━━\n[𝗕𝗼𝘁] => 𝗦𝗲̃ 𝗿𝗲𝗹𝗼𝗮𝗱 𝗹𝗮̣𝗶 𝗯𝗼𝘁 𝘀𝗮𝘂 ${rstime} 𝗴𝗶𝗮̂𝘆 𝗻𝘂̛̃𝗮  !`, threadID);
	return setTimeout(() => { api.sendMessage("[𝗕𝗼𝘁] => 𝗧𝗶𝗲̂́𝗻 𝗵𝗮̀𝗻𝗵 𝗥𝗲𝗹𝗼𝗮𝗱 𝗕𝗼𝘁 !",event.threadID,() => process.exit(1) )},	rstime * 1000);
    }