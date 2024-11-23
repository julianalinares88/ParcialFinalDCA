

import { EventPost } from '../../types/post';
import { addObserver, appState } from '../../store';

import Styles from '../../screens/adminView/adminView.css';
import { addProducts } from '../../utils/firebase';

class UserView extends HTMLElement {
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
                <h1>User View Screen</h1>
                
                </div>
            `;

            

            const css = this.ownerDocument.createElement('style');
            css.innerHTML = Styles;
            this.shadowRoot?.appendChild(css);
        }
    }    
       
    }
    
    
    


customElements.define('userview-screen', UserView);
export default UserView;