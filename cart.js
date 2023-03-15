var cartData = JSON.parse(localStorage.getItem("cart")) || []
console.log(cartData)

cartData.map((elem) => {
    let box = document.createElement("div");
    box.style.border = "1px dotted black";

    let image = document.createElement("img");
    image.src = elem.image;

    let title = document.createElement("h3");
    title.textContent = elem.title;

    let price = document.createElement("h3");
    price.textContent = "Rs - " + elem.price;

    let des = document.createElement("h4");
    des.textContent = elem.description;

    let category = document.createElement("h3");
    category.textContent = "Category - " + elem.category;

    

    box.append(image, title, des, price, category);
    document.getElementById("cart").append(box);
})