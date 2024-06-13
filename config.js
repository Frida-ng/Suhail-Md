const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348122152500";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_59_06_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTcxLFxuICAgICAgICA0MyxcbiAgICAgICAgMzUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAzMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDM5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDI3LFxuICAgICAgICAxODksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDU5LFxuICAgICAgICA2MixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk1LFxuICAgICAgICAyNixcbiAgICAgICAgMjIzLFxuICAgICAgICA1OCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNixcbiAgICAgICAgMTcxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTA0LFxuICAgICAgICA0MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDY0LFxuICAgICAgICAxNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTE2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMyxcbiAgICAgICAgMjQyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMjksXG4gICAgICAgIDg4LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTEyLFxuICAgICAgICA4MixcbiAgICAgICAgOTEsXG4gICAgICAgIDY2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDk5LFxuICAgICAgICA1NixcbiAgICAgICAgMzUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE2LFxuICAgICAgICAxNjksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjI2LFxuICAgICAgICA5NCxcbiAgICAgICAgODcsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NSxcbiAgICAgICAgOCxcbiAgICAgICAgMzksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTI4LFxuICAgICAgICA0MixcbiAgICAgICAgOTksXG4gICAgICAgIDExOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgODYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDQ5LFxuICAgICAgICA1OSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxODMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxLFxuICAgICAgICAxMSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMixcbiAgICAgICAgMjksXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIzLFxuICAgICAgICAzOCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjM3LFxuICAgICAgICA5MixcbiAgICAgICAgMTI0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIyNixcbiAgICAgICAgNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDU3LFxuICAgICAgICAzNSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMzYsXG4gICAgICAgIDI3LFxuICAgICAgICA2MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDksXG4gICAgICAgIDc3LFxuICAgICAgICAxODcsXG4gICAgICAgIDExMixcbiAgICAgICAgMjM4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTM5LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxODEsXG4gICAgICAgIDU0LFxuICAgICAgICA1MCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEzLFxuICAgICAgICAyNSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNixcbiAgICAgICAgMTYsXG4gICAgICAgIDY5LFxuICAgICAgICAxODIsXG4gICAgICAgIDgsXG4gICAgICAgIDc5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIsXG4gICAgICAgIDUwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2LFxuICAgICAgICAxMSxcbiAgICAgICAgMTY5LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNzhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDIsXG4gICAgICAgIDI5LFxuICAgICAgICA3MCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDU4LFxuICAgICAgICA0MSxcbiAgICAgICAgMjEzLFxuICAgICAgICA4NixcbiAgICAgICAgMjM1LFxuICAgICAgICA5MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTYzLFxuICAgICAgICA1NixcbiAgICAgICAgMTA4LFxuICAgICAgICA4MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDQzLFxuICAgICAgICAxNSxcbiAgICAgICAgNTEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDkwLFxuICAgICAgICA4LFxuICAgICAgICAxODAsXG4gICAgICAgIDkxLFxuICAgICAgICAyMyxcbiAgICAgICAgMjI2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxODgsXG4gICAgICAgIDU5LFxuICAgICAgICA0OSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDU0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNzksXG4gICAgICAgIDQ5LFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA2MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJkc1QvN1A3Q3g0bDZUdkhjNmVBU2VoZFc4WTVsNDNyZ21LV3hTd3B6YTdzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgxMjIxNTI1MDBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjY0QTQ4ODhCQ0VDOTY5QjAwNTREREM1ODMzNUMzMzk0XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxODI3NjMzN1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgxMjIxNTI1MDBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjlDRjNBNTMyM0QzNkQ0OUQ0MTAyMjc0OUQyQjU4N0M3XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxODI3NjMzOFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogNjEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogNjEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJVRUxWaDNPOVNuLWwwUkFkZGxSQzdBXCIsXG4gIFwicGhvbmVJZFwiOiBcImNlOWRhYzQwLTk3MmYtNDQ5ZC1iZmYyLTk4NGUxZmNiMDk0NlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0NSxcbiAgICAgIDE4MixcbiAgICAgIDE4LFxuICAgICAgMjQ3LFxuICAgICAgNjAsXG4gICAgICA4OCxcbiAgICAgIDYsXG4gICAgICAxODgsXG4gICAgICAyMzksXG4gICAgICAxNDIsXG4gICAgICAxNzksXG4gICAgICAxNDQsXG4gICAgICAyMTgsXG4gICAgICAyMTYsXG4gICAgICAyMSxcbiAgICAgIDExLFxuICAgICAgMjM0LFxuICAgICAgMjUzLFxuICAgICAgMTM2LFxuICAgICAgMjI5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4LFxuICAgICAgMTI3LFxuICAgICAgMTEzLFxuICAgICAgNzUsXG4gICAgICA1LFxuICAgICAgMjA2LFxuICAgICAgMTQxLFxuICAgICAgMTE1LFxuICAgICAgMzMsXG4gICAgICAxNzYsXG4gICAgICAxOTAsXG4gICAgICAyMDgsXG4gICAgICAyNTAsXG4gICAgICAxNTQsXG4gICAgICA4MSxcbiAgICAgIDQ2LFxuICAgICAgMTg5LFxuICAgICAgMzMsXG4gICAgICAxNjgsXG4gICAgICAxOTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiN0ROV1ZQSllcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMjIxNTI1MDA6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkVsZnJpZGEncyBFbXBvd2VybWVudCBIdWJcIixcbiAgICBcImxpZFwiOiBcIjUzNzYwMjA2MzQwMjk1OjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT3kvejc4SEVPaWhxN01HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJYTGZ1eG1jRUFwY0h1RUoyQWh4NGdMVGY1WWN4UmFMUXZaUk16bFBZU0hJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImVjWU80NytaUnN1bVhTOTBWSDQ2WDEybWRyelZ1dVVnektJck96MXdIQ2g5alNERUk1YWVEKzdVa0t2ZzNJNUwxdmFWa2ZQdjlWQmxJQlRPeGdyZUNBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjFaQnpSdkpESzdSK1cxUHp0ZktFOUpFVitJam13M2Z3WFMxOEg3VjlTdFNhSjdpYktEWFIxNjNpNUUrR01sTEJnVldWL1QwR0JFaDdFRXN0OUNhWEJRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxMjIxNTI1MDA6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDExNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4Mjc2MzMzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTWpqXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNamouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI3a0R2RmNZSUs1R0todTUxQkY5WGhsTFVqcFU2V0oyeWhsL2pvR1VFdEg0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwMTI0NzEyNzYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxODI3NjMzNTQ2M1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
