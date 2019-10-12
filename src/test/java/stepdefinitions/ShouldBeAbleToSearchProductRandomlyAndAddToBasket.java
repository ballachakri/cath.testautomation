package stepdefinitions;

import GlobalUtils.BaseUIPageObject;
import GlobalUtils.SetupHomePage;
import PageObjects.Cath_Kidston;
import PageObjects.HomePage;
import PageObjects.SearchPage;
import PageObjects.ViewBasket;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import utils.GenerateRandomNumber;

import static org.hamcrest.MatcherAssert.assertThat;

public class ShouldBeAbleToSearchProductRandomlyAndAddToBasket extends BaseUIPageObject {

    private SearchPage searchPage;
    private String selectedProduct;

    @Given("As a end user")
    public void as_a_end_user() {
        new SetupHomePage().OpenHome();
    }

    @When("i search a product {string} randomly and add to basket")
    public void i_search_a_product_randomly_and_add_to_basket(String product) {
        new HomePage().searchProduct(product).clickMagnifyingGlassIcon();

        searchPage=new SearchPage();

        final int maxProducts=searchPage.getTotalProductsDisplayed();
        final int randomNumber=GenerateRandomNumber.getRandomNumber(maxProducts);

        System.out.println("Selected product number is: "+randomNumber);

        selectedProduct=searchPage.selectRandomProduct(randomNumber);
        System.out.println("Selected product is : "+selectedProduct);
        new Cath_Kidston().addToBag().viewBasket();
    }
    @Then("i should be able to view the selected product in the shopping basket")
    public void i_should_be_able_to_view_the_selected_product_in_the_shopping_basket() {
        assertThat("Wrong product has been added to the basket, please investigate",
                new ViewBasket().TableRowContains(selectedProduct));
    }

}
