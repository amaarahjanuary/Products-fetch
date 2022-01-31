fetch('https://fakestoreapi.com/products')
.then((response) => response.json())
.then((data) => {
  data.forEach((products) => {
    document.querySelector("#products").innerHTML += `
  <div class="products">
  <img src="${products.image}" alt="">
  <h4>${products.title}</h4>
  <h6>${products.price}</h6>
  <p>${products.description}</p>
</div>
  `;
  });
});