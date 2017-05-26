//  Accepts the entire response object, returns a simpler object to work with
const parseResponseHeaders = (headers) => ({
    rateLimit: parseInt(headers['x-rate-limit-limit']),
    rateLimitRemaining: parseInt(headers['x-rate-limit-remaining']),
    rateLimitReset: parseInt(headers['x-rate-limit-reset']),
});

module.exports = parseResponseHeaders;
