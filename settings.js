
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "starcore~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUpkVkJBWkJoZlFUYXRIR1pGZTBIc2NaQzUweHZOcTZKZDdUT0c3L2Mwaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSXJLZ1pwclZoakt1ci94aEU1SVQ2OFhKUUtIMWNGV1NET3Y2MWN3cndSST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5QVdSbHAwSyt3TkNXTkN6UmRkTXJBR1RrRkowZ0NjWEcxK21MaGFZQldzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0RXZUdGtjL3JnZlBuVDB0dy94cmxQWDhFUVVYRDA3ci9RTW1PdUlHUkZzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJCUmIrVkhRb0wwbjVrQ1RmYVdaUGhUQklaRHpReTNiQk9iREZjZmFnSHM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVualloY3dSdURlN3ZDZ1ZsK2hBNG5palc1N1FLM3FENktBSnRCSTlzSG89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0hqMGxLQ0laQUYxTFpIUGtHZ0pNVGpqRzdDWklkdURGVUVwSDVweHNGOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV2Z6SmZ4aVl0UklLdlZNU3dWR241aVhUUFl6bFBGRTRZZmlkM3YrUVhTaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRUOThlbmhQeHcwUU5SSDJUOEF0S1dNYlR6ZU9HNVZESWUrOXNlTXR3cjlVTVRwNWVHdVFMc1BndmZyQzY4Nm5tM0tGejBMUWhVN0NMVlFkMDJuVEJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI2LCJhZHZTZWNyZXRLZXkiOiJRUWZsZFhHVGIybElaWDZnU3NUbWhFQStOVC9ZMlhxdzdqUDFjQTMydm9nPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NDczMjAwNTE5MEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBNTI0NzAyQzU4OTZGRDI2RjY5Nzk3RTU3NTZFRDcwRCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU3NTM3MzUxfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTQ3MzIwMDUxOTBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQTUzMzNGRkJEMEUxNzZFREM1N0E2RUUwMDNDODg4RTUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NzUzNzM1MX0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjU0NzMyMDA1MTkwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkE1QjI0QkEzQTUxN0QzMDE1RDRBQ0NBQ0JDOThERDZGIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTc1MzczNTN9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjlKTDBqNUhwU1VPWjhNbk9pX0J6RWciLCJwaG9uZUlkIjoiOGY1NzgwYzktNDk5ZS00YjQ5LThlNjYtNTE4NWMzNzY2NTFjIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxkL1o4aEpHNkRnK21UL0s1VFMyaVRlbWhBcz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2L3puMTVGT3VMbHdjNmU2VDN2MTFiaGpJVlk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTVJNQUxWSU4iLCJtZSI6eyJpZCI6IjI1NDczMjAwNTE5MDo0QHMud2hhdHNhcHAubmV0IiwibmFtZSI6Im1yciBlbGl0ZSIsImxpZCI6IjE3MzA4MzU0MTM3NzIyNTo0QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSVRqOHYwR0VMakloOFlHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiZEZJUzY2SVVVREpvUElSR2NSTS8rSmNiZG45REpOZHJtejdxeTd1VHVsST0iLCJhY2NvdW50U2lnbmF0dXJlIjoiM1Zka1ZNZEs2Q240UWNYcXRpeVZBUUtCNTB4VjN3cG5QTzBYc1p5UUxLVTRXVVRJSkI2WFQ5bmR3bmdPTkoyaXVlRUZTRk9oNWhXdzV6eFl3bDZVRHc9PSIsImRldmljZVNpZ25hdHVyZSI6IkN6Mm9UYm5JTlpmVE1JVXVkM2ZYRitYcDlIb2dZRGRhWlhOMlBZY1diOUFxbnlNOHJiTVNMOXFEclhBcHpRWWlBWmFadEp1eElkMGVLNnJGOFcyN0RnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzMyMDA1MTkwOjRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWFJTRXV1aUZGQXlhRHlFUm5FVFAvaVhHM1ovUXlUWGE1cys2c3U3azdwUyJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSUNBPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU3NTM3MzUwLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUJVUyJ9",
// add your Session Id make sure it starts with lucky~
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "ELITE BOT",
// add bot name here for menu
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 

LINK_WHITELIST: "youtube.com,github.com",

    LINK_WARN_LIMIT: 3, // Number of warnings before action

    LINK_ACTION: "kick", // "kick", "mute", or "none"

        AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen

        AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 

        AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "false",
// make true if you want auto reply on status 

        AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*Just seen ur status 😆*",
// set the auto reply massage on status reply  


       WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups 
   
       ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group

      ANTI_LINK: process.env.ANTI_LINK || "false",
// make anti link true,false for groups 

      MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 

     MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/4itzeu.jpg",
// add custom menu and mention reply image url

       ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/4itzeu.jpg",
// add img for alive msg

        LIVE_MSG: process.env.LIVE_MSG || "> ʙᴏᴛ ɪs sᴘᴀʀᴋɪɴɢ ᴀᴄᴛɪᴠᴇ ᴀɴᴅ ᴀʟɪᴠᴇ\n\n\nᴋᴇᴇᴘ ᴜsɪɴɢ ✦LUCKY-XD✦ ғʀᴏᴍ Lucky Tech Hub ɪɴᴄ⚡\n\n\n*© ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ - ᴍᴅ\n\n> ɢɪᴛʜᴜʙ :* github.com/Tomilucky218/Lucky-XD2",
// add alive msg here 


        STICKER_NAME: process.env.STICKER_NAME || "LUCKY-XD",
// type sticker pack name 

        CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react  
  
      CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 

          DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 

          OWNER_NUMBER: process.env.OWNER_NUMBER || "254732005190",
// add your bot owner number

OWNER_NAME: process.env.OWNER_NAME || "Lucky 218",
// add bot owner name

              DESCRIPTION: process.env.DESCRIPTION || "*© Powered By Lucky Tech Hub*",
// add bot owner name    

        READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs

                 AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
                ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  

            ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 

        AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 

              AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 

        ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 

         PUBLIC_MODE: process.env.PUBLIC_MODE || "false",
// make false if want private mod

        AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing 
  
   READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 

     DEV: process.env.DEV || "256789966218",
//replace with your whatsapp number    
    
    ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 

      ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'inbox/ same if you want to resend deleted message in same chat 

      AUTO_RECORDING: process.env.AUTO_RECORDING || "false",
// make it true for auto recoding 

version: process.env.version || "0.0.9",

};
