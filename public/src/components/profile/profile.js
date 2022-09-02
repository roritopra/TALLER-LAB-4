class MyProfile extends HTMLElement {
  // this is how you declare which props are you interested in
  static get observedAttributes() {
    return ['uuid', 'name', 'age', 'job', 'miles', 'logo', 'persona1Img', 'persona2Img', 'persona3Img', 'persona4Img'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.logo = './src/imagenes/logo.png'
    this.persona1Img = './src/imagenes/persona1.jpg'
    this.persona2Img = './src/imagenes/persona2.jpg'
    this.persona3Img = './src/imagenes/persona3.jpg'
    this.persona4Img = './src/imagenes/persona4.jpg'
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
        <img src=${this.persona1Img} class ="img1" alt=" "></img>
        
        <h1>${this.name} ${this.age}</h1>
        <span><strong> ${this.miles}</strong><span>
        <p> </p>
        <span><strong>${this.job}</strong><span>
        <p> </p>

        ${this.count || 0}
        <button> 🧡 </button>
        </section>
        `;
  }
}

customElements.define('my-profile', MyProfile);
export default MyProfile;
