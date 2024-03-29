(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let Phrase = require("sarkis-palindrome");

function palindromeTester(event) {
    event.preventDefault();
    
       let phrase = new Phrase(event.target.phrase.value);
    let palindromeResult = document.querySelector("#palindromeResult");
if (phrase.palindrome()) {
    
palindromeResult.innerHTML = `"<strong>${phrase.content}</strong>" is a palindrome!`;

} else {
    
palindromeResult.innerHTML = `"${phrase.content}" is not a palindrome!`;
}

}

document.addEventListener("DOMContentLoaded", function() {
  let button = document.querySelector("#palindromeTester");  
button.addEventListener("submit", function() {
    palindromeTester(event);
});
});
 

},{"sarkis-palindrome":2}],2:[function(require,module,exports){
module.exports = Phrase;

String.prototype.reverse = function() {
    return Array.from(this).reverse().join("");
}



function reverse(string) {
    return string.split("").reverse().join("");
}

// Defines a Phrase object.
function Phrase(content) {
    this.content = content;
    


// Returns content processed for palindrome testing.
this.processedContent = function processedContent() {
    return this.letters().toLowerCase();
}
this.letters = function letters() {
    return (this.content.match(/[a-z]/gi) || []).join("");
  }    

// Returns true if a palindrome, false otherwise
this.palindrome = function palindrome() {
        return this.processedContent() === this.processedContent().reverse();
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

String.prototype.palindrome = function palindrome() {
    return new Phrase(this).palindrome();
}

},{}]},{},[1]);
