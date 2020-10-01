exports.config = {
    // ====================
    // Runner Configuration
    // ====================
    runner: 'local',
    // ==================
    // Specify Test Files
    // ==================
    specs: [
        './test/specs/**/*.js'
    ],
    // ============
    // Capabilities
    // ============
    maxInstances: 5,
    maxInstancesPerCapability: 10,
    // capabilities can be found in the `wdio.local.chrome.conf.js` or `wdio.sauce.conf.js`
    // ===================
    // Test Configurations
    // ===================
    logLevel: 'silent',
    bail: 0,
    baseUrl: 'https://www.saucedemo.com/',
      seleniumInstallArgs: {
        drivers: {
          chrome: { version: '85.0.4183.83' },
        },
      },
      seleniumArgs: {
        drivers: {
          chrome: { version: '85.0.4183.83' },
        },
      },
      jasmineNodeOpts: {
        defaultTimeoutInterval: 60000,
        invertGrep: false,
        isVerbose: false,
        helpers: [require.resolve('@babel/register')],
      },
    waitforTimeout: 5000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: 'jasmine',
    reporters: ['spec'],
    services: [],
    // hostname: 'testingcloud.perfectomobile.com',
    // path: '/nexperience/perfectomobile/wd/hub/fast',
    // port: 80
};
