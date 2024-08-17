const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,1VJFgIbS#EiWZnUDq92X-fcYu2PB_Ccbuge6h9HRxAOV__kSUdJM

ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/397000a07a1deb7fad9c2.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "HELLO,IM GHOST-MD I AM ALIVE NOW!",
  });
