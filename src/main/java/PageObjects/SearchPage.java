package PageObjects;

import GlobalUtils.BaseUIPageObject;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.List;

/**
 * Search page object
 *
 * Home page > search page
 */
public class SearchPage extends BaseUIPageObject<SearchPage> {

    @FindBy(css = "div[id='sli_products_wrapper'] div[class='product_info']")
    private List<WebElement> productList;

    /**
     * The method returns the total number of products displayed as a search results
     * @return
     */
    public int getTotalProductsDisplayed() {
        List<WebElement> totalListDisplayed = productList;
        return productList.size();
    }

    /**
     * This method clicks a random product and returns the selected product name and price
     * @return
     */
    public String selectRandomProduct(final int number) {
        List<WebElement> allProducts = productList;

        String selectedProduct="";

        for (int i = 1; i <= allProducts.size() - 1; i++) {
            if (i == number) {
                selectedProduct = allProducts.get(i).getText();
                allProducts.get(i).click();
                break;
            }
        }
        return selectedProduct;
    }


    public void addToBasket()
    {

    }

}
