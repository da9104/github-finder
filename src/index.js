import Form from './Form';
import CardList from './CardList';


class App {




    constructor() {
        this.cards = this.getCards();
        this.addCard = this.addCard.bind(this);
        this.clearCards = this.clearCards.bind(this);
    }
    addCard(data) {
        // this.cards.push(data);
        // console.log(this.cards);
        this.cards = [...this.cards, data];
        CardList(this.cards);
        console.log(this.cards);
        localStorage.setItem('users', JSON.stringify(this.cards));
    }
    clearCards() {
        this.cards = [];
        CardList(this.cards);
        localStorage.setItem('users', '');
    }
    getCards() {
        if (localStorage.getItem('users')) {
            return JSON.parse(localStorage.getItem('users'))
        } else {
            return [];
        }
    }




}

const app = new App();
const form = new Form(app.addCard, app.clearCards);
export const render = (html, node) => (node.innerHTML = html);
CardList(app.cards);

app.use((req, res, next) => {
    res.setHeader("Permissions-Policy", "interest-cohort=()");
    return next();
});