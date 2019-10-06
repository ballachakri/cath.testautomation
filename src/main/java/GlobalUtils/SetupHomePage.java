package GlobalUtils;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import utils.WaitUntil;

/**
 * The Home page set up.
 */
public class SetupHomePage extends BaseUIPageObject<BaseUIPageObject> {

    @FindBy(css = "button[id='onesignal-popover-cancel-button']")
    private WebElement noThanksNotificationButton;

    @FindBy(css = "div[class='cookie_policy_x']")
    private WebElement clickXOfCookieMessage;

    private SetupHomePage clickNoThanksNotificationsButton() {
        WaitUntil.elementToBeClickable(noThanksNotificationButton);
        noThanksNotificationButton.click();
        return this;
    }

    private SetupHomePage killCookies() {
        WaitUntil.elementToBeClickable(clickXOfCookieMessage);
        clickXOfCookieMessage.click();
        return this;
    }

    public SetupHomePage OpenHome() {
        clickNoThanksNotificationsButton();
        killCookies();
        return this;
    }
}
