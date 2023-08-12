# Introduction to Kawai Scripting
Kawai scripting builders are tools that help developers quickly build and implement custom websites using pre-made components. This type of builder allows developers to focus on the custom parts of a website, while using pre-made components for elements like headers, footers, and sidebars.

## Benefits of Kawai Scripting Builders

- Speed: Kawai scripting builders allow developers to save time by providing pre-made components that can be easily integrated into a website. This eliminates the need for developers to create these components from scratch.
- Ease of use: Kawai scripting builders are designed to be easy to use, even for developers who are new to web development. The pre-made components and simple interface make it easy for developers to build custom websites quickly and efficiently.
- Consistency: Kawai scripting builders help ensure that websites are consistent in terms of design and functionality. This makes it easy for developers to maintain and update a website over time, without having to constantly recreate components.

## How Kawai Scripting Builders Work
Kawai scripting builders typically use a simple, drag-and-drop interface that allows developers to add pre-made components to a website. The builders also provide a variety of customization options, allowing developers to add their own customizations to the pre-made components. Once a website has been built using a Kawai scripting builder, the code can be exported and used on a live website.

## Conclusion
Kawai scripting builders are a powerful tool for web developers looking to save time and build custom websites quickly and efficiently. With pre-made components and a simple, intuitive interface, Kawai scripting builders make it easy for developers to build and maintain custom websites.


# Configuring Site Blocks JSON in Kawai Scripting
Once you've set up the JSON configuration for your site, you'll need to configure the blocks that make up the body of your site. To do this, you'll use the SiteBlocks array, which should contain objects representing each block that you want to include on your site.

## Site Blocks
The Site Blocks is an array of objects, where each object represents a page of your site. The structure of each object is as follows:

```
"<block-id>": [{
    "col": [{
        "name": "<block-type>",
        "config": ["<block-config-1>", "<block-config-2>"...],
        "content": ["<block-content-1>", "<block-content-2>"...]
    },
    ...
    ]
}]
```

### Where:

- <block-id>: is the unique identifier for each block. You will reference this ID in the Site Model JSON to render the block on your site.
- <block-type>: is the type of block you want to render, for example block-l.
- <block-config-n>: is an array of configuration options for the block. It can be used to define the styling and behavior of the block.
- <block-content-n>: is an array of content that you want to render in the block.

### Parameters in the SiteBlocks JSON:

- 1 and 2 are the IDs of the site blocks.
- col is an array of columns within a block.
- name is the name of the block type, in this case it is block-l.
- config is an array of two elements that describe the configuration of the block.
- content is an array of two elements that hold the content of the block.

> Note: The SiteBlocks JSON describes the structure and content of individual blocks that can be rendered on a website using Kawai Framework's scripting feature. The structure of each block is defined using the col, name, config, and content parameters.

## Example
Here is an example of how you can use Site Blocks to render a simple website:

```
export const SiteBlocks = [{
    "1": [{
        "col": [{
            "name": "block-l",
            "config": ["block-text", "block-text"],
            "content": ["Hello world", "Welcome to roundstep"]
        }]
    }],
    "2": [{
        "col": [{
            "name": "block-l",
            "config": ["block-text", "block-text"],
            "content": ["Pricing", "Free"]
        }, {
            "name": "block-l",
            "config": ["block-text", "block-text"],
            "content": ["Why kawai?", "It is the best"]
        }]
    }]
}]
```

## Conslusion
With this configuration, you can define a site with two blocks. The first block will render the text "Hello world" and "Welcome to roundstep" in a single column using the block-l type. The second block will render the text "Pricing" and "Free" in the first column and the text "Why kawai?" and "It is the best" in the second column.

# Setting Up the JSON Configuration
To use Kawai Scripting, you'll first need to set up a JSON configuration file that describes your site. The configuration file should be an array of objects, with each object representing a single page on your site. 

## Site Model JSON in Kawai Scripting
The Site Model JSON is a key part of the Kawai Scripting feature. It is used to define the layout, navigation, and content of your website.

### Structure
The Site Model JSON consists of several top-level properties:

- sidebar: A boolean value that determines whether the website should include a sidebar or not.
- sidebarConfig: An array of objects that contains the configuration for the sidebar, including the logo and links.
- topbar: A boolean value that determines whether the website should include a topbar or not.
- topbarConfig: An array of objects that contains the configuration for the topbar, including the logo and links.
- blocks: An array of objects that determines which site blocks should be rendered and in what order.

### Configuration Details
Here's a closer look at each of the configuration properties in the Site Model JSON:

#### Sidebar
The sidebar property is a boolean value that determines whether the website should include a sidebar or not. If sidebar is set to true, the sidebarConfig property must also be specified.

#### Sidebar Config
The sidebarConfig property is an array of objects that contain the configuration for the sidebar. The objects in the array should contain the following properties:

- logo: The text or image to use as the logo for the sidebar.
- links: An array of objects that contains the links to be displayed in the sidebar. Each object should contain the name of the link as the key and the URL as the value.

#### Topbar
The topbar property is a boolean value that determines whether the website should include a topbar or not. If topbar is set to true, the topbarConfig property must also be specified.

#### Topbar Config
The topbarConfig property is an array of objects that contain the configuration for the topbar. The objects in the array should contain the following properties:

- logo: The text or image to use as the logo for the topbar.
- links: An array of objects that contains the links to be displayed in the topbar. Each object should contain the name of the link as the key and the URL as the value.

#### Blocks
The blocks property is an array of objects that determines which site blocks should be rendered and in what order. Each object in the array should contain the following properties:

- Render: An array of strings that specify the IDs of the site blocks to be rendered.

## Example
Here's an example of a Site Model JSON:

```
export const SiteModel = [{
    "sidebar": true,
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
        "Render": ["1", "2"]
    }]
}]
```

## Summary:
Kawai Scripting is a powerful, fast, and flexible tool for generating websites. With its intuitive JSON description, dynamic content generation, and built-in components, it provides a complete solution for creating and maintaining a website.