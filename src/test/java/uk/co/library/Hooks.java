package uk.co.library;

import com.cucumber.listener.Reporter;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import uk.co.library.propertyreader.PropertyReader;
import uk.co.library.utility.Utility;

import java.io.IOException;

public class Hooks extends Utility {
    @Before
    public void setUP1() {
        selectBrowser(PropertyReader.getInstance().getProperty("browser"));
        // Reporter.assignAuthor("Jinal");
    }

    @After
    public void tearDown(Scenario scenario) {
        if (scenario.isFailed()) {
            String screenShotPath = Utility.getScreenshot(driver, scenario.getName().replace(" ", "_"));
            try {
                Reporter.addScreenCaptureFromPath(screenShotPath);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        closeBrowser();
    }
}
