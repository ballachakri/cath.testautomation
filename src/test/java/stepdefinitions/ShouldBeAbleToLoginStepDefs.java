package stepdefinitions;

import GlobalUtils.BaseUIPageObject;
import GlobalUtils.SetupHomePage;
import PageObjects.ManageAccountPage;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.core.IsEqual.equalTo;

public class ShouldBeAbleToLoginStepDefs extends BaseUIPageObject {

    private ManageAccountPage manageAccountPage;
    private String emailID;


    @Given("As a end user i will navigate to login page")
    public void as_a_end_user_i_will_navigate_to_login_page() {
        new SetupHomePage().OpenHome();
        driver.get("https://www.cathkidston.com/pws/secure/ManageAccount.ice");
    }

    @When("I enter username {string} and password {string}")
    public void i_enter_username_and_password(final String emailId, final String password) {
        emailID=emailId;
        manageAccountPage=new ManageAccountPage().enterEmailId(emailId).selectYesHavePassword().enterPassword(password).clickLogIntoMyAccountButton();
    }

    @Then("I should be able view my account details")
    public void i_should_be_able_view_my_account_details() {
        assertThat("User is unable to login, please investigate",
                manageAccountPage.getAccountEmailTitle(), equalTo(emailID));
    }
}
