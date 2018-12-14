let exec = require('child_process').exec;

var argv = process.argv.slice(2);
var richmenuId = argv[0];
var channelAccessToken = argv[1];
var name = argv[2];

if (argv[0] === '-h' | '-help') {
    return console.log('\
usage:\n\
    node downloadImage.js [richmenu id] [channel access token] [image name]\n \
example:\n\
    node downloadImage.js richmenu-87c7b14b360er577530adead84cae4d8 JC9QgwQrHMW8Iw8eeK06QxpYmnHCmNkfpzzimgcpI/ASLYEKx0R88uc60G1VFIvu/z/JjaDGU8xGollYFtpm+c9yfTwA29AwVzLs7Rf8V4dkjPKyIvHXdpU9ILEn/MabX8g29EtBtYu78tBhsBxqPgdB04t89/1O/w1cDnyilFU= my_favorite_image');
}


var cmd = 'curl -v -X GET "https://api.line.me/v2/bot/richmenu/' + richmenuId + '/content" \
-H "Authorization: Bearer ' + channelAccessToken + '" \
-o ' + name
console.log(argv);

exec(cmd, function(err, stdout, stderr) {
    if (err)
        return console.log('get bind rich menu api error:' + stderr);
    console.log(stdout);
});