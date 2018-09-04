var eventBus = new Vue();
Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
});

Vue.component('register-page', {

    template: '\n<div>\n    \n</div>\n\n',
    data: function data() {
        return {
            username: '',
            password: ''
        };
    }

});
var app = new Vue({
    el: '#app',
    data: {
        groceryList: [{ id: 0, text: 'Vegetables' }, { id: 1, text: 'Cheese' }, { id: 2, text: 'Whatever else humans are supposed to eat' }]
    }
});
