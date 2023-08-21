class HomePage {   
    async open(path) {
        await browser.url(path);
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
module.exports=HomePage;