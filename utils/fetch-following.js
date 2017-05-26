const parseResponseHeaders = require('./parse-response-headers.js');
const minsDiff = require('./mins-diff.js');
const abortRateLimitExceeded = require('./abort-rate-limit-exceeded.js');
const parseUserData = require('./parse-user-data.js');


const fetchFollowing = (twatter, cursor) => {
    const REQUEST_PARAMS = {
        screen_name: 'dave_lunny',
        count: 200, // this is the max
        skip_status: true,
        include_user_entities: false,
        cursor,
    };

    return new Promise((resolve, reject) => {
        twatter.get('friends/list', REQUEST_PARAMS,  (err, data, response) => {
            const headers = parseResponseHeaders(response.headers);
            //  Exit early, means we didn't fetch everything >_<
            if (headers.rateLimitRemaining <= 1) {
                const dateNow = Math.ceil(Date.now() / 1000);
                const mins = minsDiff(headers.rateLimitReset, dateNow);
                //  End the program with an error code
                abortRateLimitExceeded(mins, cursor);
            }
            if (err || !data || !data.users) return reject(err, data, response);
            resolve({
                data: parseUserData(data.users),
                cursor: data.next_cursor_str,
            });
        });
    });
};

module.exports = fetchFollowing;
