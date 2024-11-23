

import { EventPost } from '../../types/post';
import { addObserver, appState } from '../../store';

import Styles from '../../screens/adminView/adminView.css';
import { addProducts } from '../../utils/firebase';

class AdminView extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        addObserver(this);
    }

    connectedCallback() {
        this.render();
    }

    async render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
                <h1>Admin View Screen</h1>
                
                <div class="creation-content">
                    <form>

                        <label for="image-url">Image URL:</label>
                        <input type="text" id="image-url" name="image-url" required>

                        <label for="eventTitle">Event Title:</label>
                        <input type="text" id="album-name" name="album-name" required>

                        <label for="eventDate">Event Date:</label>
                        <input type="date" id="artist-name" name="artist-name" required>

                        <label for="eventHour">Event Hour:</label>
                        <input type="number" id="price" name="price" required>

                        

                        

                        <button type="submit">User View</button>
                    </form>
                </div>
            `;

            // Add event listener for the form submission
            const form = this.shadowRoot?.querySelector('button');
            form?.addEventListener('submit', (event) => {
                event.preventDefault();
                this.handleFormSubmission();
            });

            const css = this.ownerDocument.createElement('style');
            css.innerHTML = Styles;
            this.shadowRoot?.appendChild(css);
        }
    }

    private getFormValues(): EventPost {
        const imageUrlElement = this.shadowRoot?.getElementById('imageUrl') as HTMLInputElement | null;
        const eventTitleElement = this.shadowRoot?.getElementById('eventTitle') as HTMLInputElement | null;
        const eventDateElement = this.shadowRoot?.getElementById('eventDate') as HTMLInputElement | null;
        const eventHourElement = this.shadowRoot?.getElementById('eventHour') as HTMLInputElement | null;
        
    
        return {
            imageUrl: imageUrlElement?.value || '',
            eventTitle: eventTitleElement?.value || '',
            eventDate: eventDateElement?.value || '',
            eventHour: eventHourElement?.value || '',
            
            
        };
    }
    
    async handleFormSubmission() {
        // Get the form data
        const formValues = this.getFormValues();
    
        try {
            // Save the product to the database
            await addProducts(formValues);
            console.log('Product added successfully');
        } catch (error) {
            console.error('Error adding product:', error);
        }
    }
    
    
    }


customElements.define('adminview-screen', AdminView);
export default AdminView;