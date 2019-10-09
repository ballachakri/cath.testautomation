package PageObjects;

import GlobalUtils.BaseUIPageObject;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.Select;
import utils.WaitUntil;

/**
 * Manage account page
 * Home page > login and register page
 */
public class ManageAccountPage extends BaseUIPageObject<ManageAccountPage> {

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



    public ManageAccountPage enterEmailId(final String emailId) {
        emailIDTextField.sendKeys(emailId);
        return this;
    }

    public ManageAccountPage selectYesHavePassword() {
        utils.HandleElements.javascriptExecutorClick(yesHavePasswordRadioButton);
        return this;
    }

    public ManageAccountPage enterPassword(final String password) {
        WaitUntil.elementToBeVisible(passwordTextField);
        passwordTextField.sendKeys(password);
        return this;
    }

    public ManageAccountPage clickLogIntoMyAccountButton() {
        logIntoMyAccountButton.click();
        return this;
    }

    public String getAccountEmailTitle() {
        return accountEmailTitle.getText();
    }

    public ManageAccountPage clickNoPasswordRadioButton() {
        utils.HandleElements.javascriptExecutorClick(noPasswordRadioButton);
        return this;
    }

    public ManageAccountPage selectTitle(final String title) {
        new Select(titleDropdown).selectByVisibleText(title);
        return this;
    }

    public ManageAccountPage enterFirstName(final String firstName) {
        WaitUntil.elementToBeVisible(firstNameTextField);
        firstNameTextField.sendKeys(firstName);
        return this;
    }

    public ManageAccountPage enterLastName(final String lastName) {
        lastNameTextFiled.sendKeys(lastName);
        return this;
    }


    public ManageAccountPage enterPhoneNumber(final String phoneNumber) {
        phoneNumberTextFiled.sendKeys(phoneNumber);
        return this;
    }

    public ManageAccountPage enterNewPassword(final String password) {
        newPasswordTextFiled.sendKeys(password);
        return this;
    }

    public ManageAccountPage enterConfirmPassword(final String confirmPassword) {
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
