$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/ShouldBeAbleToSearchProduct.feature");
formatter.feature({
  "name": "TA-101 - User should be able to search a product",
  "description": "As a end User\nI will search for product\nThen i should be able to view all the relavent pordoucts",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@singlesearch"
    },
    {
      "name": "@doubleSearch"
    },
    {
      "name": "@tripleSearch"
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
        "bag"
      ]
    },
    {
      "cells": [
        "boots"
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
      "name": "@singlesearch"
    },
    {
      "name": "@doubleSearch"
    },
    {
      "name": "@tripleSearch"
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
      "name": "@singlesearch"
    },
    {
      "name": "@doubleSearch"
    },
    {
      "name": "@tripleSearch"
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
      "name": "@singlesearch"
    },
    {
      "name": "@doubleSearch"
    },
    {
      "name": "@tripleSearch"
    }
  ]
});
formatter.step({
  "name": "I search for a product \"boots\"",
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
      "name": "@singlesearch"
    },
    {
      "name": "@doubleSearch"
    },
    {
      "name": "@tripleSearch"
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