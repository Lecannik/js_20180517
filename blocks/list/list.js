import Block from '../block';

export default class List extends Block {

    get name () {
        return 'ul';
    }

    /**
     * Input
     * @param {Object} obj
     * @param {string} obj.list - массив с элементами списка
     */
    constructor({ list }) {
        super();

        this.el.classList.toggle('list', true);
        this.el.innerHTML = list.map(item => {
            return `<li class='list__item'>${item}</li>`
        }).join('');
    }

}
