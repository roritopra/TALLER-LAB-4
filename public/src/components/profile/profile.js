

class MyProfile extends HTMLElement {
  // this is how you declare which props are you interested in
  static get observedAttributes() {
    return ['uuid', 'name', 'age', 'job', 'miles', 'logo', 'imagen'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.logo = './src/imagenes/logo.png'
  
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(propName, oldValue, newValue) {
    this[propName] = newValue;
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="/src/components/profile/styles.css">
        <section>
        <img src=${this.logo} class ="imgLogo" alt=" "></img>
        <p> </p>
        <img src=${this.imagen} class ="img1" alt=" "></img>
        
        <h1>${this.name} ${this.age}</h1>
        <span><strong> ${this.miles}</strong><span>
        <p> </p>
        <span><strong>${this.job}</strong><span>
        <p> </p>


        </section>
        `;
  }
}

customElements.define('my-profile', MyProfile);
export default MyProfile;
