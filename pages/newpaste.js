const HomePage = require('./page');

class NewPastePage extends HomePage {
    constructor() {
        super();
    }
    get newPasteField() {
        return $('#postform-text');
    }
    get adCloseButton() {
        return $('.vliIgnore vli');
    }
    get dropDownMenuExpiration() {       
        return $('#select2-postform-expiration-container');
    }
    get value10MinExpirationMenu() {
        return $('//li[text()="10 Minutes"]');
    }
    get dropDownMenuHighlght() {        
        return $('#select2-postform-format-container');
        
    }
    get valueBashHighlghtMenu() {
        return $("//li[text()='Bash']");
    }    
    get checkBoxSyntaxHighlight() {
        return $('.toggle__control');
    }
    get titleField() {
        return $('#postform-name');
    }
    get createButton() {
        return $('.btn.-big');
    }
    open() {
        return super.open("https://pastebin.com/");
    }
    async createNewPaste(testData) {
        await this.newPasteField.setValue(testData.text);
        await this.adCloseButton.click(); // close Advertisment Bunner          
        if (testData.syntax) {
            await this.checkBoxSyntaxHighlight.click();        
            await this.dropDownMenuHighlght.click();
            await this.valueBashHighlghtMenu.click(); 
        };
        await this.dropDownMenuExpiration.click();
        await this.value10MinExpirationMenu.click();               
        await this.titleField.setValue(testData.title);
    }
}
module.exports = NewPastePage;