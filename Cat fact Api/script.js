let url = "https://catfact.ninja/fact";
let fact = document.getElementById("fact");
let errorModal = document.getElementById("errorModal");
async function getfact() {
  try {
    let res = await fetch(url);
    let data = await res.json();
    fact.innerHTML = data.fact;
  } catch (err) {
    err = errorModal.style.visibility = "visible";
  }
}
hideerr = () => {
  errorModal.style.visibility = "hidden";
};
