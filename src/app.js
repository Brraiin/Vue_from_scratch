import Vue from "vue";
import Accordion from './components/Accordion';
import List from './components/List';

// var app = new Vue({
new Vue({
    el: "#app",

    components: {
        Accordion,
        List,
    },

    data: {
        title: "My title",
        menu: "My title again",
        item: "",
        items: ['item1', 'item2'],

        options: [
            {text: 'option1', checked: true},
            {text: 'option2', checked: true},
            {text: 'option3', checked: false},
        ],
        hidden: false,

        price: 100,

        movies: [
            { id: 1, title: "Title1", descritpion: 'Description for tab 1.'},
            { id: 2, title: "Title2", descritpion: 'Description for tab 2.'},
            { id: 3, title: "Title3", descritpion: 'Description for tab 3.'},
        ],
    },

    computed: {
        tax: function () {
            return this.price *0.1;
        },
        taxFormatted: function () {
            return this.tax + "$";
        },
        total: function () {
            return parseInt(this.price) + this.tax;
        },
        totalFormatted: function() {
            return this.total + "$";
        }
    },

    methods: {
        addItem: function(item){
            this.items.push(item)
        },
        moneyFormatted: function (price) {
            return price + "$";
        },
    }
})