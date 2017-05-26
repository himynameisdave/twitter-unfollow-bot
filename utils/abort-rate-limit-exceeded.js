const abortRateLimitExceeded = (mins, cursor) => {
    const BANNER = `
========================================\n
      OOPS: Rate Limit Exceeded!
        Try again in ${mins} mins\n
        Current cursor: ${cursor}\n
========================================\n`
    console.log(BANNER);
    process.exit(1);
};

module.exports = abortRateLimitExceeded;
