module.exports.config = {
	name: "joinNoti",
	eventType: ["log:subscribe"],
	version: "1.0.1",
	credits: "naru06",
	description: "Thông báo bot hoặc người vào nhóm có random gif/ảnh/video",
	dependencies: {
		"fs-extra": "",
		"path": "",
		"pidusage": ""
	}
};

module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

	const path = join(__dirname, "cache", "joinGif");
	if (existsSync(path)) mkdirSync(path, { recursive: true });	

	const path2 = join(__dirname, "cache", "joinGif", "randomgif");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

    return;
}


module.exports.run = async function({ api, event, Users  }) {
	const { join } = global.nodemodule["path"];
	const { threadID } = event;
  ////////////////////////////////////////////////////////
  const thread = global.data.threadData.get(threadID) || {};
  if (typeof thread["joinNoti"] != "undefined" && thread["joinNoti"] == false) return;
  ///////////////////////////////////////////////////////
	if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
		api.changeNickname(`[ ${global.config.PREFIX} ] ${(!global.config.BOTNAME) ? "Made by Duy" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
		const fs = require("fs");
		return api.sendMessage("", event.threadID, () => api.sendMessage({body:`━━━━━━━━━━━━━━━━━\n►𝐊ế𝐭 𝐧ố𝐢 𝐁𝐨𝐭 𝐭𝐡à𝐧𝐡 𝐜ô𝐧𝐠◄\n━━━━━━━━━━━━━━━━━\n
➝『🌎』𝑇ℎ𝑒 𝑏𝑜𝑡 ℎ𝑎𝑠 𝑠𝑢𝑐𝑐𝑒𝑠𝑠𝑓𝑢𝑙𝑙𝑦 𝑗𝑜𝑖𝑛𝑒𝑑 𝑡ℎ𝑒 𝑔𝑟𝑜𝑢𝑝.
➝『✈』𝑈𝑠𝑒 𝑡ℎ𝑒 𝑚𝑒𝑛𝑢 𝑡𝑜 𝑠𝑒𝑒 𝑡ℎ𝑒 𝑐𝑜𝑚𝑚𝑎𝑛𝑑 𝑡ℎ𝑒 𝑏𝑜𝑡 𝑖𝑠 𝑤𝑜𝑟𝑘𝑖𝑛𝑔 𝑜𝑛.
➝『🔊』𝐵𝑜𝑡 𝑎𝑙𝑤𝑎𝑦𝑠 𝑤𝑜𝑟𝑘𝑠 24/24 𝑢𝑛𝑙𝑒𝑠𝑠 𝑎𝑐𝑐 𝑖𝑠 𝑙𝑜𝑐𝑘𝑒𝑑.
➝『🌹』𝑇ℎ𝑎𝑛𝑘 𝑦𝑜𝑢 𝑓𝑜𝑟 𝑢𝑠𝑖𝑛𝑔 𝑏𝑜𝑡.
➝『☎』𝐴𝑛𝑦 𝑝𝑟𝑜𝑏𝑙𝑒𝑚 𝑤𝑖𝑡ℎ 𝑡ℎ𝑒 𝑏𝑜𝑡, 𝑝𝑙𝑒𝑎𝑠𝑒 𝑐𝑜𝑛𝑡𝑎𝑐𝑡 𝑚𝑒 `, attachment: fs.createReadStream(__dirname + "/cache/leaveGif/h.mp4")} ,threadID));
	}
	else {
		try {
			const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
			let { threadName, participantIDs } = await api.getThreadInfo(threadID);
      const moment = require("moment-timezone");
      const time = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:s || (dddd)");
      const hours = moment.tz("Asia/Ho_Chi_Minh").format("HH");
			const threadData = global.data.threadData.get(parseInt(threadID)) || {};
			const path = join(__dirname, "cache", "joinGif");
			const pathGif = join(path, `join.mp4`);

				var mentions = [], nameArray = [], memLength = [], iduser = [], i = 0;
			
			for (id in event.logMessageData.addedParticipants) {
		const userName = event.logMessageData.addedParticipants[id].fullName;    iduser.push(event.logMessageData.addedParticipants[id].userFbId.toString());
				nameArray.push(userName);
				mentions.push({ tag: userName, id: event.senderID });
				memLength.push(participantIDs.length - i++);
        console.log(userName)
			}
			memLength.sort((a, b) => a - b);
			
			(typeof threadData.customJoin == "undefined") ? msg = "======『 𝗪𝗘𝗖𝗢𝗠𝗘 』======\n━━━━━━━━━━━━━━━━━━\n[👤] → 𝗫𝗶𝗻 𝗰𝗵𝗮̀𝗼「{name}」𝘁𝗼̛́𝗶 𝘃𝗼̛́𝗶 𝗻𝗵𝗼́𝗺 {threadName}\n[🔰] → 𝗟𝗶𝗻𝗸 𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞: https://www.facebook.com/profile.php?id={iduser}\n[🍄] → 𝗕𝗮̣𝗻 𝗹𝗮̀ 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻 𝘁𝗵𝘂̛́ {soThanhVien} 𝗰𝘂̉𝗮 𝗻𝗵𝗼́𝗺\n[🧸] → 𝗕𝗮̣𝗻 đ𝘂̛𝗼̛̣𝗰 𝘁𝗵𝗲̂𝗺 𝗯𝗼̛̉𝗶: {author}\n[🌐] → 𝗟𝗶𝗻𝗸 𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞: https://www.facebook.com/profile.php?id={idauthor}\n━━━━━━━━━━━━━━━━━━\n[⏰] → 𝗕𝗮̂𝘆 𝗴𝗶𝗼̛̀ 𝗹𝗮̀: {time}\n" : msg = threadData.customJoin;
      var getData = await Users.getData(event.author)
var nameAuthor = typeof getData.name == "undefined" ? "Người dùng tự vào" : getData.name
			msg = msg
         .replace(/\{iduser}/g, iduser.join(', '))
			.replace(/\{name}/g, nameArray.join(', '))
			.replace(/\{type}/g, (memLength.length > 1) ?  '𝗰𝗮́𝗰 𝗯𝗮̣𝗻': '𝗯𝗮̣𝗻')
			.replace(/\{soThanhVien}/g, memLength.join(', '))
         .replace(/\{author}/g, nameAuthor)
         .replace(/\{idauthor}/g, event.author)
			.replace(/\{threadName}/g, threadName)
      .replace(/\{session}/g, hours <= 10 ? "𝘀𝗮́𝗻𝗴" : 
    hours > 10 && hours <= 12 ? "𝘁𝗿𝘂̛𝗮" :
    hours > 12 && hours <= 18 ? "𝗰𝗵𝗶𝗲̂̀𝘂" : "𝘁𝗼̂́𝗶 ")
    .replace(/\{time}/g, time);

			if (existsSync(path)) mkdirSync(path, { recursive: true });

			const randomPath = readdirSync(join(__dirname, "cache", "joinGif", "randomgif"));

			if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions }
			else if (randomPath.length != 0) {
				const pathRandom = join(__dirname, "cache", "joinGif", "randomgif", `${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
				formPush = { body: msg, attachment: createReadStream(pathRandom), mentions }
			}
			else formPush = { body: msg, mentions }

			return api.sendMessage({body: msg,attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://apivip.nvt20011.repl.co/image/vdnaruto')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID);
		} catch (e) { return console.log(e) };
	}
        }