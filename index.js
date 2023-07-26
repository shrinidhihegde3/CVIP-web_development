const quote = document.getElementById("quote");
const author = document.getElementById("author");

const apiUrl =  "https://api.quotable.io/random";

async function getquote(url){
    const response = await fetch(url);
    var data = await response.json();
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
    console.log(data);
}
function myFunction() {
    // Get the text field
    var copyText = document.getElementById("quote");
  
    // Select the text field
    //copyText.select();
    //copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.innerText);

    var button  = document.getElementById('copyButton');
    var originalText = button.innerHTML;
    var newText = "Copied!";
    button.innerHTML = newText;
      setTimeout(function() {
        button.innerHTML = originalText;
        
      }, 1000);

  
    // Alert the copied text
    //alert("Copied the text: " + copyText.innerText);
  }

getquote(apiUrl);