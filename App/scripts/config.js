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
            }
        ]
    },
    home: {
        header: "Hello World!",
        content: "This is Mo's World!"
    },
    about: {
        header: "About Me!",
        content: "I'm Awesome!!"
    }
};

module.exports = CONFIG;
