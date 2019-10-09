package PageObjects;

import GlobalUtils.BaseUIPageObject;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.List;

public class ViewBasket extends BaseUIPageObject<ViewBasket> {
    @FindBy(css = "table[id='shopping_bag_table'] tbody tr ")
    private List<WebElement> basketTable;

    public Boolean TableRowContains(final String product) {
        List<WebElement> allProducts = basketTable;

        for (WebElement element : basketTable) {
            if (element.getText().contains(product)) {
                break;
            }
        }
        return true;
    }

}
