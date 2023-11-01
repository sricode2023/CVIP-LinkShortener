let original_link = document.getElementById("original_link");
let generate = document.getElementById("generate");
let shorten_link = document.getElementById("shorten_link");
let copy = document.getElementById("copy");

generate.addEventListener("click", () => {
  let url = original_link.value;
  fetch("https://api-ssl.bitly.com/v4/shorten", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 26774534336cb4f2fe40e511bd90e285d9e9042d'
    },
    body: JSON.stringify({ long_url: url })
  })
    .then((resp) => resp.json())
    .then((value) => {
      shorten_link.value = value.link;
    })
    .catch((error) => {
      shorten_link.value = "Something Went Wrong!";
    });
});

copy.addEventListener("click", () => {
  shorten_link.select();
  document.execCommand("copy");
  shorten_link.setSelectionRange(0, 0);
  shorten_link.classList.add("copied-message");
  copy.innerText = "Copied!";
  
  setTimeout(() => {
    shorten_link.classList.remove("copied-message");
    copy.innerText = "Copy";
  }, 2000); 
});

