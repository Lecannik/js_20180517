import Block from '../block';
import './message.scss';

export default class Message extends Block {

    get name () {
        return 'p';
    }

    /**
     * Input
     * @param {Object} obj
     * @param {string} obj.message - текст сообщения
     */
    constructor({ message }) {
        super();

        this.el.classList.toggle('message', true);
        this.el.innerText = message;
    }

}
