import Router from './modules/router';

import LoginView from './views/login/login';
import SignupView from './views/signup/signup';

window.addEventListener('DOMContentLoaded', function () {
    let router = new Router();

    let loginView = new LoginView({
        el: document.querySelector('.view-container.js-login')
    });

    loginView.formOnCenter('.login-view');

    let signupView = new SignupView({
        el: document.querySelector('.view-container.js-signup')
    });

    signupView.formOnCenter('.signup-view');

    router
        .route('login', loginView)
        .route('signup', signupView)
        .route('chat', loginView)
        .route('users', loginView);

    router.start();
});
