const Twit = require('twit');
const creds = require('./creds.json');
const generateUserlist = require('./generate-userlist.js');


const twatter = new Twit({
    consumer_key: creds.consumer_key,
    consumer_secret: creds.consumer_secret,
    access_token: creds.access_token,
    access_token_secret: creds.access_token_secret,
    timeout_ms:           60 * 1000,  // optional HTTP request timeout to apply to all requests.
});

generateUserlist(twatter)
    // .then(users => {
    //     console.log(users);
    // })
    // .catch(e => {
    //     console.error(e);
    //     process.exit(1);
    // });


// twatter.get('friends/list', { screen_name: 'dave_lunny' },  (err, data, response) => {
//     // console.log(response);
//     // const usersnames = data.users.map(u => {
//     //     console.log(u.name);
//     //     return u.name;
//     // });
//
//     const res = parseResponseHeaders(response);
//     const dateNow = Math.ceil(Date.now() / 1000);
//     console.log('response', Math.round((res.rateLimitReset - dateNow) / 60));
// })
