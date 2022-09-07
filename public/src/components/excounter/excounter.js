class MyExcounter extends HTMLElement {

  static get observedAttributes() {
    return ["excount"];
  }

  attributeChangedCallback(propName, oldValue, newValue) {
    console.log("changeded");
    this[propName] = newValue;
    this.mount();
  }

  
  connectedCallback() {
    console.log("mounteded");
    this.mount();
  }

  dissconnectedCallback() {
    console.log("unmounteded");
    this.removeEventListeners();
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.onButtonClicked = this.onButtonClicked.bind(this);
    this.currentValue = 0;
  }

  mount() {
    this.render();
    this.addEventListeners();
  }

  addEventListeners() {
    this.shadowRoot
      .querySelector("button")
      .addEventListener("click", this.onButtonClicked);
        
      
  }

  render() {
    console.log("render");
    // adding external styles to the component
    this.shadowRoot.innerHTML = `
        <section>
          ${this.excount || 0}
          <button> ❌ </button>
        </section>
    `;
  }

  removeEventListeners() {
    this.shadowRoot
      .querySelector("button")
      .removeEventListener("click", this.onButtonClicked);
  }

  onButtonClicked() {
    console.log("clicked");
      this.currentValue = Number(this.getAttribute("excount"));
      this.setAttribute("excount", this.currentValue + 1);
    
    
  }
}

customElements.define("my-excounter", MyExcounter);
export default MyExcounter;
