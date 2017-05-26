const fs = require('fs');
const fetchFollowing = require('./utils/fetch-following.js');
const shouldUpdateUserlist = require('./utils/should-update-userlist.js');

const generateUserlist = (twatter) => {
    const doFetch = (nextCursor = '-1', users, done) => {
        return fetchFollowing(twatter, nextCursor)
            .then(({ data, cursor }) => {
                users = users.concat(data);
                console.log('Fetching more...');
                if (cursor !== '0') {
                    doFetch(cursor, users, done);
                } else {
                    done(users);
                }
            })
            .catch((e, data) => {
                console.error(e);
                console.warn('Heres the returned data!', data);
                reject(e);
                process.exit(1);
            });
    };

    //  Begin:
    if (shouldUpdateUserlist()) {
        console.log('doing inital fetch!');
        doFetch(-1, [], users => {
            const FILENAME = 'users-full.json';
            const data = {
                updatedAt: Date.now(),
                users,
            };

            console.log(`\nWow you're following ${users.length} users!`);
            fs.writeFile(FILENAME, JSON.stringify(data, null, 2), () => {
                console.log(`\nWrote JSON file at ${FILENAME}!`);
            });
        });
    } else {
        console.log('No need to update your userlist, moving on!');
    }
};

module.exports = generateUserlist;
