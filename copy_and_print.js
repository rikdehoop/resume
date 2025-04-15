const btn = document.getElementById("print");

btn.onclick = () => {
window.alert("Generating PDF of the whole page...");

// Select the whole body to convert
const element = document.body;

const opt = {
  margin:       0,
  filename:     'webpage.pdf',
  image:        { type: 'jpeg', quality: 0.98 },
  html2canvas:  { scale: 2 },
  jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
};

// Convert and save
html2pdf().set(opt).from(element).save();
};
var copyText = document.getElementById("copy");
copyText.onclick = () =>{
    window.alert("The page has been copied to your clipboard!")
    // Copy the text inside the text field
    navigator.clipboard.writeText(document.body.innerText);
}

