const getTimeDiff = ot => (Date.now() - ot);
const getMilliseconds = diff => (diff / 1000);
const getMinutes = secs => (secs / 60);


const beenAtLeast = (minsSince) => (oldTime) => [oldTime]
                                                  .map(getTimeDiff)
                                                  .map(getMilliseconds)
                                                  .map(getMinutes)
                                                  .map(mins => mins >= minsSince)
                                                  .pop();
module.exports = beenAtLeast;
