module.exports.config = {
    name: "timanh",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Vihoo",
    description: "Tìm kiếm hình ảnh",
    commandCategory: "game",
    usages: "[Text]",
    cooldowns: 0,
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/cache/`;
    if (!fs.existsSync(dirMaterial + "cache")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "pinterest.jpg")) request("https://i.imgur.com/b1cyZGK.jpg").pipe(fs.createWriteStream(dirMaterial + "pinterest.jpg"));
}
module.exports.run = async function({ api, event, args }) {
    const axios = require("axios");
    const fs = require("fs-extra");
    const request = require("request");
    const keySearch = args.join(" ");
    if(keySearch.includes("-") == false) return api.sendMessage({body:'====「 𝗣𝗜𝗡𝗧𝗘𝗥𝗘𝗦𝗧 」====\n━━━━━━━━━━━━━\n➜ 𝙑𝙪𝙞 𝙡𝙤̀𝙣𝙜 𝙣𝙝𝙖̣̂𝙥 𝙩𝙝𝙚𝙤 𝙙𝙞̣𝙣𝙝 𝙙𝙖̣𝙣𝙜: 𝙩𝙪̛̀ 𝙠𝙝𝙤́𝙖 𝙘𝙖̂̀𝙣 𝙩𝙞̀𝙢 𝙠𝙞𝙚̂́𝙢 - 𝙨𝙤̂́ 𝙖̉𝙣𝙝 𝙘𝙖̂̀𝙣 𝙩𝙞̀𝙢\n➜ 𝗩𝗗: .𝙥𝙞𝙣 𝙖𝙣𝙞𝙢𝙚 -𝟭𝟬\n𝘽𝙤𝙩 𝙨𝙚̃ 𝙩𝙞̀𝙢 𝟭𝟬 𝙖̉𝙣𝙝 𝙖𝙣𝙞𝙢𝙚!',attachment: fs.createReadStream(__dirname + `/cache/pinterest.jpg`) }, event.threadID,event.messageID)
    const keySearchs = keySearch.substr(0, keySearch.indexOf('-'))
    const numberSearch = keySearch.split("-").pop() || 6
    const res = await axios.get(`https://caochungdat.me/docs/search/pinterest?search=${encodeURIComponent(keySearchs)}`);
    const data = res.data.data;
    var num = 0;
    var imgData = [];
    for (var i = 0; i < parseInt(numberSearch); i++) {
      let path = __dirname + `/cache/${num+=1}.jpg`;
      let getDown = (await axios.get(`${data[i]}`, { responseType: 'arraybuffer' })).data;
      fs.writeFileSync(path, Buffer.from(getDown, 'utf-8'));
      imgData.push(fs.createReadStream(__dirname + `/cache/${num}.jpg`));
    }
    api.sendMessage({
        attachment: imgData,
        body: numberSearch + '🧧𝙆𝙚̂́𝙩 𝙦𝙪𝙖̉ 𝙩𝙞̀𝙢 𝙠𝙞𝙚̂́𝙢 𝙘𝙪̉𝙖 𝙩𝙪̛̀ 𝙠𝙝𝙤́𝙖: '+ keySearchs
    }, event.threadID, event.messageID)
    for (let ii = 1; ii < parseInt(numberSearch); ii++) {
        fs.unlinkSync(__dirname + `/cache/${ii}.jpg`)
    }
};