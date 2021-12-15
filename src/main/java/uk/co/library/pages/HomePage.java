package uk.co.library.pages;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import uk.co.library.utility.Utility;

public class HomePage extends Utility {
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage() {


        PageFactory.initElements(driver, this);
    }



    @CacheLookup
    @FindBy(id = "keywords")
    WebElement jobTitleWe;

    @CacheLookup
    @FindBy(id = "location")
    WebElement locationWE;
    @CacheLookup
    @FindBy(id = "distance")
    WebElement distanceDropDown;
    @CacheLookup
    @FindBy(id = "toggle-hp-search")
    WebElement moreSearchOptionsLink;
    @CacheLookup
    @FindBy(id = "salarymin")
    WebElement salaryMin;
    @CacheLookup
    @FindBy(id = "salarymax")
    WebElement salaryMax;
    @CacheLookup
    @FindBy(id = "salarytype")
    WebElement salaryTypeDropDown;
    @CacheLookup
    @FindBy(id = "tempperm")
    WebElement jobTypeDropDown;
    @CacheLookup
    @FindBy(id = "hp-search-btn")
    WebElement findJobsBtn;

    @CacheLookup
    @FindBy(xpath = "//span//div//span[normalize-space()='Accept All']")
    WebElement acceptCookies;
    @CacheLookup
    @FindBy(id ="gdpr-consent-notice")
    WebElement iframe;



    public void setAcceptCookies(){
        switchToIframe(iframe);
        clickOnElement(acceptCookies);
        driver.switchTo().defaultContent();
        log.info("accept cookies :" + acceptCookies.toString());
    }

   /* public void acceptAll(){
        clickOnElement(acceptAll);
    }

    */


    public void enterJobTitle(String jobTitle){

        sendTextToElement(jobTitleWe,jobTitle);
        log.info("accept cookies :" + acceptCookies.toString());


    }
    public void enterLocation(String location){

        sendTextToElement(locationWE,location);
        log.info("accept cookies :" + acceptCookies.toString());
    }
    public void selectDistance(String distance){
        sendTabAndEnterKey(distanceDropDown);
        selectByVisibleTextFromDropDown(distanceDropDown,distance);
        log.info("select distance :" +distanceDropDown.toString());
    }
    public void clickOnMoreSearchOptionLink(){
        clickOnElement(moreSearchOptionsLink);
        log.info("click on more search option link :" + moreSearchOptionsLink.toString());

    }
    public void enterMinSalary(String minSalary){

        sendTextToElement(salaryMin,minSalary);
        log.info("enter minimum salary :" + salaryMin.toString());
    }
    public void enterMaxSalary(String maxSalary){
        sendTextToElement(salaryMax,maxSalary);
        log.info("enter maximum salary :" + salaryMax .toString());
    }
    public void selectSalaryType(String sType) {
        selectByVisibleTextFromDropDown(salaryTypeDropDown,sType);
        log.info("select salary type:" + salaryTypeDropDown.toString());
    }
    public void selectJobType(String jobType) {
        selectByVisibleTextFromDropDown(jobTypeDropDown,jobType);
        log.info("select job type :" + jobTypeDropDown.toString());
    }
    public void clickOnFindJobsButton(){
        clickOnElement(findJobsBtn);
        log.info("click on find job button :" + findJobsBtn.toString());
    }
}
