const btn = document.getElementById("print");

btn.onclick = () => {
  window.alert("Generating PDF of the whole page...");

  const element = document.body;

  const opt = {
    margin:       5,
    filename:     'webpage.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2, useCORS: true }, // CORS helps if you have external images
    jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };

  html2pdf().set(opt).from(element).save();
};
var copyText = document.getElementById("copy");
copyText.onclick = () =>{
    window.alert("The page has been copied to your clipboard!")
    // Copy the text inside the text field
    navigator.clipboard.writeText(document.body.innerText);
}

