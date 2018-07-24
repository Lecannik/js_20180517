export default class Router {

    constructor() {
        this.routes = {};
    }

    /**
     * Добавить новый маршрут
     * @param {string} path - маршрут
     * @param {View} view - вьюха которая должна быть показана по маршруту
     */
    route(path, view) {
        this.routes[path] = view;
        return this;
    }

    _onRoute(path) {
        path = path.replace('#', '');

        let view = this.routes[path];

        if (this.current) {
            this.current.hide();
        }

        if (view) {
            view.show();
            this.current = view;
        }

    }

    start() {

        window.addEventListener('hashchange', () => {
            this._onRoute(location.hash);
        });

        this._onRoute(location.hash);
    }


}