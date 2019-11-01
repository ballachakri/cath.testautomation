package GlobalUtils;

import io.cucumber.core.api.Scenario;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import org.apache.log4j.BasicConfigurator;
import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;
import utils.FailedTestScreenShot;

/**
 * The Hooks will choose the Test Environment and executes before and after Tests
 */
public class Hooks extends BaseUIPageObject<BaseUIPageObject> {

    // Step 1: initial Log4j Logger -
    final static Logger log=Logger.getLogger(Hooks.class);

    @Before
    public void navigateToHomePage() {

        // Configure Basic configuration for logging
        BasicConfigurator.configure();

        // configure the log4j property file to append the reporting files
        PropertyConfigurator.configure("log4j.properties");

        setUpTheBrowser("https://www.cathkidston.com/");
        maximizeBrowser();
        log.info("Browser lanched..............................!");
    }

    /**
     * Takes screen shot, if the test fails and close the browser.
     */
    @After
    public void closeTheBrowser(Scenario scenario) {
        final String scenarioName = scenario.getName();
        if (scenario.isFailed()) {
            new FailedTestScreenShot().getScreenShotOfFailedTest(scenarioName);
        }
        tearDown();
    }
}
