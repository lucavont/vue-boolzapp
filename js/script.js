let date = new Date();
let currentDate = date.toLocaleDateString() + ' ' + date.toLocaleTimeString();

const myApp = new Vue({
    el: '#root',
    data: {
        loggedUser: {
            src: 'img/avatar_5.jpg',
            name: 'Luca Cavretti'
        },
        myArr: [{
                src: "img/avatar_1.jpg",
                name: "Marco",
                lastSeen: date.toLocaleTimeString(),
                chat: [{
                        type: "sent",
                        sentTime: currentDate,
                        text: "Ciao come stai??"
                    },
                    {
                        type: "received",
                        sentTime: currentDate,
                        text: "Io tutto bene e tu?"
                    }
                ]
            },
            {
                src: "img/avatar_2.jpg",
                name: "Gabriele",
                lastSeen: date.toLocaleTimeString(),
                chat: [{
                        type: "sent",
                        sentTime: currentDate,
                        text: "Ciao come stai??"
                    },
                    {
                        type: "received",
                        sentTime: currentDate,
                        text: "Io tutto bene e tu?"
                    }
                ]
            },
            {
                src: "img/avatar_3.jpg",
                name: "Matteo",
                lastSeen: date.toLocaleTimeString(),
                chat: [{
                        type: "sent",
                        sentTime: currentDate,
                        text: "Ciao come stai??"
                    },
                    {
                        type: "received",
                        sentTime: currentDate,
                        text: "Io tutto bene e tu?"
                    }
                ]
            },
            {
                src: "img/avatar_6.jpg",
                name: "Jessico Calcetto",
                lastSeen: date.toLocaleTimeString(),
                chat: [{
                        type: "sent",
                        sentTime: currentDate,
                        text: "Ciao come stai??"
                    },
                    {
                        type: "received",
                        sentTime: currentDate,
                        text: "Io tutto bene e tu?"
                    }
                ]
            }
        ],
        userIndex: 0
    },
    methods: {
        changeContact: function(index) {
            this.userIndex = index;
            this.isActive = true
        },
    }
})