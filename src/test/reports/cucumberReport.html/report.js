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
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});