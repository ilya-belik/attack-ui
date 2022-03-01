// This is just an example,
// so you can safely delete all default props below

export default {
  attackPage: {
    pageTitle: 'DDOS Dashboard',
    stopBtnLabel: 'Stop',
    actionsHint: 'Stop/Start can take up to 1 minute',
    startBtnLabel: 'Start',
    statusTitle: 'Status',
    attackActiveStatusLabel: 'Active',
    attackStoppedStatusLabel: 'Stopped',

    resultsCardTitle: 'Results',

    table: {
      target: 'Target',
      success: 'Success requests',
      errors: 'Errors count',
    },

    totalResults: {
      error: 'Errors',
      success: 'Successful requests',
    },
  },

  attackConfigPage: {
    pageTitle: 'DDOS Configuration',
    connectionsTitle: 'Connections',
    reqCountFieldLabel: 'Sites requests per second',
    reqCountFieldHint: 'Recommended quantity - 100',

    streamsCountLabel: 'Streams count',
    streamsCountHint: 'In development',

    resetConfigBtnLabel: 'Reset',
    startAttackBtnLabel: 'Start attack',

    removeAllTargetsBtnLabel: 'Remove All Targets',

    targetsCardTitle: 'Targets',
    addTargetFieldLabel: 'Link/ip to target',
    addTargetBtnLabel: 'Add',
    targetTooltipText: 'Click to open in a new tab',

    invalidTargetNotify:
      'It doesn`t look like a url or ip address',
    targetaAreadyAddedNotify: 'Target already added',
    targetAddedNotify: 'Target added',

    errorReqDefaultNotify:
      'Error requesting default targets',

    attackStartedDialog: {
      title: 'Attack started',
      description:
        'Until you press the "Stop" button or close the tab, the attack will be active. Startup may take up to 1 minute',
      okBtnLabel: 'Okey',
    },
  },

  nav: {
    ddosDasboardLabel: 'DDOS Dashboard',
    ddosConfigLabel: 'DDOS Config',
  },
  ipNotify: {
    title:
      'Use VPN with Russian or Belarusian IP for more effective attack',
    ipLabel: 'Your IP',
    countryLabel: 'IP Country',
    reloadBtnLabel: 'Reload',
    updatedAtLabel: 'Last updated at',
  },
}
