import Block from '../block';

export default class List extends Block {

    get name () {
        return 'list';
    }

    /**
     * textarea
     * @param {Object} obj
     * @param {string} obj.usersOnlile - объект списка пользователей,

     */
    constructor({ usersOnlile }) {
        super();

        console.log({usersOnlile});

        let list = '';
        for(let li of usersOnlile){
            list += '<li>Пользователю '+ li +' онлайн .</li>'
        }


        this.el.innerHeight = list;

        this.el.classList.toggle('list', true);

    }

}