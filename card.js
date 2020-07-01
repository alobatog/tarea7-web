const cardTemplate = document.createElement('template');

cardTemplate.innerHTML = `
<style>
    .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    max-width: 250px;
    margin: auto;
    text-align: center;
    font-family: arial;
    height: 100%;
    padding-left: 10px;
    padding-right: 10px;
    }

    .name {
    color: black;
    font-size: 15px;
    }

    .discount {
      color: black;
      font-size: 16px;
    }

    .discount {
      color: black;
      font-size: 16px;
    }

    .price {
    color: black;
    font-size: 22px;
    }

    .internet {
    color: blue;
    font-size: 22px;
    }

    .normal {
    color: grey;
    text-decoration: line-through;
    font-size: 22px;
    }
</style>

<div class="card">
  <p class="discount"></p>
  <img class="picture" src="" alt="Denim Jeans" style="width:100%">
  <h1 class="name">Tailored Jeans</h1>
  <p class="price"></p>
  <p class="internet"></p>
  <p class="normal"></p>
</div>
`;

class Card extends HTMLElement {
  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(cardTemplate.content.cloneNode(true));
    this.$card = this._shadowRoot.querySelector('.card');
    this.$name = this._shadowRoot.querySelector('.name');
    this.$normal = this._shadowRoot.querySelector('.normal');
    this.$internet = this._shadowRoot.querySelector('.internet');
    this.$price = this._shadowRoot.querySelector('.price');
    this.$picture = this._shadowRoot.querySelector('.picture');
    this.$discount = this._shadowRoot.querySelector('.discount');
  }

  static get observedAttributes() {
    return ['normal', 'internet', 'name', 'price', 'picture', 'discount', 'rating'];
  }

  connectedCallback() {
    const ratingEl = document.createElement('my-rating');
    ratingEl.setAttribute('rating', this.rating || 1);
    this.$card.appendChild(ratingEl);
  }

  attributeChangedCallback(name, oldVal, newVal) {
    this[name] = newVal;
    this.render();
  }

  render() {
    this.$normal.innerHTML = this.normal || '';
    this.$internet.innerHTML = this.internet || '';
    this.$name.innerHTML = this.name || '';
    this.$price.innerHTML = this.price || '';
    this.$picture.src = this.picture || '';
    this.$discount.innerHTML = this.discount ? `${this.discount}% de descuento` : '';
  }
}

window.customElements.define('my-card', Card);
