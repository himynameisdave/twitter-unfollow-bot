const fs = require('fs');
const beenAtLeast = require('./been-at-least.js');


//  To save on requests, we basically don't fetch if we've fetched in the last 15 mins
const shouldUpdateUserlist = () => {
    const userlist = fs.readFileSync('users-full.json', 'utf8');
    if (!userlist) return true;

    const parsed = JSON.parse(userlist);
    if (!parsed || !parsed.updatedAt) return true;

    const MINIMUM_WAIT_MINS = 15;
    if (beenAtLeast(MINIMUM_WAIT_MINS)(parsed.updatedAt)) return true;
    return false;
};

module.exports = shouldUpdateUserlist;
