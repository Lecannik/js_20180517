import Button from './blocks/button/button';
import Input from './blocks/input/input';
import Textarea from "./blocks/textarea/textarea";

window.addEventListener('DOMContentLoaded', function () {

    let button = new Button({
        text: 'Тестовая кнопка'
    });

    let input = new Input({
        placeholder: 'Тестовый инпут'
    });

    let textarea = new Textarea({
        placeholder : "test"
    });

    button.append(document.body);
    input.append(document.body);
    textarea.append(document.body);
});


