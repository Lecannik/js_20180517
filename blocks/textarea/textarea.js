import Block from '../block';

export default class Textarea extends Block {

    get name () {
        return 'textarea';
    }

    /**
     * Input
     * @param {Object} obj
     * @param {string} bj.placeholder - текст поля
     */
    constructor({ placeholder }) {
        super();

        this.el.classList.toggle('textarea', true);
        this.el.placeholder = placeholder;
    }

}
