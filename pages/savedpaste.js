class SavedPaste {    
    get savedTitleField() {
        return $('.info-top h1'); 
    }
    get savedSntxHighlight() {
        return $("//a[text()='Bash']");        
    }
    get savedTextRaws() {
        return $$('ol.bash');
    }    
}
module.exports =SavedPaste;