let exec = require('child_process').exec;

const argv = process.argv.slice(2);
const richmenuId = argv[0];
const channelAccessToken = argv[1];
const imagePath = argv[2];

if (argv[0] === '-h' | '-help') {
    return console.log('\
usage:\n \
    node uploadImage.js [richmenu id] [channel access token] [image path]\n \
example:\n\
    node uploadImage.js richmenu-87c7b14b360er577530adead84cae4d8 JC9QgwQrHMW8Iw8eeK06QxpYmnHCmNkfpzzimgcpI/ASLYEKx0R88uc60G1VFIvu/z/JjaDGU8xGollYFtpm+c9yfTwA29AwVzLs7Rf8V4dkjPKyIvHXdpU9ILEn/MabX8g29EtBtYu78tBhsBxqPgdB04t89/1O/w1cDnyilFU= "~/Download/a.png"');
}

var cmd = 'curl -v -X POST https://api.line.me/v2/bot/richmenu/' + richmenuId + '/content \
-H "Authorization: Bearer ' + channelAccessToken + '" \
-H "Content-Type: image/jpeg" \
-T ' + imagePath

exec(cmd, function(err, stdout, stderr) {
    if (err)
        return console.log('get bind rich menu api error:' + stderr);
    console.log(stdout);
});