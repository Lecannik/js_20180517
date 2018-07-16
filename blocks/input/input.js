import Block from '../block';

export default class Input extends Block {

    get name () {
        return 'input';
    }

    /**
     * Input
     * @param {Object} obj
     * @param {string} obj.placeholder - текст кнопки,
     * @param {string} [obj.type] - тип инпута (по умолчанию text)
     */
    constructor({ placeholder, type = 'text', value='' }) {
        super();

        this.el.classList.toggle('input', true);
        this.el.type  = type;
        this.el.placeholder = placeholder;
        this.el.value = value;
    }

}
