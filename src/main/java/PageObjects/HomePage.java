package PageObjects;

import GlobalUtils.BaseUIPageObject;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
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

}
