document.addEventListener("DOMContentLoaded", function () {
  const colorOptions = document.querySelectorAll('input[name="color"]');
  const productImage = document.getElementById("productImage");
  const mainImage = document.getElementById("mainImage");

  // Add event listener to each color option
  colorOptions.forEach((option) => {
    option.addEventListener("change", function () {
      // Update image based on selected color
      let color = this.value;
      let imagePath = `img/${color}.jpg`;
      mainImage.src = imagePath;

      // Update selected state for color options
      colorOptions.forEach((opt) => {
        let span = opt.nextElementSibling;
        if (opt.checked) {
          span.classList.add("selected");
        } else {
          span.classList.remove("selected");
        }
      });
    });
  });
});

function change(event, source) {
  document.getElementById("mainImage").src = source;
}

function add(data) {
  let colorSelected = ""
  document.querySelectorAll('input[name="color"]').forEach((opt) => {
    if(opt.checked) colorSelected = opt.value;
  });
  let pointure = document.querySelector("select").value;
  if(!pointure || isNaN(+pointure)) return alert("Please select a pointure");
  if(!colorSelected) return alert("Please select a color");
  let panier = localStorage["panier"]
  if(panier) {
    panier = JSON.parse(panier);

    panier.push({ ...data, pointure: pointure, color: colorSelected, image: data.colors[colorSelected] });
    localStorage["panier"] = JSON.stringify(panier);
  } else {
    panier = [];
    panier.push({
      ...data,
      pointure: pointure,
      color: colorSelected,
      image: data.colors[colorSelected],
    });
    localStorage["panier"] = JSON.stringify(panier);
  }
  alert("Added to panier")
}
