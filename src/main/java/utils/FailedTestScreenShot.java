package utils;

import GlobalUtils.BaseUIPageObject;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.io.FileHandler;

import java.io.File;
import java.io.IOException;

/**
 * Takes the screen shot of the failed test case and appends with test scenario name
 */
public class FailedTestScreenShot extends BaseUIPageObject<BaseUIPageObject> {
    public void getScreenShotOfFailedTest(final String testScenarioName) {

        TakesScreenshot takesScreenshot = (TakesScreenshot) driver;
        File screenShot = takesScreenshot.getScreenshotAs(OutputType.FILE);

        try {
            FileHandler.copy(screenShot,
                    new File("C:\\Users\\sball\\git\\cathkidston.testautomation\\src\\test\\failed_test_screenshot\\" + testScenarioName + ".png"));
        } catch (IOException e) {
            e.printStackTrace();
        }

    }
}
