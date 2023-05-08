function reverseString() {
    let userWord = document.getElementById("tacoCat").value;
    let filteredWord = userWord.replace(/[\W_]/g, '').toLowerCase();
    let index = filteredWord.length - 1;
    let reversedWord = "";
    for (i = index; i >= 0; i--) {
        reversedWord += filteredWord[i];
    }
    displayData(filteredWord, reversedWord);
}   

function displayData(originalWord, reversedWord){
    if (reversedWord == originalWord) {
        if (reversedWord == "") {
            let palindrome = document.getElementById("palindrome");
            palindrome.innerText = "Please Enter a Word";
        } else {
            let palindrome = document.getElementById("palindrome");
            palindrome.innerText = "True";
        }
    } else {
        palindrome.innerText = "False";
    }
    let output = document.getElementById("tacoOutput");
    output.innerText = reversedWord;
}