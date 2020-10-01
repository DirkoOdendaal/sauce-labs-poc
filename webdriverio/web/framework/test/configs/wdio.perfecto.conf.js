const {config} = require('./wdio.shared.conf');

// =========================
// Sauce RDC specific config
// =========================
// config.user = 'onlinenative';
// config.key = 'c9e5168d-92f3-49b1-927a-67b761256c3c';
// config.user = process.env.SAUCE_USERNAME;
// config.key = process.env.SAUCE_ACCESS_KEY;
// If you run your tests on Sauce Labs you can specify the region you want to run your tests
// in via the `region` property. Available short handles for regions are `us` (default) and `eu`.
// These regions are used for the Sauce Labs VM cloud and the Sauce Labs Real Device Cloud.
// If you don't provide the region, it defaults to `us`.
// config.region = 'eu';


// ============
// Capabilities
// ============
config.capabilities = [
    /**
     * Desktop browsers
     */
    {
        securityToken: 'eyJhbGciOiJIUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJmZjE2YTM1ZS05ZDg3LTRkMjYtOTEyYS0xZmY0MzgwM2RjNjEifQ.eyJqdGkiOiIxN2NlYWJkOC03NTVlLTQ2ZTQtODMwZi0yNGI2YTMxZmMxNDkiLCJleHAiOjAsIm5iZiI6MCwiaWF0IjoxNjAxNTQzNTEyLCJpc3MiOiJodHRwczovL2F1dGgyLnBlcmZlY3RvbW9iaWxlLmNvbS9hdXRoL3JlYWxtcy90ZXN0aW5nY2xvdWQtcGVyZmVjdG9tb2JpbGUtY29tIiwiYXVkIjoiaHR0cHM6Ly9hdXRoMi5wZXJmZWN0b21vYmlsZS5jb20vYXV0aC9yZWFsbXMvdGVzdGluZ2Nsb3VkLXBlcmZlY3RvbW9iaWxlLWNvbSIsInN1YiI6ImMwZTAyMDFlLTdhZjAtNGI0MS1iZjViLTJmMmM1YmU0M2FkMyIsInR5cCI6Ik9mZmxpbmUiLCJhenAiOiJvZmZsaW5lLXRva2VuLWdlbmVyYXRvciIsIm5vbmNlIjoiY2MyZDgzZmEtNWM0MS00ZGViLWE5ZTQtODFjOWFhNGM3NmI1IiwiYXV0aF90aW1lIjowLCJzZXNzaW9uX3N0YXRlIjoiZDcwOTJjZmYtZGUzMS00NjIwLThjMmUtYzc2YjYzYWU4Mzk0IiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCBvZmZsaW5lX2FjY2VzcyBwcm9maWxlIGVtYWlsIn0.M_rDeWbVIPbQDUbxjRw9WifJdCk1obSXdydYk5UjzYw',
        browserName: 'Chrome',
        browserVersion: '84',
        location: 'EU Frankfurt',
        platformName: 'Windows',
        platformVersion: '10',
        resolution: '1600x1200',
        scriptName: 'Integration Tests',
        // waitForAvailableLicense: true,
        // ...chromeOptions,
    },
];

config.services = config.services.concat('perfecto');
config.securityToken = 'eyJhbGciOiJIUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJmZjE2YTM1ZS05ZDg3LTRkMjYtOTEyYS0xZmY0MzgwM2RjNjEifQ.eyJqdGkiOiIxN2NlYWJkOC03NTVlLTQ2ZTQtODMwZi0yNGI2YTMxZmMxNDkiLCJleHAiOjAsIm5iZiI6MCwiaWF0IjoxNjAxNTQzNTEyLCJpc3MiOiJodHRwczovL2F1dGgyLnBlcmZlY3RvbW9iaWxlLmNvbS9hdXRoL3JlYWxtcy90ZXN0aW5nY2xvdWQtcGVyZmVjdG9tb2JpbGUtY29tIiwiYXVkIjoiaHR0cHM6Ly9hdXRoMi5wZXJmZWN0b21vYmlsZS5jb20vYXV0aC9yZWFsbXMvdGVzdGluZ2Nsb3VkLXBlcmZlY3RvbW9iaWxlLWNvbSIsInN1YiI6ImMwZTAyMDFlLTdhZjAtNGI0MS1iZjViLTJmMmM1YmU0M2FkMyIsInR5cCI6Ik9mZmxpbmUiLCJhenAiOiJvZmZsaW5lLXRva2VuLWdlbmVyYXRvciIsIm5vbmNlIjoiY2MyZDgzZmEtNWM0MS00ZGViLWE5ZTQtODFjOWFhNGM3NmI1IiwiYXV0aF90aW1lIjowLCJzZXNzaW9uX3N0YXRlIjoiZDcwOTJjZmYtZGUzMS00NjIwLThjMmUtYzc2YjYzYWU4Mzk0IiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCBvZmZsaW5lX2FjY2VzcyBwcm9maWxlIGVtYWlsIn0.M_rDeWbVIPbQDUbxjRw9WifJdCk1obSXdydYk5UjzYw';
        
config.perfectoOpts = {
    executionTags:['WDIO','Jasmine'],
    customFields:{
        testIndex:1,
        test:true
    },
    fastWeb:true,

};
exports.config = config;
