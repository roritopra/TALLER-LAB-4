import * as components from './components/index.js';
import data from './components/data.js';

console.log(data);

class AppContainer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' }); // encapsulation, mode open means this is reachable for js on your web
  }

  connectedCallback() {
    this.render();
  }

  render() {
    data.forEach((element) => {
      this.shadowRoot.innerHTML += `
      <my-profile uuid="${element.id}" name="${element.name}" age="${element.age}" miles="${element.miles}" job= "${element.job}"></my-profile>
      <my-counter></my-counter>
      
      `;
    });
    
  }
}

customElements.define('app-container', AppContainer);

// reference: https://developer.mozilla.org/es/docs/Web/Web_Components
// reference: https://www.youtube.com/watch?v=neko6u1vHcY&list=PLTd5ehIj0goNQNCgtu-M2oGGpyQ1m6nxo
