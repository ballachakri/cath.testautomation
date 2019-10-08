package PageObjects.HomePage;

import GlobalUtils.BaseUIPageObject;
import io.github.bonigarcia.wdm.SeleniumServerStandaloneManager;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;
import utils.HandleElements;
import utils.WaitUntil;

/**
 * Home Page page objects.
 */
public class HomePage extends BaseUIPageObject<HomePage> {

    @FindBy(css = "input[id='top_search']")
    private WebElement searchTextField;

    @FindBy(css = "#search > fieldset > div > button")
    private WebElement magnifyingGlassIcon;

    @FindBy(css = "p[class='page_summary']")
    private WebElement searchResultsTitle;

    @FindBy(css = "li[class='account_links logged_out']")
    private WebElement loginRegisterButton;

    @FindBy(css = "input[id='j_username']")
    private WebElement emailIDTextField;

    @FindBy(css = "input[id='j_password']")
    private WebElement passwordTextField;

    @FindBy(css = "input[id='i_have_a_password_login_form']")
    private WebElement yesHavePasswordRadioButton;

    @FindBy(css = "button[class='submit button btn btn_primary btn_large btn_block']")
    private WebElement logIntoMyAccountButton;

    @FindBy(css = "input[id='i_do_not_have_a_password_login_form']")
    private WebElement noPasswordRadioButton;

    @FindBy(css = "select[id='title']")
    private WebElement titleDropdown;

    @FindBy(css = "input[id='first_name']")
    private WebElement firstNameTextField;

    @FindBy(css = "input[id='last_name']")
    private WebElement lastNameTextFiled;

    @FindBy(css = "input[id='telephone_number']")
    private WebElement phoneNumberTextFiled;

    @FindBy(css = "input[id='password']")
    private WebElement newPasswordTextFiled;

    @FindBy(css = "input[id='confirm_password']")
    private WebElement confirmPasswordTextFiled;

    @FindBy(css = "button[class='submit button btn btn_info btn_large btn_block']")
    private WebElement createAccountButton;

    @FindBy(css = "#account > div:nth-child(2) > div.header > dl > dd")
    private WebElement accountEmailTitle;

    public HomePage() {
        PageFactory.initElements(driver, this);
    }

    public HomePage searchProduct(final String product) {
        searchTextField.sendKeys(product);
        return this;
    }

    public HomePage clickMagnifyingGlassIcon() {
        new Actions(driver).click(magnifyingGlassIcon).click().build().perform();
        return this;
    }

    public String getSearchResultTitle() {

        String productName = searchResultsTitle.getText().
                replace("Showing search results for ‘", "").replace("’.", "");
        return productName;
    }

    public HomePage clickLoginRegisterButton() {
        WaitUntil.elementToBeVisible(loginRegisterButton);
        utils.HandleElements.javascriptExecutorClick(loginRegisterButton);
        return this;
    }

    public HomePage enterEmailId(final String emailId) {
        emailIDTextField.sendKeys(emailId);
        return this;
    }

    public HomePage selectYesHavePassword() {
        utils.HandleElements.javascriptExecutorClick(yesHavePasswordRadioButton);
        return this;
    }

    public HomePage enterPassword(final String password) {
        passwordTextField.sendKeys(password);
        return this;
    }

    public HomePage clickLogIntoMyAccountButton() {
        logIntoMyAccountButton.click();
        return this;
    }

    public String getAccountEmailTitle() {
        return accountEmailTitle.getText();
    }

    public HomePage clickNoPasswordRadioButton() {
        utils.HandleElements.javascriptExecutorClick(noPasswordRadioButton);
        return this;
    }

    public HomePage selectTitle(final String title) {
        new Select(titleDropdown).selectByVisibleText(title);
        return this;
    }

    public HomePage enterFirstName(final String firstName) {
        WaitUntil.elementToBeVisible(firstNameTextField);
        firstNameTextField.sendKeys(firstName);
        return this;
    }

    public HomePage enterLastName(final String lastName) {
        lastNameTextFiled.sendKeys(lastName);
        return this;
    }


    public HomePage enterPhoneNumber(final String phoneNumber) {
        phoneNumberTextFiled.sendKeys(phoneNumber);
        return this;
    }

    public HomePage enterNewPassword(final String password) {
        newPasswordTextFiled.sendKeys(password);
        return this;
    }

    public HomePage enterConfirmPassword(final String confirmPassword) {
        confirmPasswordTextFiled.sendKeys(confirmPassword);
        return this;
    }

    public boolean clickCreateAccountButton() {
        try {
            Thread.sleep(20000);
            System.out.println("I Do Not Wish To Create New Users to Add Load on Database for testing purpose");
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        // createAccountButton.click();
        //return this;
        if (createAccountButton.isEnabled()) {
            return true;
        }
        return false;

    }
}
