$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/ShouldBeAbleToLogin.feature");
formatter.feature({
  "name": "TA-201 User should be able to login",
  "description": "    As a end user\n    I enter user name and password\n    I should be able view my account details",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.scenarioOutline({
  "name": "User should be able to login",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "As a end user i will navigate to login page",
  "keyword": "Given "
});
formatter.step({
  "name": "I enter username \"\u003cusername\u003e\" and password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I should be able view my account details",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "ballachakri@yahoo.com",
        "Khalifa123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User should be able to login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "As a end user i will navigate to login page",
  "keyword": "Given "
});
formatter.match({
  "location": "ShouldBeAbleToLoginStepDefs.as_a_end_user_i_will_navigate_to_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter username \"ballachakri@yahoo.com\" and password \"Khalifa123\"",
  "keyword": "When "
});
formatter.match({
  "location": "ShouldBeAbleToLoginStepDefs.i_enter_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able view my account details",
  "keyword": "Then "
});
formatter.match({
  "location": "ShouldBeAbleToLoginStepDefs.i_should_be_able_view_my_account_details()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/ShouldBeAbleToRegister.feature");
formatter.feature({
  "name": "TA-202 User should be able to register",
  "description": "As a end user i will navigate login page\ni will enter my registration deatils\nthen i should be able register",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.scenarioOutline({
  "name": "User should be able to register",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "As a user i will navigate to login page",
  "keyword": "Given "
});
formatter.step({
  "name": "i enter my details \"\u003cemailid\u003e\" \"\u003ctitle\u003e\" \"\u003cfirstname\u003e\" \"\u003clastname\u003e\" \"\u003cphonenumber\u003e\" \"\u003cpassword\u003e\" \"\u003cconfirmpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "i should be able to register",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "emailid",
        "title",
        "firstname",
        "lastname",
        "phonenumber",
        "password",
        "confirmpassword"
      ]
    },
    {
      "cells": [
        "sballachakri@yahoo.com",
        "Mr",
        "chakra",
        "balla",
        "07730679707",
        "Khalifa123",
        "Khalifa123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User should be able to register",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "As a user i will navigate to login page",
  "keyword": "Given "
});
formatter.match({
  "location": "ShouldBeAbleToRegisterStepDefs.as_a_user_i_will_navigate_to_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i enter my details \"sballachakri@yahoo.com\" \"Mr\" \"chakra\" \"balla\" \"07730679707\" \"Khalifa123\" \"Khalifa123\"",
  "keyword": "When "
});
formatter.match({
  "location": "ShouldBeAbleToRegisterStepDefs.i_enter_my_details(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should be able to register",
  "keyword": "Then "
});
formatter.match({
  "location": "ShouldBeAbleToRegisterStepDefs.i_should_be_able_to_register()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/ShouldBeAbleToSearchProduct.feature");
formatter.feature({
  "name": "TA-101 - User should be able to search a product",
  "description": "As a end User\nI will search for product\nThen I should be able to view all the relavent pordoucts",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.scenarioOutline({
  "name": "User should be able to search a product",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I search for a product \"\u003cproduct\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "i should be able to view all the relevant products",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "product"
      ]
    },
    {
      "cells": [
        "shirt"
      ]
    },
    {
      "cells": [
        "shoe"
      ]
    },
    {
      "cells": [
        "bag"
      ]
    },
    {
      "cells": [
        "skirt"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "ShouldBeAbleToSearchProductStepDefs.i_am_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should be able to search a product",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "name": "I search for a product \"shirt\"",
  "keyword": "When "
});
formatter.match({
  "location": "ShouldBeAbleToSearchProductStepDefs.i_search_for_a_product(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should be able to view all the relevant products",
  "keyword": "Then "
});
formatter.match({
  "location": "ShouldBeAbleToSearchProductStepDefs.i_should_be_able_to_view_all_the_relevant_products()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "ShouldBeAbleToSearchProductStepDefs.i_am_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should be able to search a product",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "name": "I search for a product \"shoe\"",
  "keyword": "When "
});
formatter.match({
  "location": "ShouldBeAbleToSearchProductStepDefs.i_search_for_a_product(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should be able to view all the relevant products",
  "keyword": "Then "
});
formatter.match({
  "location": "ShouldBeAbleToSearchProductStepDefs.i_should_be_able_to_view_all_the_relevant_products()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "ShouldBeAbleToSearchProductStepDefs.i_am_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should be able to search a product",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "name": "I search for a product \"bag\"",
  "keyword": "When "
});
formatter.match({
  "location": "ShouldBeAbleToSearchProductStepDefs.i_search_for_a_product(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should be able to view all the relevant products",
  "keyword": "Then "
});
formatter.match({
  "location": "ShouldBeAbleToSearchProductStepDefs.i_should_be_able_to_view_all_the_relevant_products()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "ShouldBeAbleToSearchProductStepDefs.i_am_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should be able to search a product",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "name": "I search for a product \"skirt\"",
  "keyword": "When "
});
formatter.match({
  "location": "ShouldBeAbleToSearchProductStepDefs.i_search_for_a_product(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i should be able to view all the relevant products",
  "keyword": "Then "
});
formatter.match({
  "location": "ShouldBeAbleToSearchProductStepDefs.i_should_be_able_to_view_all_the_relevant_products()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"p[class\u003d\u0027page_summary\u0027]\"}\n  (Session info: chrome\u003d77.0.3865.90)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027CHAKRA-PC\u0027, ip: \u0027192.168.0.16\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 77.0.3865.90, chrome: {chromedriverVersion: 77.0.3865.40 (f484704e052e0..., userDataDir: C:\\Users\\sball\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:63178}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 18663b28194187406661170a9a96b93a\n*** Element info: {Using\u003dcss selector, value\u003dp[class\u003d\u0027page_summary\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:420)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.getText(Unknown Source)\r\n\tat PageObjects.HomePage.getSearchResultTitle(HomePage.java:44)\r\n\tat stepdefinitions.ShouldBeAbleToSearchProductStepDefs.i_should_be_able_to_view_all_the_relevant_products(ShouldBeAbleToSearchProductStepDefs.java:31)\r\n\tat ✽.i should be able to view all the relevant products(file:src/test/resources/ShouldBeAbleToSearchProduct.feature:13)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/ShouldBeAbleToSearchProductRandomlyAndAddToBasket.feature");
formatter.feature({
  "name": "TA-102 User shoild be able search product randomly and addd to basket",
  "description": "    As a end user\n    i will search a product randomly and add to basket\n    then i should be a to see the product in the basket",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@endtoend"
    }
  ]
});
formatter.scenarioOutline({
  "name": "User shoild be able search product randomly and addd to basket",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "As a end user",
  "keyword": "Given "
});
formatter.step({
  "name": "i search a product \"\u003cproduct\u003e\" randomly and add to basket",
  "keyword": "When "
});
formatter.step({
  "name": "i should be able to view the selected product in the shopping basket",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "product"
      ]
    },
    {
      "cells": [
        "shrit"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User shoild be able search product randomly and addd to basket",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@endtoend"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "As a end user",
  "keyword": "Given "
});
formatter.match({
  "location": "ShouldBeAbleToSearchProductRandomlyAndAddToBasket.as_a_end_user()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i search a product \"shrit\" randomly and add to basket",
  "keyword": "When "
});
formatter.match({
  "location": "ShouldBeAbleToSearchProductRandomlyAndAddToBasket.i_search_a_product_randomly_and_add_to_basket(String)"
});
formatter.result({
  "error_message": "java.lang.IllegalArgumentException: bound must be positive\r\n\tat java.util.Random.nextInt(Random.java:388)\r\n\tat utils.GenerateRandomNumber.getRandomNumber(GenerateRandomNumber.java:13)\r\n\tat stepdefinitions.ShouldBeAbleToSearchProductRandomlyAndAddToBasket.i_search_a_product_randomly_and_add_to_basket(ShouldBeAbleToSearchProductRandomlyAndAddToBasket.java:33)\r\n\tat ✽.i search a product \"shrit\" randomly and add to basket(file:src/test/resources/ShouldBeAbleToSearchProductRandomlyAndAddToBasket.feature:10)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "i should be able to view the selected product in the shopping basket",
  "keyword": "Then "
});
formatter.match({
  "location": "ShouldBeAbleToSearchProductRandomlyAndAddToBasket.i_should_be_able_to_view_the_selected_product_in_the_shopping_basket()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});