const reporter = require('cucumber-html-reporter');
var date = new Date();
var currentDate = date.getDate() + '_' + (date.getMonth());

var options = {
    brandTitle: "demo",
    theme: 'bootstrap',
    jsonFile: 'reports/cucumber_report.json',
    output: 'reports/cucumber_report_' + currentDate + '.html',
    screenshotsDirectory: './screenshots/',
    storeScreenshots: true,
    reportSuiteAsScenarios: true,
    launchReport: true,
    metadata: {
        "version": "1.0.0"
    }
};

reporter.generate(options);