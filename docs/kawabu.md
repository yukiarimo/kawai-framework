# Kawabu
> World best website builder based on Kawai WebUI

Kawabu is a versatile web development tool that simplifies the creation of web pages by managing the structure and content in a structured manner. This documentation provides a detailed explanation of how to use Kawabu to build web pages.

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
- [Creating Blocks](#creating-blocks)
- [Adding Elements](#adding-elements)
- [Rendering Your Web Page](#rendering-your-web-page)
- [Example Usage](#example-usage)

## Introduction
Kawabu is a JavaScript class that allows you to create web pages using a structured approach. It enables you to define blocks and elements within those blocks, making it easy to manage and organize the content of your web page.

## Getting Started
To start using Kawabu, you'll need to create an instance of the `Kawabu` class:

```
const kawabu = new Kawabu();
```

This initializes the Kawabu builder, ready for you to create your web page structure.

## Creating Blocks
In Kawabu, blocks are structural containers that can hold various elements. You can create a block using the `create` method:

```
kawabu.create("block-name", "block-id");
```

- `"block-name"` is a string representing the name of the block.
- `"block-id"` is a unique identifier for the block.

## Adding Elements
Once you've created a block, you can add elements to it using the `put` method:

```
kawabu.put("block-id", "element-id", "element-type", "element-content");
```

- `"block-id"` is the unique identifier of the block to which the element belongs.
- `"element-id"` is a unique identifier for the element within the block.
- `"element-type"` specifies the type of the element, e.g., "block-text lb" or "block-button".
- `"element-content"` is the content you want to display within the element.

## Rendering Your Web Page
To generate the HTML for your web page, use the `render` method:

```
const renderedHtml = kawabu.render();
```

The `render` method generates structured HTML based on the blocks and elements you've defined.

## Example Usage
Here's an example of how to use Kawabu to create a simple web page:

```
const kawabu = new Kawabu();

kawabu.create("block-card", "card1");
kawabu.put("card1", "text1", "block-text lb", "User experience");
kawabu.put("card1", "text2", "block-text lc", "The playful and cute elements of a kawaii website can make the user experience more enjoyable and memorable, improving the overall perception of the site.");
kawabu.put("card1", "button1", "block-button", "How it works");

kawabu.create("block-card", "card2");
kawabu.put("card2", "text3", "block-text lb", "next text");
kawabu.put("card2", "button2", "block-button", "Test");

document.getElementsByTagName('body')[0].innerHTML = kawabu.render();
```

This code creates a web page with two "block-card" blocks, each containing various elements. The resulting HTML is structured according to the defined blocks and elements.