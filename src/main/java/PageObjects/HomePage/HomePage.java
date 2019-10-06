package PageObjects.HomePage;

import GlobalUtils.BaseUIPageObject;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import utils.WaitUntil;

/**
 * Home Page page objects.
 */
public class HomePage extends BaseUIPageObject<HomePage> {

    @FindBy(css = "input[id='top_search']")
    private WebElement searchTextField;

    @FindBy(css = "#search > fieldset > div > button")
    private WebElement magnifyingGlassIcon;

    @FindBy(css = "p[class='page_summary'] span")
    private WebElement searchResultsTitle;

    public HomePage searchProduct(final  String product)
    {
        WaitUntil.elementToBeVisible(searchTextField);
        searchTextField.sendKeys(product);
        return this;
    }

    public HomePage clickMagnifyingGlassIcon()
    {
       new Actions(driver).click(magnifyingGlassIcon).click().build().perform();
       return this;
    }

    public String getSearchResultTitle()
    {
        WaitUntil.elementToBeVisible(searchResultsTitle);
       System.out.println("Searched for    :"+searchResultsTitle.getText());
      return searchResultsTitle.getText();
    }

}
