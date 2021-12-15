$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("jobsearchtest.feature");
formatter.feature({
  "line": 1,
  "name": "Job Search Test",
  "description": "\r\nAs user I want tom login cv-library-uk website",
  "id": "job-search-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "User should verify job search result using different data set",
  "description": "",
  "id": "job-search-test;user-should-verify-job-search-result-using-different-data-set",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am on home page of CV Library",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter job title \"\u003cjobTitle\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter Job location \"\u003clocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter distance \"\u003cdistance\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on more search option",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter minimum salary \"\u003cminSalary\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter maximum salary \"\u003cmaxSalary\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select salary type \"\u003csalaryType\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select job type \"\u003cjobType\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on find jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify result \"\u003cresult\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "job-search-test;user-should-verify-job-search-result-using-different-data-set;",
  "rows": [
    {
      "cells": [
        "jobTitle",
        "location",
        "distance",
        "minSalary",
        "maxSalary",
        "salaryType",
        "jobType",
        "result"
      ],
      "line": 20,
      "id": "job-search-test;user-should-verify-job-search-result-using-different-data-set;;1"
    },
    {
      "cells": [
        "Tester",
        "Harrow",
        "up to 5 miles",
        "30000",
        "500000",
        "Per annum",
        "Permanent",
        "Permanent Tester jobs in Harrow on the Hill"
      ],
      "line": 21,
      "id": "job-search-test;user-should-verify-job-search-result-using-different-data-set;;2"
    },
    {
      "cells": [
        "Sales",
        "Swindon",
        "up to 5 miles",
        "30000",
        "500000",
        "Per annum",
        "Permanent",
        "Permanent Sales jobs in Swindon"
      ],
      "line": 22,
      "id": "job-search-test;user-should-verify-job-search-result-using-different-data-set;;3"
    },
    {
      "cells": [
        "Test Manger",
        "Harrow",
        "up to 5 miles",
        "30000",
        "500000",
        "Per annum",
        "Permanent",
        "Permanent Test Manager jobs in Harrow on the Hill"
      ],
      "line": 23,
      "id": "job-search-test;user-should-verify-job-search-result-using-different-data-set;;4"
    },
    {
      "cells": [
        "Test Engineer",
        "Harrow",
        "up to 5 miles",
        "30000",
        "500000",
        "Per annum",
        "Permanent",
        "Permanent Test Engineer jobs in Harrow on the Hill"
      ],
      "line": 24,
      "id": "job-search-test;user-should-verify-job-search-result-using-different-data-set;;5"
    },
    {
      "cells": [
        "Test Manger",
        "Harrow",
        "up to 5 miles",
        "40000",
        "500000",
        "Per annum",
        "Permanent",
        "Permanent Test Manager jobs in Harrow on the Hill"
      ],
      "line": 25,
      "id": "job-search-test;user-should-verify-job-search-result-using-different-data-set;;6"
    },
    {
      "cells": [
        "Test Analyst",
        "Harrow",
        "up to 5 miles",
        "30000",
        "800000",
        "Per annum",
        "Permanent",
        "Permanent Test Analyst jobs in Harrow on the Hill"
      ],
      "line": 26,
      "id": "job-search-test;user-should-verify-job-search-result-using-different-data-set;;7"
    },
    {
      "cells": [
        "Test Technician",
        "Harrow",
        "up to 5 miles",
        "20000",
        "50000",
        "Per annum",
        "Permanent",
        "Permanent Test Technician jobs in Harrow on the Hill"
      ],
      "line": 27,
      "id": "job-search-test;user-should-verify-job-search-result-using-different-data-set;;8"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7068703099,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "User should verify job search result using different data set",
  "description": "",
  "id": "job-search-test;user-should-verify-job-search-result-using-different-data-set;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am on home page of CV Library",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter job title \"Tester\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter Job location \"Harrow\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter distance \"up to 5 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on more search option",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter minimum salary \"30000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter maximum salary \"500000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select salary type \"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select job type \"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on find jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify result \"Permanent Tester jobs in Harrow on the Hill\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchTestSteps.iAmOnHomePageOfCVLibrary()"
});
formatter.result({
  "duration": 650281199,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tester",
      "offset": 19
    }
  ],
  "location": "JobSearchTestSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 423529000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harrow",
      "offset": 22
    }
  ],
  "location": "JobSearchTestSteps.iEnterJobLocation(String)"
});
formatter.result({
  "duration": 182488200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 5 miles",
      "offset": 18
    }
  ],
  "location": "JobSearchTestSteps.iEnterDistance(String)"
});
formatter.result({
  "duration": 387311501,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTestSteps.iClickOnMoreSearchOption()"
});
formatter.result({
  "duration": 179852999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30000",
      "offset": 24
    }
  ],
  "location": "JobSearchTestSteps.iEnterMinimumSalary(String)"
});
formatter.result({
  "duration": 346281801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500000",
      "offset": 24
    }
  ],
  "location": "JobSearchTestSteps.iEnterMaximumSalary(String)"
});
formatter.result({
  "duration": 159088699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 22
    }
  ],
  "location": "JobSearchTestSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 95961900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 19
    }
  ],
  "location": "JobSearchTestSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 182109600,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTestSteps.iClickOnFindJobsButton()"
});
formatter.result({
  "duration": 192205900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Tester jobs in Harrow on the Hill",
      "offset": 17
    }
  ],
  "location": "JobSearchTestSteps.iVerifyResult(String)"
});
formatter.result({
  "duration": 4278965600,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[not correct message]\u003e but was:\u003c[Permanent Tester jobs in Harrow on the Hill\nGet the latest jobs with Job Alerts\nDisplaying 1 to 19 of 19 jobs\nResults Per Page:\n                            \n                                 25\n                            \n                                 50\n                            \n                                 75\n                            \n                                 100\n                            \n                         Sort by:\n                        \n                             Most Relevant\n                        \n                             Most Recent\n                        \n                             Distance\n                        \n                             Salary (High-\u003eLow)\n                        \n                             Salary (Low-\u003eHigh)\n                        \n                    ]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat uk.co.library.steps.JobSearchTestSteps.iVerifyResult(JobSearchTestSteps.java:67)\r\n\tat ✽.Then I verify result \"Permanent Tester jobs in Harrow on the Hill\"(jobsearchtest.feature:17)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1636013100,
  "status": "passed"
});
formatter.before({
  "duration": 5195030199,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "User should verify job search result using different data set",
  "description": "",
  "id": "job-search-test;user-should-verify-job-search-result-using-different-data-set;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am on home page of CV Library",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter job title \"Sales\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter Job location \"Swindon\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter distance \"up to 5 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on more search option",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter minimum salary \"30000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter maximum salary \"500000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select salary type \"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select job type \"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on find jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify result \"Permanent Sales jobs in Swindon\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchTestSteps.iAmOnHomePageOfCVLibrary()"
});
formatter.result({
  "duration": 458481101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sales",
      "offset": 19
    }
  ],
  "location": "JobSearchTestSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 494064700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Swindon",
      "offset": 22
    }
  ],
  "location": "JobSearchTestSteps.iEnterJobLocation(String)"
});
formatter.result({
  "duration": 158457099,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 5 miles",
      "offset": 18
    }
  ],
  "location": "JobSearchTestSteps.iEnterDistance(String)"
});
formatter.result({
  "duration": 157578001,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d96.0.4664.93)\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027DESKTOP-KDKBGFP\u0027, ip: \u0027172.29.224.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [d3bb6c58d4864f386c3e2eff5ef64319, sendKeysToElement {id\u003d0ad0a725-1e9a-4161-8ca9-3230b9af92bc, value\u003d[Ljava.lang.CharSequence;@74294c1a}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.93, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\Vrajesh\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:53750}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:53750/devtoo..., se:cdpVersion: 96.0.4664.93, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on WINDOWS (d3bb6c58d4864f386c3e2eff5ef64319)] -\u003e id: distance]\nSession ID: d3bb6c58d4864f386c3e2eff5ef64319\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:251)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:107)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:52)\r\n\tat com.sun.proxy.$Proxy23.sendKeys(Unknown Source)\r\n\tat uk.co.library.utility.Utility.sendTabAndEnterKey(Utility.java:95)\r\n\tat uk.co.library.pages.HomePage.selectDistance(HomePage.java:86)\r\n\tat uk.co.library.steps.JobSearchTestSteps.iEnterDistance(JobSearchTestSteps.java:31)\r\n\tat ✽.And I enter distance \"up to 5 miles\"(jobsearchtest.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "JobSearchTestSteps.iClickOnMoreSearchOption()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "30000",
      "offset": 24
    }
  ],
  "location": "JobSearchTestSteps.iEnterMinimumSalary(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "500000",
      "offset": 24
    }
  ],
  "location": "JobSearchTestSteps.iEnterMaximumSalary(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 22
    }
  ],
  "location": "JobSearchTestSteps.iSelectSalaryType(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 19
    }
  ],
  "location": "JobSearchTestSteps.iSelectJobType(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "JobSearchTestSteps.iClickOnFindJobsButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Sales jobs in Swindon",
      "offset": 17
    }
  ],
  "location": "JobSearchTestSteps.iVerifyResult(String)"
});
formatter.result({
  "status": "skipped"
});
