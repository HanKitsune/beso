module.exports.config = {
  name: "locbox",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "chinhle",
  description: "Rời khỏi nhóm dưới 10",
  commandCategory: "Admin",
  usages: "Rời khỏi nhóm dưới 10",
  cooldowns: 0
};

module.exports.run = async ({ api, event, args }) => {
  const permission = ["100050999371837"];
  if (!permission.includes(event.senderID)) return api.sendMessage("ngu quá em ?", event.threadID, event.messageID);
  var inbox = await api.getThreadList(100, null, ['INBOX']);
  let list = [...inbox].filter(group => group.isSubscribed && group.isGroup);
  var msg = [];
  var lengthID = [];
  var members = args[0] || 10
    for (var groupInfo of list) {
      if(groupInfo.threadID != event.threadID) {
        if ( groupInfo.participants.length < members) {
            lengthID.push(groupInfo.name)
            api.removeUserFromGroup(api.getCurrentUserID(), groupInfo.threadID) 
        }
      }
    }
  const axios = require('axios');
	const fs = require('fs-extra');
  const moment = require("moment-timezone");
  const gio = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:ss");
  const name = await Users.getNameUser(event.senderID)
let uid = event.senderID;
var so = [
  "2","3","4","5","6"
];
const dongdev = so[Math.floor(Math.random()*so.length)];
  const imageUrls = await Promise.all(Array.from({ length: `${dongdev}` }, async () => {
    const res = await axios.get(`https://obito.tiennguyen166.repl.co/images/loli`);
    return res.data.url;   
  }));
  const imgurl = await Promise.all(imageUrls.map(async (url) => {
    return (await axios({
      url,
      method: "GET",
      responseType: "stream"
    })).data
  }));
  
  return api.sendMessage({body:'=== 『 𝗟𝗼̣𝗰 𝗕𝗼𝘅 』 ====\n━━━━━━━━━━━━━━━━━━\n\n→ đ𝗮̃ 𝗟𝗼̣𝗰 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 ' + lengthID.length + ' 𝗻𝗵𝗼́𝗺 𝗱𝘂̛𝗼̛́𝗶 ' + members + ' 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻',attachment: imgurl},event.threadID, event.messageID);   

}
