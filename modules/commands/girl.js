/**
* @author BuiChiThong
* @warn Vui lòng không sửa credits tôn trọng người viết cảm ơn !
*/
module.exports.config = {
  name: "girl",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "BuiChiThong",
  description: "Ảnh Gái Xinh Nét Đến Từng Sợi Tóc ( Cái Này Sẽ Thay Thế Lệnh GaiViet Nhé )",
  commandCategory: "Hình Ảnh",
  usages: "gaixinh",
  cooldowns: 0,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://i.imgur.com/gPSX7JO.jpg",
"https://i.imgur.com/EPzZwxa.jpg",
"https://i.imgur.com/bJkwwmo.jpg",
"https://i.imgur.com/EDf3qxZ.jpg",
"https://i.imgur.com/BFPOjzJ.jpg",
"https://i.imgur.com/PCEqDPH.jpg",
"https://i.imgur.com/kwa9Mmq.jpg",
"https://i.imgur.com/IbhWR0s.jpg",
"https://i.imgur.com/wpjosc1.jpg",
"https://i.imgur.com/5AKUBDv.jpg",
"https://i.imgur.com/UCwfcdi.jpg",
"https://i.imgur.com/H6AeKnY.jpg",
"https://i.imgur.com/dO2WV8c.jpg",
"https://i.imgur.com/3k86GGx.jpg",
"https://i.imgur.com/sSdrVGP.jpg",
"https://i.imgur.com/r52TVAT.jpg",
"https://i.imgur.com/Qq1Cknc.jpg",
"https://i.imgur.com/HRBu0rH.jpg",
"https://i.imgur.com/tgJerBM.jpg",
"https://i.imgur.com/Cc9UQJ3.jpg",
"https://i.imgur.com/w3jeWb2.jpg",
"https://i.imgur.com/yihaNm6.jpg",
"https://i.imgur.com/n1T9IfS.jpg",
"https://i.imgur.com/hiJDOQx.jpg",
"https://i.imgur.com/VlkgqFu.jpg",
"https://i.imgur.com/ED0F4uB.jpg",
"https://i.imgur.com/i7LUh41.jpg",
"https://i.imgur.com/Bbl24DD.jpg",
"https://i.imgur.com/IvcgFw7.jpg",
"https://i.imgur.com/qUVM2bA.jpg",
"https://i.imgur.com/Ng5FL0D.jpg",
"https://i.imgur.com/kY8cN45.jpg",
"https://i.imgur.com/w1wlfi1.jpg",
"https://i.imgur.com/EgHPwPS.jpg",
"https://i.imgur.com/RJZ4vZC.jpg",
"https://i.imgur.com/Ikj5ZJH.jpg",
"https://i.imgur.com/rY7GHe1.jpg",
"https://i.imgur.com/Vrn3JUC.jpg",
"https://i.imgur.com/spXKnQ4.jpg",
"https://i.imgur.com/0xYqMfK.jpg",
"https://i.imgur.com/IvxZF8G.jpg",
"https://i.imgur.com/YtDQtDk.jpg",
"https://i.imgur.com/nOJ5T04.jpg",
"https://i.imgur.com/CIL5eyh.jpg",
"https://i.imgur.com/SMulqJp.jpg",
"https://i.imgur.com/nsvKMC3.jpg",
"https://i.imgur.com/WizMdrD.jpg",
"https://i.imgur.com/mw3XQGt.jpg",
"https://i.imgur.com/yUer7Ye.jpg",
"https://i.imgur.com/wBNYUl7.jpg",
"https://i.imgur.com/9IZcknt.jpg",
"https://i.imgur.com/i2pCoTE.jpg",
"https://i.imgur.com/ZTbxpCO.jpg",
"https://i.imgur.com/WvGNXwg.jpg",
"https://i.imgur.com/SrapmvM.jpg",
"https://i.imgur.com/fQalsIc.jpg",
"https://i.imgur.com/rMDaBwA.jpg",
"https://i.imgur.com/JIeCO92.jpg",
"https://i.imgur.com/tQTpziJ.jpg",
"https://i.imgur.com/xHOb8SF.jpg",
"https://i.imgur.com/qPJGDVP.jpg",
"https://i.imgur.com/xPKR0Y9.jpg",
"https://i.imgur.com/1WuqvbZ.jpg",
"https://i.imgur.com/LmyNb97.jpg",
"https://i.imgur.com/bFTKQJF.jpg",
"https://i.imgur.com/hOim6s6.jpg",
"https://i.imgur.com/ELaPJac.jpg",
"https://i.imgur.com/TCk5beL.jpg",
"https://i.imgur.com/tZMy3HV.jpg",
"https://i.imgur.com/aDXS0BH.jpg",
"https://i.imgur.com/p7nSoOg.jpg",
"https://i.imgur.com/2cUes7f.jpg",
"https://i.imgur.com/nGTKtpR.jpg",
"https://i.imgur.com/NVtxiuO.jpg",
"https://i.imgur.com/oi3r44Q.jpg",
"https://i.imgur.com/9bKMdRv.jpg",
"https://i.imgur.com/W181U80.jpg",
"https://i.imgur.com/zkv4Jj7.jpg",
"https://i.imgur.com/rFJFaYY.jpg",
"https://i.imgur.com/OFc2qTi.jpg",
"https://i.imgur.com/YLr9YsZ.jpg",
"https://i.imgur.com/UOfcp2w.jpg",
"https://i.imgur.com/Mv3lhIv.jpg",
"https://i.imgur.com/j5qCtBb.jpg",
"https://i.imgur.com/rt3J3m2.jpg",
"https://i.imgur.com/eiwxZ4U.jpg",
"https://i.imgur.com/n8Ond2s.jpg",
"https://i.imgur.com/43HEdQa.jpg",
"https://i.imgur.com/KQq0026.jpg",
"https://i.imgur.com/urXzmBZ.jpg",
"https://i.imgur.com/MweoEJE.jpg",
"https://i.imgur.com/rDrajaU.jpg",
"https://i.imgur.com/2MvSo5w.jpg",
"https://i.imgur.com/zQ1ezgc.jpg",
"https://i.imgur.com/TNAAOtK.jpg",
"https://i.imgur.com/TJE8ChH.jpg",
"https://i.imgur.com/9t5KbNz.jpg",
"https://i.imgur.com/ojWdg9J.jpg",
"https://i.imgur.com/5iCHbmu.jpg",
"https://i.imgur.com/YRC2ZhO.jpg",
"https://i.imgur.com/pTeLl4l.jpg",
"https://i.imgur.com/5YoKRNF.jpg",
"https://i.imgur.com/YUVSDAM.jpg",
"https://i.imgur.com/gN5lQet.jpg",
"https://i.imgur.com/0Ewpqbx.jpg",
"https://i.imgur.com/pNrMQu3.jpg",
"https://i.imgur.com/nUsYyCy.jpg",
"https://i.imgur.com/5zaH1kq.jpg",
"https://i.imgur.com/HD8QRrL.jpg",
"https://i.imgur.com/n3CP6l7.jpg",
"https://i.imgur.com/dtO6eW9.jpg",
"https://i.imgur.com/TUIwKJv.jpg",
"https://i.imgur.com/okOe4xH.jpg",
"https://i.imgur.com/qjDDOKc.jpg",
"https://i.imgur.com/N0YZZe7.jpg",
"https://i.imgur.com/ffYzX4d.jpg",
"https://i.imgur.com/yLXaXQ0.jpg",
"https://i.imgur.com/O3qhJHU.jpg",
"https://i.imgur.com/wiVAca9.jpg",
"https://i.imgur.com/PE5AjAo.jpg",
"https://i.imgur.com/PL0O93p.jpg",
"https://i.imgur.com/UtHYyar.jpg",
"https://i.imgur.com/ja79uRF.jpg",
  ];
	 var callback = () => api.sendMessage({body:`[ Húp được không mà nhìn😼 ]`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };