const btn = document.getElementById("print");

btn.onclick = () => {
  window.alert("Je CV wordt gegenereerd als PDF...");

  // Hide buttons before printing
  const buttons = document.querySelectorAll("button");
  buttons.forEach(btn => btn.style.display = "none");

  const element = document.querySelector(".print-area");

  const opt = {
    margin:       [5, 5, 5, 5], // top, left, bottom, right
    filename:     'CV_Rik_de_Hoop.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2, useCORS: true },
    jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' },
    pagebreak:    { mode: ['avoid-all', 'css', 'legacy'] }
  };

  html2pdf().set(opt).from(element).save().then(() => {
    // Show buttons again
    buttons.forEach(btn => btn.style.display = "inline-block");
  });
}
var copyText = document.getElementById("copy");
copyText.onclick = () =>{
    window.alert("The page has been copied to your clipboard!")
    // Copy the text inside the text field
    navigator.clipboard.writeText(document.body.innerText);
}

