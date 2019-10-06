package stepdefinitions;

import GlobalUtils.SetupHomePage;
import PageObjects.HomePage.HomePage;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.containsString;
import static org.hamcrest.Matchers.equalToIgnoringCase;

public class ShouldBeAbleToSearchProductStepDefs {
    private HomePage homePage;
    private String searchProduct;

    @Given("I am on the home page")
    public void i_am_on_the_home_page() {
        new SetupHomePage().OpenHome();
    }

    @When("I search for a product {string}")
    public void i_search_for_a_product(String product) {
        searchProduct=product;
        homePage = new HomePage();
        homePage.searchProduct(product);
        homePage.clickMagnifyingGlassIcon();
    }

    @Then("i should be able to view all the relevant products")
    public void i_should_be_able_to_view_all_the_relevant_products() {
         assertThat("Wrong search results are displayed, please investigate",
             homePage.getSearchResultTitle() , containsString(searchProduct));
    }
}
