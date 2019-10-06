package utils;
/**
 * These are the util methods using waits and scroll into view.
 */

import GlobalUtils.BaseUIPageObject;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class WaitUntil extends BaseUIPageObject<BaseUIPageObject> {
    public static void elementToBeClickable(WebElement element) {
        WebDriverWait wait = new WebDriverWait(driver, 20);
        wait.until(ExpectedConditions.elementToBeClickable(element));
    }

    public static void elementToBeVisible(WebElement element) {
        WebDriverWait wait = new WebDriverWait(driver, 20);
        wait.until(ExpectedConditions.visibilityOf(element));
    }


    public static void javascriptExecutorClick(WebElement element)
    {
        JavascriptExecutor js=(JavascriptExecutor)driver;
        js.executeScript("arguments[0].click();",element);
    }

    public static void javascriptExecutorScrollIntoView(WebElement element)
    {
        JavascriptExecutor js=(JavascriptExecutor)driver;
        js.executeScript("arguments[0].scrollIntoView(true);",element);
    }

    public static void javascriptExecutorSendKeys(WebElement element)
    {
        JavascriptExecutor js=(JavascriptExecutor)driver;
        js.executeScript("arguments[0].value=’hello’;”,element");
    }
    public static void javascriptExecutorScrollUpAndDown(WebElement element)
    {
        JavascriptExecutor js=(JavascriptExecutor)driver;
 //       js.executeScript("window.scrollBy(0,350);”, element);
        //[ + is down , - is up ]

    }
}
