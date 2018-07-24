import Block from '../block';
import template from './textarea.pug';
import style from './textarea.scss';

export default class Textarea extends Block {

    get name () {
        return 'div';
    }

    /**
     * Input
     * @param {Object} obj

     * @param {string} obj.placeholder - текст кнопки,
     * @param {string} [obj.type] - тип инпута (по умолчанию text)
     */
    constructor({ placeholder, value='' }) {
        super();

        this.el.classList.toggle('textarea', true);
        this.el.innerHTML=template({
            placeholder:placeholder,
            value:value
        });
    }

}

