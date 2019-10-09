$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/ShouldBeAbleToSearchProductRandomlyAndAddToBasket.feature");
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
  "status": "passed"
});
formatter.step({
  "name": "i should be able to view the selected product in the shopping basket",
  "keyword": "Then "
});
formatter.match({
  "location": "ShouldBeAbleToSearchProductRandomlyAndAddToBasket.i_should_be_able_to_view_the_selected_product_in_the_shopping_basket()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});