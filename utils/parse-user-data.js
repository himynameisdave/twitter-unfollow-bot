const parseUserData = users => users.map(user => ({
    id: user.id,
    name: user.name,
    screenName: user.screen_name,
    followerCount: user.followers_count,
    followingCount: user.friends_count,
    numberOfTweets: user.statuses_count,
    numberOfLikes: user.favourites_count,
    usesDefaultProfileImage: user.default_profile_image
}));

module.exports = parseUserData;
