import Block from '../block';

export default class Button extends Block {

    get name() {
        return 'button';
    }

    /**
     * Кнопка
     * @param {Object} obj
     * @param {string} obj.text - текст кнопки
     * @param {string} [obj.type]
     */
    constructor({ text, type }) {
        super();

        this.el.textContent = text;
        this.el.classList.toggle('button');
        if (type) {
            this.el.type = type;
        }

    }
}
