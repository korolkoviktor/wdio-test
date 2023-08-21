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
}
module.exports = NewPastePage;