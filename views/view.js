export default class View {

    constructor({ el }) {
        this.el = el;
        this.hide();
    }

    render(template) {
        this.el.innerHTML = template();
    }

    show() {
        this.el.hidden = false;
    }

    hide() {
        this.el.hidden = true;
    }

    addBlock(name, block) {
        this.el.querySelector(`.${this.bemName}__${name}`).appendChild(block.el);
        return this;
    }

}