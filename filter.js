const filterTemplate = document.createElement('template');

filterTemplate.innerHTML = `
  <style>

  </style>

  <div class="filter">
    <div>
      <p class="filter-title"></p>
    </div>
    <div>
      <p class="input-filter-label"></p>
      <input id="input-filter"/>
    </div>
  </div>
`

class Filter extends HTMLElement {
  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(filterTemplate.content.cloneNode(true));
    this.$filterTitle = this._shadowRoot.querySelector('.filter-title');
    this.$inputFilterLabel = this._shadowRoot.querySelector('.input-filter-label');
  }

  static get observedAttributes() {
    return ['title', 'label'];
  }

  connectedCallback() {
    this.$filterTitle.innerHTML = this.title || 'Filter';
    this.$inputFilterLabel.innerHTML = this.label || 'Filtrar por nombre';
    this.addEventListener('keypress', (e) => {
      if (e.keyCode === 13) {
        this.dispatchEvent(new Event('filter-elements', {bubbles: true, composed: true}))
      }
    })
  }
}

customElements.define('my-filter', Filter);
