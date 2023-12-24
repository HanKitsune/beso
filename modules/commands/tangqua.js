module.exports.config = {
    name: "tangqua",
    version: "1.0.0",
    hasPermssion: 3,
    credits: "Horizon Lucius & mod lại by MDong",
    description: "",
    commandCategory: "Admin bot",
    usages: "allbox",
    cooldowns: 0,
    dependencies: [] 
    };
  var array = [];
module.exports.run = async function ({ api,event,Users,Currencies,args,utils }) {
  const axios = require("axios");
  const moment = require('moment-timezone');
  const res = await axios.get(`https://apivip.nvt20011.repl.co/thinh`);
  var mdong = res.data.url;
    const fs = require('fs-extra');
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
  var time = moment.tz('Asia/Ho_Chi_Minh').format('HH:mm:ss || DD/MM/YYYY');
  var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
if (thu == 'Sunday') thu = '𝐂𝐡𝐮̉ 𝐍𝐡𝐚̣̂𝐭'
  if (thu == 'Monday') thu = '𝐓𝐡𝐮̛́ 𝐇𝐚𝐢'
  if (thu == 'Tuesday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚'
  if (thu == 'Wednesday') thu = '𝐓𝐡𝐮̛́ 𝐓𝐮̛'
  if (thu == "Thursday") thu = '𝐓𝐡𝐮̛́ 𝐍𝐚̆𝐦'
  if (thu == 'Friday') thu = '𝐓𝐡𝐮̛́ 𝐒𝐚́𝐮'
  if (thu == 'Saturday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚̉𝐲'
  
    var x = global.data.allCurrenciesID;var out = (msg) => api.sendMessage(msg,event.threadID,event.messageID);
        let ix = Math.floor(Math.random() * 1000000) + 1; 
        let rxxi = global.data.allThreadID;var xs = false;
        var mention = Object.keys(event.mentions);
        switch (args[0]) {
           case 'allbox': {
              if (xs == true) return out("Tặng quà rồi");
              for (let ex of x) {
        await Currencies.increaseMoney(ex, parseInt(ix));
                array.push(ex);
                       }
                for (let exs of rxxi) {
    api.sendMessage({body:`▭▭▭▭ [ 𝗧𝗔̣̆𝗡𝗚 𝗤𝗨𝗔̀ ] ▭▭▭▭\n━━━━━━━━━━━━━━━━━━━\n『⏰』𝐁𝐚̂𝐲 𝐆𝐢𝐨̛̀ 𝐋𝐚̀: ${time} || 𝐇𝐨̂𝐦 𝐍𝐚𝐲 𝐋𝐚̀ ${thu}\n『🌟』𝐍𝐡𝐨́𝐦 𝐁𝐚̣𝐧 Đ𝐚̃ Đ𝐮̛𝐨̛̣𝐜 𝐀𝐝𝐦𝐢𝐧 𝐭𝐚̣̆𝐧𝐠 𝐪𝐮𝐚̀ 𝐠𝐨̂̀𝐦:\n『💵』𝐑𝐚𝐧𝐝𝐨𝐦 𝐧𝐡𝐢𝐞̂̀𝐮 đ𝐨̂ (𝐭𝐮̛̣ 𝐜𝐨̣̂𝐧𝐠 𝐫𝐝 𝐜𝐡𝐨 𝐚𝐥𝐥 𝐭𝐯)\n『💬』𝐓𝐡𝐢́𝐧𝐡: ${mdong}\n『🌟』𝐍𝐡𝐨̛́ 𝐜𝐡𝐞𝐜𝐤 𝐦𝐨𝐧𝐞𝐲 đ𝐞̂̉ 𝐤𝐢𝐞̂̉𝐦 𝐭𝐫𝐚 𝐬𝐨̂́ 𝐭𝐢𝐞̂̀𝐧 đ𝐮̛𝐨̛̣𝐜 𝐜𝐨̣̂𝐧𝐠 𝐧𝐡𝐞́\n━━━━━━━━━━━━━━━━━━━\n『🍒』𝐂𝐚̉𝐦 𝐨̛𝐧 đ𝐚̃ 𝐭𝐢𝐧 𝐭𝐮̛𝐨̛̉𝐧𝐠 𝐯𝐚̀ 𝐬𝐮̛̉ 𝐝𝐮̣𝐧𝐠 𝐁𝐎𝐓-𝐏𝐌𝐃-𝐕𝐍🐉\n『🌸』𝐂𝐡𝐮́𝐜 𝐜𝐚́𝐜 𝐛𝐚̣𝐧 𝐬𝐮̛̉ 𝐝𝐮̣𝐧𝐠 𝐁𝐎𝐓 𝐯𝐮𝐢 𝐯𝐞̉💕`, attachment: imgurl}, exs,(error,info) => {
              if (error) return;
        });
    }
                 xs = true;
            return api.sendMessage("Đã gửi quà đến all box thành công",event.threadID);                      
       }
   }
};