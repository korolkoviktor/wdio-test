const NewPastePage = require('../pages/newpaste');
const SavedPastePage = require('../pages/savedpaste');
const testData1 = require('../testdata/datatest1');
const testData2 = require('../testdata/datatest2');
const newpaste = new NewPastePage();
const savedpaste = new SavedPastePage();

describe('Testing pastebin.com:', () => {
    
    describe ('First test "I can win": new short paste without saving', ()=> {
        
        it('text is correct', async () => {
            newpaste.open();
            await newpaste.createNewPaste(testData1);                    
            expect(await newpaste.newPasteField.getValue()).toEqual(testData1.text);            
        })
        it ('expiration time is correct', async () => {
            expect(await newpaste.dropDownMenuExpiration.getText()).toEqual(testData1.expiration);
        })
        it ('title is correct', async () => {
            expect(await newpaste.titleField.getValue()).toEqual(testData1.title);            
        })
    })   
    describe ('Second test "Bring it on": new full paste with saving', () => {
        it ('text is correct', async () => {
            newpaste.open();
            await newpaste.createNewPaste(testData2);                
            await newpaste.createButton.click();            
            await  savedpaste.savedSyntaxHighlight.waitForDisplayed();           
            const str = await (savedpaste.savedTextRaws.map(text => text.getText())); //read saved textcode
            expect(await str.toString()).toEqual(testData2.text);        
        })
        it ('syntax highlight is correct', async () => {            
            expect(await savedpaste.savedSyntaxHighlight.getText()).toEqual(testData2.syntax);
        })
        it ('title is correct', async () => {            
            expect(await savedpaste.savedTitleField.getText()).toEqual(testData2.title);            
        })
    })    
})