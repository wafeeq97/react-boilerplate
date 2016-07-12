var CONFIG = {

    header: {
        logo: {
            src: "/resources/mosiddi.png",
            height: 100
        },
        menu: [
            {
                text: "Home",
                route: ""
            },
            {
                text: "About",
                route: "about"
            },
            {
                text: "Contact",
                route: "contact"
            }
        ]
    },

    home: {
        header: "Hello World!",
        content: "This is my World!"
    },

    about: {
        header: "About Me!",
        content: "I'm Awesome!!"
    },

    contact: {
        header: "Contacts",
        content: "I'll have the butter biscuits.",
        contacts: [
            {
                name: "Mohammed Siddeeq",
                phone: "317-828-8931"
            },
            {
                name: "Wafeeq Mujahid",
                phone: "404-455-6676"
            },
            {
                name: "Thakir Berhane",
                phone: "317-828-8911"
            },
            {
                name: "Qadree Mujahid",
                phone: "404-360-4154"
            }
        ]
    }
};

module.exports = CONFIG;
