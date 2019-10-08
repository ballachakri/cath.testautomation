package utils;

import GlobalUtils.BaseUIPageObject;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;

public class HandleElements extends BaseUIPageObject<HandleElements> {
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
    public static void javascriptExecutorScrollUpAndDown(WebElement element) {
        JavascriptExecutor js = (JavascriptExecutor) driver;
        //       js.executeScript("window.scrollBy(0,350);”, element);
        //[ + is down , - is up ]
    }

}
