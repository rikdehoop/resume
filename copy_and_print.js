var btn = document.getElementById("print");
btn.onclick = () =>{
    window.alert("Adjust the print setting Scale and Options!")
    window.print()
}
var copyText = document.getElementById("copy");
copyText.onclick = () =>{
    window.alert("The page has been copied to your clipboard!")
    // Copy the text inside the text field
    navigator.clipboard.writeText(document.body.innerText);
}

