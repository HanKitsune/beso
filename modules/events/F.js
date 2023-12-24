module.exports.config = {
    name: "F",
    eventType: ["log:link-status", "log:magic-words", "log:thread-color", "log:thread-approval-mode", "log:thread-poll", "log:thread-icon"],
    version: "1.0.0",
    credits: "a",
    description: ""
};
module.exports.run = async function({ api, event, Users, Threads }) {
   const moment = require("moment-timezone");
 var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
 var time = moment.tz('Asia/Ho_Chi_Minh').format('DD/MM/YYYY || HH:mm:ss'); 
   const lon = process.uptime();
  var hieu = Math.floor(lon / (60 * 60));
  var simp = Math.floor((lon % (60 * 60)) / 60);
  var rin = Math.floor(lon % 60);
    const { threadID, logMessageType, logMessageData } = event;
    switch (logMessageType) {
        case "log:thread-color":
            {
                return api.sendMessage({body:`==『 𝐂𝐀̣̂𝐏 𝐍𝐇𝐀̣̂𝐓 𝐍𝐇𝐎́𝐌 』===\n━━━━━━━━━━━━━━━━━━\n𝐕𝐚̀𝐨 𝐥𝐮́𝐜:  ${time}\n𝐍𝐡𝐨́𝐦 đ𝐚̃ 𝐭𝐡𝐚𝐲 đ𝐨̂̉𝐢 𝐜𝐡𝐮̉ đ𝐞̂̀ 𝐭𝐡𝐚̀𝐧𝐡: ${event.logMessageData.magic_word || event.logMessageData.accessibility_label }\n𝐄𝐦𝐨𝐢𝐣: ${event.logMessageData.theme_emoji || "𝐊𝐡𝐨̂𝐧𝐠 𝐜𝐨́ 𝐞𝐦𝐨𝐣𝐢"}\n𝐁𝐨𝐭 đ𝐚̃ 𝐨𝐧𝐥𝐢𝐧𝐞 đ𝐮̛𝐨̛̣𝐜 𝐭𝐨̂̉𝐧𝐠 𝐜𝐨̣̂𝐧𝐠 ${hieu} 𝐆𝐢𝐨̛̀ ${simp} 𝐏𝐡𝐮́𝐭 ${rin} 𝐆𝐢𝐚̂𝐲\n[ ${moment().tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || DD/MM/YYYY")} ]`,attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://apivip.nvt20011.repl.co/image/vdnaruto')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
            }
        case "log:magic-words":
            {
               return api.sendMessage({body:`=====『 𝐂𝐀̣̂𝐏 𝐍𝐇𝐀̣̂𝐓 𝐍𝐇𝐎́𝐌 』=====\n━━━━━━━━━━━━━━━━━━\n𝐓𝐡𝐞𝐦𝐞 ${event.logMessageData.magic_word} đ𝐚̃ 𝐭𝐡𝐞̂𝐦 𝐡𝐢𝐞̣̂𝐮 𝐮̛́𝐧𝐠: ${event.logMessageData.theme_name}\n𝐄𝐦𝐨𝐢𝐣: ${event.logMessageData.emoji_effect || "𝐊𝐡𝐨̂𝐧𝐠 𝐜𝐨́ 𝐞𝐦𝐨𝐣𝐢"}\nTổng ${event.logMessageData.new_magic_word_count} 𝐡𝐢𝐞̣̂𝐮 𝐮̛́𝐧𝐠 𝐭𝐮̛̀ 𝐧𝐠𝐮̛̃ đ𝐮̛𝐨̛̣𝐜 𝐭𝐡𝐞̂𝐦 𝐯𝐚̀𝐨\n[ ${moment().tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || DD/MM/YYYY")} ]`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://apivip.nvt20011.repl.co/image/vdnaruto')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
            }
        case "log:thread-poll":
            {
                var str = event.logMessageData.question_json
                var obj = JSON.parse(str);
                if (event.logMessageData.event_type == "question_creation") {
                    return api.sendMessage(`${event.logMessageBody}`, threadID)
                }
                if (event.logMessageData.event_type == "update_vote") {
                    return api.sendMessage(`${event.logMessageBody}`, threadID)
                }
            }
        case "log:thread-approval-mode":
            {
                return api.sendMessage(event.logMessageBody, threadID)
            }
        case "log:thread-icon":
            {
                return api.sendMessage(event.logMessageBody, threadID)
            }
    }
}