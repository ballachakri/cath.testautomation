package GlobalUtils;

import io.cucumber.core.api.Scenario;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import utils.FailedTestScreenShot;

/**
 * The Hooks will choose the Test Environment and executes before and after Tests
 */
public class Hooks extends BaseUIPageObject<BaseUIPageObject> {

    @Before
    public void navigateToHomePage() {
        setUpTheBrowser("https://www.cathkidston.com/");
        maximizeBrowser();
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
