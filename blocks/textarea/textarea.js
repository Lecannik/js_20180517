import Block from '../block';

export default class Textarea extends Block {

    get name () {
        return 'textarea';
    }

    /**
     * textarea
     * @param {Object} obj
     * @param {string} obj.placeholder - текст кнопки,

     */
    constructor({ placeholder }) {
        super();

        this.el.classList.toggle('textarea', true);

        this.el.placeholder = placeholder;

    }

}

