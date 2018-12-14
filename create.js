const exec = require('child_process').exec;
const fs = require('fs');

const argv = process.argv.slice(2);
const channelAccessToken = argv[0];
const richmenu = argv[1];

if (argv[0] === '-h' | '-help') {
    return console.log('\
usage:\n\
    node create.js [channel access token] [richmenu in json type]\n\
example:\n\
    node create.js JC9QgwQrHMW8Iw8eeK06QxpYmnHCmNkfpzzimgcpI/ASLYEKx0R88uc60G1VFIvu/z/JjaDGU8xGollYFtpm+c9yfTwA29AwVzLs7Rf8V4dkjPKyIvHXdpU9ILEn/MabX8g29EtBtYu78tBhsBxqPgdB04t89/1O/w1cDnyilFU= {type: "image", url: "www.example.com"}');
}

var cmd =
    'curl -v POST "https://api.line.me/v2/bot/richmenu" \
-H "Authorization: Bearer ' +
    channelAccessToken +
    '" \
-H "Content-Type: application/json" \
-d ' +
    "'" +
    JSON.stringify(richmenu) +
    "'";

exec(cmd, function(err, stdout, stderr) {
    if (err) return console.log('get bind rich menu api error:' + stderr);
    console.log(stdout);
    fs.appendFile('richmenu.json', stdout, function(err) {
        if (err) {
            return console.log(err);
        }
    });
});