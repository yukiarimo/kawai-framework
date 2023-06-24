var WelcomeMessage = `Welcome to the world of Kawai website builders! With Kawai, building a website has never been easier. This website builder offers a user-friendly interface, allowing you to create a professional website without any prior coding knowledge. Whether you're starting a new business or need a personal website, Kawai makes it easy to get online and start sharing your ideas with the world.`

var Popularity1 = `Kawai is one of the most popular website builders on the market, and for good reason. With its intuitive interface and powerful features, Kawai makes it easy to create a stunning website that reflects your personality, style and business.`
var Popularity2 = `The builder has been designed with user experience in mind, ensuring that even beginners can easily build and launch a website in no time. With its growing popularity, Kawai has also developed a strong and supportive community of users, who can help answer questions and provide advice and tips.`

var Benefits1 = `The benefits of using Kawai website builder are numerous. To start, it is incredibly easy to use, allowing you to focus on the creative aspects of your website rather than worrying about technical details. Additionally, Kawai provides a wide range of customizable templates and themes to choose from, making it easy to create a unique and professional website that stands out.`
var Benefits2 = `The builder also offers a variety of powerful e-commerce tools, allowing you to easily sell products and services online. Finally, Kawai is fully responsive, ensuring that your website looks great on all devices, including desktop computers, laptops, tablets, and smartphones.`

export const SiteModel = [{
    "sidebar": false,
    "sidebarConfig": [{
        "logo": "Test",
        "links": [{
            "Main": "#",
            "To-do": "#",
            "Settings": "#"
        }]
    }],
    "topbar": true,
    "topbarConfig": [{
        "logo": "Test",
        "links": [{
            "Home": "#",
            "Search": "#",
            "Profile": "#",
            "About": "#",
            "Contact": "#"
        }]
    }],
    "blocks": [{
        "Render": ["1"]
    }]
}]

// Aviliable code: ['Block-l', 'HTML']
export const SiteBlocks = [{
    "1": [{
        "col": [{
            "name": "block-l",
            "config": ["block-text la", "block-text lb"],
            "content": ["Hello from Kawai", `${WelcomeMessage}`]
        }]
    }],
    "2": [{
        "col": [{
            "name": "block-card",
            "config": ["block-text lb", "block-text lc"],
            "content": [`Popularity`, `${Popularity1}`]
        }, {
            "name": "block-card",
            "config": ["block-text lb", "block-text lc"],
            "content": [`Design`, `${Popularity2}`]
        }]
    }],
    "3": [{
        "col": [{
            "name": "block-card",
            "config": ["block-text lb", "block-text lc"],
            "content": [`Benefits`, `${Benefits1}`]
        }, {
            "name": "block-card",
            "config": ["block-text lb", "block-text lc"],
            "content": [`Flexibility`, `${Benefits2}`]
        }]
    }]
}]

/*
    COPYRIGHT BY YUKI ARIMO
    KAWAI FRAMEWORK
*/