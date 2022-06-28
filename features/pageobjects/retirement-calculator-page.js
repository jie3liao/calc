const Page = require('./page');

class RetirementCalculatorPage extends Page {
    
    getInput(fieldName) {
        switch(fieldName) {
            case "current age":
                return $('#current-age');
            case "retirement age":
                return $('#retirement-age');
            case "current annual income":
                return $('#current-income');
            case "current spouse annual income":
                return $('#spouse-income');
            case "current retirement savings":
                return $('#current-total-savings');
            case "current retirement contribution":
                return $('#current-annual-savings');
            case "annual retirement contribution increase":
                return $('#savings-increase-rate');
            case "social security override":
                return $('#social-security-override');
            case "additional income":
                return $('#additional-income');
            case "number of years on retirement income":
                return $('#retirement-duration');
            case "final annual income":
                return $('#retirement-annual-income');
            case "pre-retirement investment return":
                return $('#pre-retirement-roi');
            case "post-retirement investment return":
                return $('#post-retirement-roi');
            default: throw new Error('Field name is not supported: ' + fieldName);
        }
    }

    getButton(buttonName) {
        switch(buttonName) {
            case "Calculate":
                return $('//button[contains(., "Calculate")]');
            case "Email my results":
                return $('//button[contains(., "Email my results")]');
            case "Save changes":
                return $('//button[contains(., "Save changes")]');
            default: throw new Error('Button name is not supported: ' + buttonName);
        }
    }

    getRadioButton(buttonName, groupName) {
        switch(groupName) { 
            case "social security income":
                return $(`//legend[@for="include-social"]/following-sibling::ul/li/label[contains(., "${buttonName}")]`);
            case "marital status":
                return $(`//legend[@for="marital-status"]/following-sibling::ul/li/label[contains(., "${buttonName}")]`);
            case "income increase with inflation":
                return $(`//legend[@id="inflation-label"]/following-sibling::ul/li/label[contains(., "${buttonName}")]`);
            default: throw new Error('Radio button group name is not supported: ' + groupName);
        }    
    }

    getLink(linkName) {
        switch(linkName) { 
            case "Adjust default values":
                return $('//a[contains(text(), "Adjust default values")]');
            default: throw new Error('Link name is not supported: ' + linkName);
        }
    }

    open() {
        return super.open('insights-tools/retirement-calculator.html');
    }
}

module.exports = new RetirementCalculatorPage();
