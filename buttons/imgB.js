//  ╔⧉༻ [ 𝐕𝐨𝐱𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║ We won't be responsible for any kind of ban due to this bot.
//  ║ VoxBot was made for fun purpose and to make group management easier.
//  ║ It's your concern if you spam and gets your account banned.
//  ║ Also, Forks won't be entertained.
//  ║ If you fork this repo and edit plugins, it's your concern for further updates.
//  ║ Forking Repo is fine. But if you edit something we will not provide any help.
//  ║ In short, Fork At Your Own Risk.
//  ║
//  ║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ VօxB໐t вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
module.exports = async (VօxB໐t, ᴠᴏxᴄ, 𝚌𝚘𝚗𝚝є𝚡𝚝, imåge) => {
  if (VօxB໐t.isReply) {
    var receiver =
      VօxB໐t.mtype == "extendedTextMessage" &&
      VօxB໐t.message.extendedTextMessage.contextInfo != null
        ? VօxB໐t.message.extendedTextMessage.contextInfo.participant || ""
        : "";
    await VօxB໐t.sendMessage(
      ᴠᴏxᴄ.chat,
      {
        image: { url: imåge },
        caption: `*📢ID:* ${ᴠᴏxᴄ.chat}
${𝚌𝚘𝚗𝚝є𝚡𝚝}`,
        footer: "*Synthoria™ by Mågneum*\n*💻HomePage:* https://bit.ly/magneum",
        buttons: [
          {
            buttonId: `${VօxB໐t.prefix}Dashboard`,
            buttonText: { displayText: `${VօxB໐t.prefix}Dashboard` },
            type: 1,
          },
          {
            buttonId: `${VօxB໐t.prefix}Help`,
            buttonText: { displayText: `${VօxB໐t.prefix}Help` },
            type: 1,
          },
        ],
        headerType: 4,
        mentions: [ᴠᴏxᴄ.sender, receiver],
      },
      {
        contextInfo: { mentionedJid: [ᴠᴏxᴄ.sender, receiver] },
        quoted: ᴠᴏxᴄ,
      }
    ).catch((e) => console.log(e));
    ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ VօxB໐t вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
  } else if (VօxB໐t.mentionByTag) {
    var receiver =
      VօxB໐t.mtype == "extendedTextMessage" &&
      VօxB໐t.message.extendedTextMessage.contextInfo != null
        ? VօxB໐t.message.extendedTextMessage.contextInfo.mentionedJid
        : [];
    await VօxB໐t.sendMessage(
      ᴠᴏxᴄ.chat,
      {
        image: { url: imåge },
        caption: `*📢ID:* ${ᴠᴏxᴄ.chat}
${𝚌𝚘𝚗𝚝є𝚡𝚝}`,
        footer: "*Synthoria™ by Mågneum*\n*💻HomePage:* https://bit.ly/magneum",
        buttons: [
          {
            buttonId: `${VօxB໐t.prefix}Dashboard`,
            buttonText: { displayText: `${VօxB໐t.prefix}Dashboard` },
            type: 1,
          },
          {
            buttonId: `${VօxB໐t.prefix}Help`,
            buttonText: { displayText: `${VօxB໐t.prefix}Help` },
            type: 1,
          },
        ],
        headerType: 4,
        mentions: [ᴠᴏxᴄ.sender, receiver],
      },
      {
        contextInfo: { mentionedJid: [ᴠᴏxᴄ.sender, receiver] },
        quoted: ᴠᴏxᴄ,
      }
    ).catch((e) => console.log(e));
    ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ VօxB໐t вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
  } else {
    return await VօxB໐t.sendMessage(
      ᴠᴏxᴄ.chat,
      {
        image: { url: imåge },
        caption: `*📢ID:* ${ᴠᴏxᴄ.chat}
${𝚌𝚘𝚗𝚝є𝚡𝚝}`,
        footer: "*Synthoria™ by Mågneum*\n*💻HomePage:* https://bit.ly/magneum",
        buttons: [
          {
            buttonId: `${VօxB໐t.prefix}Dashboard`,
            buttonText: { displayText: `${VօxB໐t.prefix}Dashboard` },
            type: 1,
          },
          {
            buttonId: `${VօxB໐t.prefix}Help`,
            buttonText: { displayText: `${VօxB໐t.prefix}Help` },
            type: 1,
          },
        ],
        headerType: 4,
        mentions: [ᴠᴏxᴄ.sender],
      },
      {
        contextInfo: { mentionedJid: [ᴠᴏxᴄ.sender] },
        quoted: ᴠᴏxᴄ,
      }
    ).catch((e) => console.log(e));
  }
};
