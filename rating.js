const ratingTemplate = document.createElement('template');

ratingTemplate.innerHTML = `
    <style>
        .rating{
            padding: 10px;
        }

        .starRated {
            cursor: pointer;
            padding: 5px;
        }

        .starNotRated{
            padding: 5px;
            cursor: pointer;
            filter: grayscale(100%);
        }
    </style>

    <div class='rating'></div>
`
class Rating extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({mode: 'open'});
        this._shadowRoot.appendChild(ratingTemplate.content.cloneNode(true));
        this.$rating = this._shadowRoot.querySelector('.rating');
    }

    setStars(n){
        console.log(this.max)
        let stars = this.$rating.getElementsByTagName('img');
        for(let i = 0; i < this.max; i++){
            if(i <= +n - 1){ 
                stars[i].className = 'starRated'; 
            }
            else {
                stars[i].className = 'starNotRated';
            }
        }
    }

    createStars() {
        for(let i = 1; i <= +this.max; i++){
            let star = document.createElement('img');
            star.setAttribute('id', `${i}`);
            star.setAttribute('class', 'starRated');
            star.setAttribute('src', this.picture)
            star.addEventListener('click', () => this.setStars(star.id))
            this.$rating.appendChild(star);
        }
    }

    createRating() {
        this.$rating.innerHTML = '';
        this.picture = this.pictue ? this.picture : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT-TvAl13LTtRPcOU3y6KN-qv_TiiThMFYvMg&usqp=CAU'
        if(!this.max || this.max < 1){
            this.max = 5;
        }
        if(!this.rating || this.rating > this.max || this.rating < 0){
            this.rating = 1;
        }
        this.createStars()
        this.setStars(this.rating)
    }

    static get observedAttributes() {
        return ['rating', 'max', 'picture'];
    }

    attributeChangedCallback(name, oldVal, newVal){
        this[name] = newVal;
        this.render();
    }

    connectedCallback() {
        this.createRating();
    }

    render(){
        this.createRating();
    }
}

window.customElements.define('my-rating', Rating);