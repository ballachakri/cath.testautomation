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

    private void clickNoThanksNotificationsButton() {
        WaitUntil.elementToBeClickable(noThanksNotificationButton);
        noThanksNotificationButton.click();
    }

    private void killCookies() {
        WaitUntil.elementToBeClickable(clickXOfCookieMessage);
        clickXOfCookieMessage.click();
    }

    public void OpenHome() {
        clickNoThanksNotificationsButton();
        killCookies();
    }
}
