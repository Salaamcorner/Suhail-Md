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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349034187075";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_05_06_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjA5LFxuICAgICAgICA4MixcbiAgICAgICAgMTMyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjUxLFxuICAgICAgICA2OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTYzLFxuICAgICAgICAzOCxcbiAgICAgICAgMTIyLFxuICAgICAgICA2NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTksXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgODMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIxLFxuICAgICAgICAyNixcbiAgICAgICAgMjAyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTU2LFxuICAgICAgICA0NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTIyLFxuICAgICAgICA3MSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDc3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTM5LFxuICAgICAgICA2MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTksXG4gICAgICAgIDEzNSxcbiAgICAgICAgNzMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDU3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDYxLFxuICAgICAgICA1NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMixcbiAgICAgICAgMTI1LFxuICAgICAgICA0MixcbiAgICAgICAgMTIwLFxuICAgICAgICAzOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDU1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDExOSxcbiAgICAgICAgNjUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODQsXG4gICAgICAgIDIxMixcbiAgICAgICAgNzMsXG4gICAgICAgIDEzMixcbiAgICAgICAgOTcsXG4gICAgICAgIDM4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjksXG4gICAgICAgIDEzMixcbiAgICAgICAgMjM2LFxuICAgICAgICA2NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjIwLFxuICAgICAgICA0OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA3NyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTU1LFxuICAgICAgICAzMixcbiAgICAgICAgMTA2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDg3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgNTQsXG4gICAgICAgIDg3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDY4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI1LFxuICAgICAgICAxNjksXG4gICAgICAgIDY2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgOTksXG4gICAgICAgIDI3LFxuICAgICAgICA3OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDQsXG4gICAgICAgIDYyLFxuICAgICAgICA1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjQyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTA3LFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgODAsXG4gICAgICAgIDE1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDExLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjE5LFxuICAgICAgICA1NSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNSxcbiAgICAgICAgODksXG4gICAgICAgIDI4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDYsXG4gICAgICAgIDU3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxODQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDYzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNjdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgOTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDExLFxuICAgICAgICA3NyxcbiAgICAgICAgNjksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI2LFxuICAgICAgICA4NyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwLFxuICAgICAgICA1MixcbiAgICAgICAgMTk4LFxuICAgICAgICAxODAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjA4LFxuICAgICAgICA1MixcbiAgICAgICAgMTE0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNCxcbiAgICAgICAgODEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNixcbiAgICAgICAgMTE0LFxuICAgICAgICAxNDksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDY0LFxuICAgICAgICAyNSxcbiAgICAgICAgMjIyLFxuICAgICAgICA0MixcbiAgICAgICAgMTU4LFxuICAgICAgICA0OCxcbiAgICAgICAgNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA3MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDY5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTg0LFxuICAgICAgICA3NixcbiAgICAgICAgNDcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMixcbiAgICAgICAgOTIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjIyLFxuICAgICAgICAxMzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDczLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkltSGZkUkFwQXdVaWpKZ0tGVmdYdkJzVXFzZlM5MTZuMThjTEZjVXJsbW89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTAzNDE4NzA3NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNkU2OTBDM0FGNzMxNThBMjlDM0NBOENCNTQ5RjlDNzRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5NzI3NTMwXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIllueHotWW1nUndXX0pnMURmeFpYcWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiM2EzYmE1OWItODRiNy00YTU4LTk5N2ItZTdhN2RkODA3NzNiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3OCxcbiAgICAgIDM0LFxuICAgICAgMTY4LFxuICAgICAgMTk5LFxuICAgICAgMTA1LFxuICAgICAgMTU0LFxuICAgICAgMTYsXG4gICAgICAyMzAsXG4gICAgICAxOSxcbiAgICAgIDExNSxcbiAgICAgIDEwOCxcbiAgICAgIDE2LFxuICAgICAgMjEwLFxuICAgICAgMTYxLFxuICAgICAgMzMsXG4gICAgICAwLFxuICAgICAgMjA1LFxuICAgICAgMjMxLFxuICAgICAgMTQzLFxuICAgICAgNDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTA5LFxuICAgICAgMTM1LFxuICAgICAgMTAzLFxuICAgICAgNTMsXG4gICAgICA2NixcbiAgICAgIDEyMixcbiAgICAgIDIwMSxcbiAgICAgIDE1LFxuICAgICAgNzksXG4gICAgICAxNjUsXG4gICAgICAyMjcsXG4gICAgICAxNDUsXG4gICAgICA5MyxcbiAgICAgIDE2OCxcbiAgICAgIDY4LFxuICAgICAgMjExLFxuICAgICAgMTgyLFxuICAgICAgNTYsXG4gICAgICAxNzksXG4gICAgICAxNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJMRFpTV0FIV1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTAzNDE4NzA3NToxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiU2FsYWFtIENvcm5lclwiLFxuICAgIFwibGlkXCI6IFwiMjI3MjYwMDI0MDEyOTAxOjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTU8vcWtNUW9PdUR0QVlZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJFdWtDTjV4eThUK3NFNVZTc1FTcnZ4N25vRS9zN0VsTFlpOERva2lPRkRNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImJFOWxGb3NISVBYdVBHRnNkK05ESjBFVWVNQnNLY20vRXVEUUVodEdkUk45VmlNN3kvRkxyWEZkOHBpanZjTVlXdkdnb3FwdlNHOUNOR2lSTHBrZkJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlY0d0w4K0xQL1lCR3dSRTFBbWRnNkE3N0Mra0JoNmRaWis4dFNXL24rQUM0T2JuNjlOWGNtbTBaaTJXUTdKdXdiR1Eveit2Vk1uZzJJQm1pWkRDZGhRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwMzQxODcwNzU6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDUxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTk3Mjc1MjQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFek5cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUV6Ti5qc29uIjogIntcImtleURhdGFcIjpcInJOYjZBWlhzTmFxNWx2eWNiL3hGalFCejNqU1cyTlgrREhPeHFWYzd3Qkk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQxMjA1NDQzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTk3Mjc1MjgxMTFcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
