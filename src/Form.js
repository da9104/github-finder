import axios from 'axios';

const API_URL = 'https://api.github.com/users'

class Form {
    constructor(addCard, clearCards) {
        this.addCard = addCard;
        this.clearCards = clearCards;
      //  console.log(this.addCard);

        this.API_URL = "";
        this.searchInput = document.querySelector('input[name="search"]')
        this.searchTerm = "";
        this.searchInput.addEventListener('keyup', () => this.handleKeyup(event))
      //  this.submitButton = document.querySelector('.button-primary');
        this.submitButton = document.querySelector('button[type="submit"]');
        this.submitButton.disabled = !this.searchTerm;
        if (this.submitButton.disabled = !this.searchTerm) {
            this.submitButton.disabled = true;
            this.submitButton.className = 'button';
        }
        this.form = document.querySelector('form');
        this.form.addEventListener('submit', () => (
        this.handleSubmit(event)));

        this.clearButton = document.querySelector('button[type="button"]');
        this.clearButton.addEventListener('click', () => {
            this.clearCards();
        })
    }
    handleKeyup(event) {
        this.searchTerm = event.target.value.trim();
        this.API_URL = `${API_URL}/${this.searchTerm}`;
        this.submitButton.disabled = !this.searchTerm;
        if (this.submitButton.disabled = this.searchTerm) {
            this.submitButton.disabled = false;
            this.submitButton.className = 'button-primary';
        }
       // console.log(this.API_URL);
    }

    handleSubmit(event) {
        event.preventDefault();
        axios.get(this.API_URL)
        .then(({ data }) => this.addCard(data))
        .catch(error => this.formatError('rejected.', error))
        this.form.reset();
    }
    formatError(error) {
        console.error(error);
        const errorText = document.createElement('p')
        errorText.style.color = "red";
        errorText.style.fontSize = "1.7rem";
        errorText.style.fontStyle = "bold"
        errorText.innerHTML = 'No user found';
        this.form.appendChild(errorText);
        setTimeout(() => {
            this.form.removeChild(errorText)
        }, 3000);
    }
}

export default Form; 