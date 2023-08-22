const HomePage = require('./page');

class SavedPastePage extends HomePage {
    get savedTitleField() {
        return $('.info-top h1');
    }
    get savedSyntaxHighlight() {
        return $("//a[text()='Bash']");
    }
    get savedTextRaws() {
        return $$('ol.bash');
    }
}
module.exports = SavedPastePage;