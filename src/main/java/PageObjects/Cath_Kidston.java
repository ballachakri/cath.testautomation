package PageObjects;

import GlobalUtils.BaseUIPageObject;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import utils.WaitUntil;

public class Cath_Kidston extends BaseUIPageObject<Cath_Kidston> {

    @FindBy(css = "button[class='submit button btn btn_primary btn_large']")
    private WebElement addToBagButton;

    @FindBy(css = "a[class='btn btn_primary btn_large']")
    private WebElement viewBasketButton;

    public Cath_Kidston addToBag()
    {
        WaitUntil.elementToBeVisible(addToBagButton);
        addToBagButton.click();
        return this;
    }

    public Cath_Kidston viewBasket()
    {
        WaitUntil.elementToBeVisible(viewBasketButton);
        viewBasketButton.click();
        return this;
    }
}
