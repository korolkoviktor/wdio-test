const HomePage=require('./page');

class NewPaste extends HomePage {    
    get newPasteField() {
        return $('textarea[id=postform-text]');    
    }
    get adCloseBtn() {
        return $('#vi-smartbanner > vli > vli');
    }
    get dropdownMenuExpiration() {
        return $("div.field-postform-expiration>div>span>span.selection>span>span.select2-selection__arrow");
    }
    get value10MinExpirtMenu() {
        return $('//li[text()="10 Minutes"]');        
    }
    get dropdownMenuHighlght() {
        return $('div.field-postform-format>div>span>span.selection>span>span.select2-selection__arrow')
    }
    get valueBashHighlghtMenu() {
        return $("//li[text()='Bash']");
    }
    get valueExpirationContainer() {
        return $('[id="select2-postform-expiration-container"]');
    }
    get checkboxSntxHighlight() {
        return $('div.toggle__control');
    }
    get titleField() {
        return $("input[id='postform-name']"); 
    }
    get createBtn() {
        return $("button.btn.-big");
    }    
    open() {
        return super.open("https://pastebin.com/");
    }
}
module.exports =NewPaste;