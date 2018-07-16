import Button from './blocks/button/button';
import Input from './blocks/input/input';
import List from './blocks/list/list';
import Textarea from './blocks/textarea/textarea';
import Message from './blocks/messages/messages';

window.addEventListener('DOMContentLoaded', function () {

    let button = new Button({
        text: 'Тестовая кнопка'
    });

    let input = new Input({
        placeholder: 'Тестовый инпут'
    });

    let list = new List({
        list: ['первый', 'второй', 'третий']
    });

    let textarea = new Textarea({
        placeholder: 'Введите текст'
    });

    let message = new Message({
        message: 'Какое-то сообщение'
    });

    button.append(document.body);
    input.append(document.body);
    textarea.append(document.body);
    list.append(document.body);
    message.append(document.body);
});
