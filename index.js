var elements = []

async function fetchproducts(){
  let fetchresult =  await fetch("https://api.bestbuy.com/v1/products(customerReviewCount=2&(categoryPath.id=abcat0502000))?apiKey=WH8H7fy2kfYb81XF7XhKlzgI&pageSize=30&format=json", {
	"method": "GET",
  })
  .then(response => {
    return response.json();
  })
  .catch(err => {
    console.log(err);
  });

  console.log(fetchresult.products.length)
  elementsContainer = document.getElementById('right');
  fetchresult.products.forEach(product => {
    const newEl = createRetailElement(
      product.name,
      product.regularPrice,
      product.salePrice,
      product.percentSavings,
      product.image,
      product.customerReviewAverage,
    );
    elements.push({
      title: product.name,
      normal: product.regularPrice,
      internet: product.salePrice,
      discount: product.percentSavings,
      rate: product.customerReviewAverage,
      image: product.image
    })
    elementsContainer.appendChild(newEl);
  })

}

window.addEventListener('load', () => {
  fetchproducts();
});

window.addEventListener('filter-elements', (event) => {
  query = event.target._shadowRoot.getElementById('input-filter').value;
  queryScore = event.target._shadowRoot.getElementById('input-star').rating;
  elementsContainer = document.getElementById('right');
  elementsContainer.innerHTML = '';
  elements
    .filter(el => el.title.trim().toLowerCase().search(query.trim().toLowerCase()) !== -1)
    .filter(el => el.rate >= queryScore)
    .forEach(elem => {
      const newEl = createRetailElement(
        elem.title,
        elem.normal,
        elem.internet,
        elem.discount,
        elem.image,
        elem.rate,
      );
      elementsContainer.appendChild(newEl);
    })

});

function createRetailElement(title, normal, internet, discount, image, rating) {
  const el = document.createElement('my-card');
  el.setAttribute('name', title);
  el.setAttribute('normal', normal);
  el.setAttribute('internet', internet);
  el.setAttribute('discount', discount);
  el.setAttribute('picture', image);
  el.setAttribute('rating', rating);
  return el;
}
