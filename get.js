let exec = require('child_process').exec;

var argv = process.argv.slice(2);
var richmenuId = argv[0];
var channelAccessToken = argv[1];

if (argv[0] === '-h' | '-help') {
    return console.log('\
usage:\n\
    node get.js [richmenu id] [channel access token]\n\
example:\n\
    node get.js richmenu-87c7b14b360er577530adead84cae4d8 JC9QgwQrHMW8Iw8eeK06QxpYmnHCmNkfpzzimgcpI/ASLYEKx0R88uc60G1VFIvu/z/JjaDGU8xGollYFtpm+c9yfTwA29AwVzLs7Rf8V4dkjPKyIvHXdpU9ILEn/MabX8g29EtBtYu78tBhsBxqPgdB04t89/1O/w1cDnyilFU=');
}

var cmd = 'curl -v -X GET "https://api.line.me/v2/bot/richmenu/' + richmenuId + '" \
-H "Authorization: Bearer ' + channelAccessToken + '"';

exec(cmd, function(err, stdout, stderr) {
    if (err)
        return console.log('get bind rich menu api error:' + stderr);
    console.log(stdout);
});