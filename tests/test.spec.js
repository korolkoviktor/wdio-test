const NewPaste = require('../pages/newpaste');
const SavedPaste=require('../pages/savedpaste');
const testdata1=require('../testdata/datatest1');
const testdata2=require('../testdata/datatest2');
const newpaste=new NewPaste();
const savedpaste=new SavedPaste();

describe('Test suite', () => {   
    beforeEach(()=> {
        newpaste.open();
    })     
    it('First test: I can win', async () => {                         
        await newpaste.newPasteField.setValue(testdata1.text);
        await newpaste.adCloseBtn.click(); // close Advertisment Bunner       
        await newpaste.dropdownMenuExpiration.click();             
        await newpaste.value10MinExpirtMenu.click();               
        await newpaste.titleField.setValue(testdata1.title);            
        expect(await newpaste.newPasteField.getValue()).toEqual(testdata1.text); 
        expect(await newpaste.valueExpirationContainer.getText()).toEqual(testdata1.expiration);               
        expect(await newpaste.titleField.getValue()).toEqual(testdata1.title);               
    })
    it('Second test: Bring it on', async ()=> {        
        await newpaste.newPasteField.setValue(testdata2.text); 
        await newpaste.adCloseBtn.click(); // close Advertisment Bunner                
        await newpaste.checkboxSntxHighlight.click();                  
        await newpaste.dropdownMenuHighlght.click();        
        await newpaste.valueBashHighlghtMenu.click();
        await newpaste.dropdownMenuExpiration.click();               
        await newpaste.value10MinExpirtMenu.click();
        await newpaste.titleField.setValue(testdata2.title);        
        await newpaste.createBtn.click();
        expect(await savedpaste.savedTitleField.getText()).toEqual(testdata2.title);       
        expect(await savedpaste.savedSntxHighlight.getText()).toEqual(testdata2.syntax);       
        const str = await (savedpaste.savedTextRaws.map(text => text.getText())); //read saved textcode
        expect(await str.toString()).toEqual(testdata2.text);
    })    
})
