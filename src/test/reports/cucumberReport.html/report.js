$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/ShouldBeAbleToSearchProduct.feature");
formatter.feature({
  "name": "TA-101 - User should be able to search a product",
  "description": "As a end User\nI will search for product\nThen i should be able to view all the relavent pordoucts",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@singlesearch"
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
        "skirt"
      ]
    },
    {
      "cells": [
        "shoe"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
