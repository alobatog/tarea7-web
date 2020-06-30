const elements = [
  {
    title: 'Ginger Champagne',
    normal: '$300.990',
    internet: '$199.000',
    discount: '50%',
    rate: 2,
    image: 'https://home.ripley.cl/store/Attachment/WOP/D113/2000377069318/2000377069318-2.jpg'
  },
  {
    title: 'Potato and Cheese Frittata',
    normal: '$300.990',
    internet: '$199.000',
    discount: '50%',
    rate: 3,
    image: 'https://home.ripley.cl/store/Attachment/WOP/D113/2000377069318/2000377069318-2.jpg'
  },
  {
    title: 'Eggnog Thumbprints',
    normal: '$300.990',
    internet: '$199.000',
    discount: '50%',
    rate: 5,
    image: 'https://home.ripley.cl/store/Attachment/WOP/D113/2000377069318/2000377069318-2.jpg'
  },
  {
    title: 'Succulent Pork Roast',
    normal: '$300.990',
    internet: '$199.000',
    discount: '50%',
    rate: 3,
    image: 'https://home.ripley.cl/store/Attachment/WOP/D113/2000377069318/2000377069318-2.jpg'
  },
  {
    title: 'Irish Champ',
    normal: '$300.990',
    internet: '$199.000',
    discount: '50%',
    rate: 3,
    image: 'https://home.ripley.cl/store/Attachment/WOP/D113/2000377069318/2000377069318-2.jpg'
  },
  {
    title: 'Chocolate-Cherry Thumbprints',
    normal: '$300.990',
    internet: '$199.000',
    discount: '50%',
    rate: 1,
    image: 'https://home.ripley.cl/store/Attachment/WOP/D113/2000377069318/2000377069318-2.jpg'
  },
  {
    title: 'Mean Woman Pasta',
    normal: '$300.990',
    internet: '$199.000',
    discount: '50%',
    rate: 3,
    image: 'https://home.ripley.cl/store/Attachment/WOP/D113/2000377069318/2000377069318-2.jpg'
  },
  {
    title: 'Hot Spiced Cider',
    normal: '$300.990',
    internet: '$199.000',
    discount: '50%',
    rate: 4,
    image: 'https://home.ripley.cl/store/Attachment/WOP/D113/2000377069318/2000377069318-2.jpg'
  },
  {
    title: "Isa's Cola de Mono",
    normal: '$300.990',
    internet: '$199.000',
    discount: '50%',
    rate: 4,
    image: 'https://home.ripley.cl/store/Attachment/WOP/D113/2000377069318/2000377069318-2.jpg'
  },
  {
    title: "Amy's Barbecue Chicken Salad",
    normal: '$300.990',
    internet: '$199.000',
    discount: '50%',
    rate: 2,
    image: 'https://home.ripley.cl/store/Attachment/WOP/D113/2000377069318/2000377069318-2.jpg'
  }
]

window.addEventListener('load', () => {
  elementsContainer = document.getElementById('right');
  elements.forEach(elem => {
    const newEl = createRetailElement(
      elem.title,
      elem.normal,
      elem.internet,
      elem.discount,
      elem.image,
      elem.rate,
    );
    elementsContainer.appendChild(newEl);
  });
});

window.addEventListener('filter-elements', (event) => {
  query = event.target._shadowRoot.getElementById('input-filter').value;
  elementsContainer = document.getElementById('right');
  elementsContainer.innerHTML = '';
  elements
    .filter(el => el.title.trim().toLowerCase().search(query.trim().toLowerCase()) !== -1)
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
