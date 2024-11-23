import UserView from "./screens/userView/userView";
import AdminView from "./screens/adminView/adminView"

import { appState, addObserver } from "./store";
import { Screens } from "./types/store";

class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        addObserver(this);
    };

    connectedCallback() {
        this.render();
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = ``;
            switch(appState.screen){
                case Screens.ADMINVIEW:
                    const dashboard = this.ownerDocument.createElement('adminview-screen');
                    this.shadowRoot.appendChild(dashboard);
                    break;

                case Screens.USERVIEW:
                    const addproducts = this.ownerDocument.createElement('userview-screen');
                    this.shadowRoot.appendChild(addproducts);
                    break;
                
                
                    
                
                default:
                    break;
            }
        }
    }
}

customElements.define('app-container', AppContainer);