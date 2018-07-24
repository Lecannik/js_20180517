import Block from '../block';
import ListStyle from '../list/list';

import template from './list.pug';
import style from './list.scss';


export default class List extends Block {

    get name () {
        return 'ul';
    }

    /**
     * Input
     * @param {Object} obj
     * @param {array} obj.user - массив объектов пользователей
     *
     */
    constructor({ user }) {
        super();
        let list='';
        for (let u of user){
            list+=template({
                name: u.name,
                id: u.id
            });
        }
        this.el.innerHTML=list;
        this.el.classList.toggle('list', true);

    }

}

