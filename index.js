fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((res) => appenddata(res))
  .catch((err) => {
    console.log(err);
  });

function appenddata(data) {
  data.map((elem, index) => {
    let box = document.createElement("div");
    box.style.border = "1px dotted black"

    let image = document.createElement("img");
    image.src = elem.image;

    let title = document.createElement("h3");
    title.textContent = elem.title;

    let price = document.createElement("h3");
    price.textContent = "Rs - " + elem.price;

    let des = document.createElement("h5");
    des.textContent = elem.description;

    let category = document.createElement("h3");
    category.textContent = "Category - " + elem.category;



    box.append(image, title, des, price, category);
    document.getElementById("showData").append(box);
  });
}
