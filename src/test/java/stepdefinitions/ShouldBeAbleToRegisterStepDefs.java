package stepdefinitions;

import GlobalUtils.BaseUIPageObject;
import GlobalUtils.SetupHomePage;
import PageObjects.HomePage.HomePage;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

import static org.hamcrest.MatcherAssert.assertThat;

public class ShouldBeAbleToRegisterStepDefs extends BaseUIPageObject {
    private HomePage homePage;

    @Given("As a user i will navigate to login page")
    public void as_a_user_i_will_navigate_to_login_page() {
     new SetupHomePage().OpenHome();
     driver.get("https://www.cathkidston.com/pws/secure/ManageAccount.ice");

    }

    @When("i enter my details {string} {string} {string} {string} {string} {string} {string}")
    public void i_enter_my_details(String emailID, String title, String firstName, String lastName, String phoneNumber, String password, String confirmPassword) {
    homePage=new HomePage().enterEmailId(emailID).clickNoPasswordRadioButton().selectTitle(title).enterFirstName(firstName).
            enterLastName(lastName).enterPhoneNumber(phoneNumber).
            enterNewPassword(password).enterConfirmPassword(confirmPassword);
    }

    @Then("i should be able to register")
    public void i_should_be_able_to_register() {

            assertThat("New users details are not added and created account,please investigate",
                    homePage.clickCreateAccountButton());
    }
}
