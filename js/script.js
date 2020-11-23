const myApp = new Vue({
    el: '#root',
    data: {
        myArr: [{
                src: "img/avatar_1.jpg",
                name: "Marco"
            },
            {
                src: "img/avatar_2.jpg",
                name: "Gabriele"
            },
            {
                src: "img/avatar_3.jpg",
                name: "Matteo"
            },
            {
                src: "img/avatar_6.jpg",
                name: "Jessico Calcetto"
            }
        ],
        userIndex: 0,
        isActive: false
    },
    methods: {
        changeContact: function(index) {
            this.userIndex = index;
            this.isActive = true
        },
    }
})