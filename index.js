import Button from './blocks/button/button';
import Input from './blocks/input/input';
import Textarea from "./blocks/textarea/textarea";
import List from "./blocks/list/list";

window.addEventListener('DOMContentLoaded', function () {

    let usersOnlile = [1,23,4, '434'];


    let button = new Button({
        text: 'Тестовая кнопка'
    });

    let input = new Input({
        placeholder: 'Тестовый инпут'
    });

    let textarea = new Textarea({
        placeholder : "test"
    });

    let list= {};
    list = new List({usersOnlile});

    button.append(document.body);
    input.append(document.body);
    textarea.append(document.body);
    list.append(document.body);
});


