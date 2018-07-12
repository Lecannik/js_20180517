import Block from '../block';

export default class Messages extends Block {

    get name () {
        return 'messages';
    }

    /**
     * textarea
     * @param {Object} obj
     * @param {string} obj.usersOnlile - объект списка пользователей,

     */
    constructor({ usersOnlile }) {
        super();


        let list = '';
        for(let li of usersOnlile){
            list += '<li>`${li}`</li>'
        }


        this.el.innerHeight = list;

        this.el.classList.toggle('messages', true);

    }

}