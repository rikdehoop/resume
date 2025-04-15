const btn = document.getElementById("print");

btn.onclick = () => {
  const link = document.createElement('a');
  window.alert("The page has been downloaded as pdf!")
  link.href = 'https://raw.githubusercontent.com/rikdehoop/resume/main/img/CV_Rik_de_Hoop.pdf';
  link.download = 'CV_Rik_de_Hoop.pdf'; // this is the filename for download
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

var copyText = document.getElementById("copy");
copyText.onclick = () =>{
    window.alert("The page has been copied to your clipboard!")
    // Copy the text inside the text field
    navigator.clipboard.writeText(document.body.innerText);
}

