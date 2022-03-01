export default function () {
  return {
    targetsList: [],
    config: {
      user: {},
      default: {
        reqCount: 100, // per sec
        streamsCount: 1, // per one function reqest
      },
    },

    /*
     'google.com': {
        success: 0,
        error: 0,
      }
    */
    resultsBrowserAttack: {},
    browserAttackStatus: false,
    browserAttackIntervalId: null,
  }
}