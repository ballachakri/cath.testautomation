package GlobalUtils;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.support.PageFactory;

/**
 * The Base UI Page Object to switch the browsers.
 */

public class BaseUIPageObject<H extends BaseUIPageObject> {

    public static WebDriver driver;
    private String browser = "chrome";

    public BaseUIPageObject() {
        PageFactory.initElements(driver, this);
    }

    public void setUpTheBrowser(final String testEnvironment) {

        switch (browser) {
            case "chrome": {
                WebDriverManager.chromedriver().setup();
                driver = new ChromeDriver();
                driver.get(testEnvironment);
                break;
            }
            case "edge": {
                WebDriverManager.edgedriver().setup();
                driver = new EdgeDriver();
                driver.get(testEnvironment);
                break;
            }
            case "ie": {
                WebDriverManager.iedriver().setup();
                driver=new InternetExplorerDriver();
                driver.get(testEnvironment);
                break;
            }
            default: {
                WebDriverManager.firefoxdriver().setup();
                new FirefoxDriver().get(testEnvironment);
                driver.get(testEnvironment);
                break;
            }
        }
    }

    public void setUpTheBrowser(final String browser, final String testEnvironment) {

        switch (browser) {
            case "chrome": {
                WebDriverManager.chromedriver().setup();
                driver = new ChromeDriver();
                driver.get(testEnvironment);
                break;
            }
            case "edge": {
                WebDriverManager.edgedriver().setup();
                driver = new ChromeDriver();
                driver.get(testEnvironment);
                break;
            }
            case "ie": {
                WebDriverManager.edgedriver().setup();
                driver = new EdgeDriver();
                driver.get(testEnvironment);
                break;
            }
            default: {
                WebDriverManager.firefoxdriver().setup();
                driver.get(testEnvironment);
                break;
            }
        }
    }

    public void maximizeBrowser() {
        driver.manage().window().maximize();
    }

    public void tearDown() {
        driver.quit();
    }
}