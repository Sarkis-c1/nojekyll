String.prototype.reverse = function reverse(string) {
    return Array.from(this).reverse().join("");
}



function reverse(string) {
    return string.split("").reverse().join("");
}

// Defines a Phrase object.
function Phrase(content) {
    this.content = content


// Returns content processed for palindrome testing.
this.processedContent = function processedContent() {
    return this.content.toLowerCase();
}

// Returns true if a palindrome, false otherwise
this.palindrome = function palindrome() {
        return this.processedContent === this.processedContent().reverse();
}
}

// Defines a TranslatedPhrase object.
function TranslatedPhrase(content, translation) {
    this.content = content;
    this.translation = translation;

// Returns content processed for palindrome testing.
this.processedContent = function processedContent() {
    return this.translation.toLowerCase();
}}

String.prototype.palindrome function palindrome() {
    return new Phrase(this).palindrome();
}

