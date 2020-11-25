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
                ],
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
        userIndex: 0,
        findInput: "",
        txtMessage: ""
    },
    methods: {
        changeContact: function(index) {
            this.userIndex = index;
            this.isActive = true
        },
        submit: function() {
            this.myArr[this.userIndex].chat.push({
                type: "sent",
                sentTime: currentDate,
                text: this.txtMessage
            })
            setTimeout(this.possibleAnswers, 2000);
            this.txtMessage = ""
        },
        possibleAnswers: function() {
            const randomAnswers = ["Ok", "Ho capito", "Stammi bene!", "Ciao!"];
            const randomIndex = Math.floor(Math.random() * 4);
            this.myArr[this.userIndex].chat.push({
                type: "received",
                sentTime: currentDate,
                text: randomAnswers[randomIndex]
            })
        },
    },
    computed: {
        filterUsers() {
            return this.myArr.filter(contact => {
                return contact.name.toLowerCase().includes(this.findInput.toLowerCase());
            });
        }
    }
})