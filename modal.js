class Modal extends HTMLElement {
  constructor() {
      super()
      this.attachShadow({ mode: 'open' })
      this.shadowRoot.innerHTML = /*html*/`
        <style>
            #backdrop {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100vh;
                background: rgba(0,0,0,0.75);
                z-index: 10;
            }

            #modal {
                z-index: 100;
                position: fixed;
                top: 15vh;
                left: 25%;
                width: 50%;
                height: 30rem;
                background: white;
                border-radius: 3px;
                box-shadow: 0 2px 8px rgba(0,0,0,0.26);
            }
        </style>
        <div id="backdrop"></div>
        <div id="modal"></div>
      `
  }
}

customElements.define('sw-modal', Modal)