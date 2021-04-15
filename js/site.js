function reverseString(){
    let userWord = document.getElementById("tacoCat").value;
    let filteredWord = userWord.replace(/[\W_]/g, '').toLowerCase();
    let index = filteredWord.length - 1;
    let reverseWord = "";
    for (i = index; i >= 0; i--) {
        reverseWord += filteredWord[i];
    }
    if(reverseWord == filteredWord){
        let palindrome = document.getElementById("palindrome");
        palindrome.innerText = "True";
    }
    else{
        palindrome.innerText = "False";
    }
    let output = document.getElementById("tacoOutput");
    output.innerText = reverseWord;
}


