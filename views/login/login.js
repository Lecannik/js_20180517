import Input from '../../blocks/input/input';
import Button from '../../blocks/button/button';
import View from '../view';
import style from './login.scss';
import template from './login.pug';

export default class LoginView extends View {

    get bemName() {
        return 'login-view';
    }

    constructor({el}) {
        super({el});
        this.render(template);

        this.name = new Input({
            placeholder: 'Имя'
        });

        this.pwd = new Input({
            placeholder: 'Пароль',
            type: 'password'
        });

        this.button = new Button({
            text: 'Войти',
            type: 'submit'
        });

        this.pwd.onInput = function (event) {
            console.log(event);
        };

        this
            .addBlock('name', this.name)
            .addBlock('pwd', this.pwd)
            .addBlock('submit', this.button);
    }


    /**
     * Расположение view по центру
     * @param element - имя элемента
     */
    formOnCenter(element){
        let form = document.querySelector(element);
        let widthForm = document.documentElement.clientWidth/2 - 101;
        let heightForm = document.documentElement.clientHeight/2 - 151;
        form.style.left = widthForm + "px" ;
        form.style.top = heightForm + "px" ;
        console.log(form.style.width);
        let scrollWidth = form.clientWidth;
        console.log(scrollWidth);
    }



}