# Kawai Framework Documentation

## Introduction

Kawai is a comprehensive framework that provides a set of pre-built UI components and JavaScript functionalities to simplify the process of web development. With Kawai, developers can quickly create visually appealing and responsive web pages. This documentation serves as a guide for understanding and implementing the various features and functionalities offered by the Kawai Framework.

## Getting Started

To get started with Kawai, ensure that you have a basic understanding of HTML, CSS, and JavaScript. Familiarity with these technologies will help you make the most of the framework and enable you to create dynamic and interactive web applications.

## Components

Kawai offers a variety of components that can be utilized to build a robust and engaging user interface. Each component is designed to serve a specific purpose, providing developers with the flexibility to create unique and visually stunning web pages.

# HTML and CSS Documentation

The CSS documentation for the Kawai Framework provides detailed information on the styling and customization options available for the framework's components. This documentation is designed to help you understand how to apply custom styles to achieve the desired look and feel for your web applications.

## Configuration

### Main Configuration

The Kawai Framework offers several main configuration options to control the appearance and behavior of its components.

- `txt-lock`: Prevents text selection within block elements.
- `mobile-only`: A preset class for elements that should only be visible on mobile devices.
- `desktop-only`: A preset class for elements that should only be visible on desktop devices.

### UI Customization

Customizing the visual aspects of the Kawai components is crucial for achieving a unique and appealing design. The framework provides various CSS classes for this purpose:

- `uside`: Used to customize the sidebar appearance within the `block-o`.
- `txt-(1,2,3)`: Controls the text alignment, with options for left, center, and right alignment.
- `el-(1,2,3,4,5,6,7,8,9,0)`: Specifies the width of elements from 10% to 95%.
- Unique color classes: Custom color classes such as `mudiny`, `craily`, `rosely`, `oxely`, `finy`, `selty`, `darkly`, and `lovely-blue` for styling.

## Components
Main UI components

### Topbar-o

The `topbar-o` class is used to style the top navigation bar. This bar typically appears at the top of the page and contains important navigation links and branding elements. It has the following properties:

```html
<div class="topbar-o">
  <!-- Add your navigation links and branding elements here -->
</div>
```

### Bottombar-o

The `bottombar-o` class is used to style the bottom bar, which is typically positioned at the bottom of the page. This bar may contain links or actions relevant to the page's content. It has the following properties:

```html
<div class="bottombar-o">
  <!-- Add your content, links, or actions for the bottom bar here -->
</div>
```

### Block-bottom-tabs

The `block-bottom-tabs` class is used to style tabs within the bottom bar. These tabs are used to provide navigation or categorization of content within the bottom bar. It has the following properties:

```html
<div class="block-bottom-tabs">
  <div class="tab">Tab 1</div>
  <div class="tab">Tab 2</div>
  <!-- Add more tabs as needed -->
</div>
```

### Block-bottom-tabs-e

The `block-bottom-tabs-e` class styles individual tabs within the bottom bar. These tabs are meant to provide specific navigation or actions. It has the following properties:

```html
<div class="block-bottom-tabs-e">
  <!-- Add content and actions specific to this tab -->
</div>
```

### Sidebar-o

The `sidebar-o` class styles the sidebar located on the left side of the page. This sidebar typically contains navigation links and additional content. It has the following properties:

```html
<div class="sidebar-o">
  <!-- Add navigation links and content for the sidebar here -->
</div>
```

### Block-o

The `block-o` class provides a general styling template for block elements. It's often used as a container for various content or components. This class doesn't apply any specific styles but is useful for grouping content within a common container.

```html
<div class="block-o">
  <!-- Add your content or components within this block -->
</div>
```

### Tab-o

The `tab-o` class is used for styling tabs or tabbed content. It often works in conjunction with JavaScript to toggle the visibility of specific content when a tab is clicked. The class is set to `display: none` by default and should be used in combination with JavaScript functionality to show and hide tabs.

```html
<div class="tab-o" id="tab1">
  <!-- Content for Tab 1 -->
</div>
```

### Coll-lo

The `coll-lo` class is applied to elements within the framework to create content containers that are organized in a column layout. This class is useful for structuring content vertically.

```html
<div class="coll-lo">
  <!-- Content organized in a vertical column -->
</div>
```

### Block-card

The `block-card` class is used to create card-like containers for various types of content, such as informational blocks, cards, or panels. It provides a consistent styling for these elements.

```html
<div class="block-card">
  <!-- Card content goes here -->
</div>
```

### Block-form

The `block-form` class is applied to content containers that serve as forms or input sections. It provides a styling template for form elements, making them visually appealing and consistent.

```html
<div class="block-form">
  <!-- Form elements and inputs go here -->
</div>
```

### Block-input

The `block-input` class is used for styling form inputs, such as text fields or text areas. It adds rounded corners and padding, making the inputs visually consistent with the framework's design.

```html
<div class="block-input">
  <!-- Form input element goes here -->
</div>
```

### Block-button

The `block-button` class is used for styling buttons and clickable elements. It provides a consistent button design with a background color, text color, and hover effects.

```html
<div class="block-button">
  <!-- Button text or content -->
</div>
```

### Block-list

The `block-list` class is used for styling lists or lists of items. It provides a consistent design for displaying items in a list format.

```html
<div class="block-list">
  <!-- List items go here -->
</div>
```

### Block-scroll

The `block-scroll` class is applied to containers that should display scrollable content. It sets a maximum height for the container and provides custom scroll styling for a better user experience.

```html
<div class="block-scroll">
  <!-- Scrollable content goes here -->
</div>
```

### Block-text

The `block-text` class is used for styling text elements within the framework. It provides consistent typography and spacing for text content.

```html
<div class="block-text">
  <!-- Text content goes here -->
</div>
```

### Block-toggle

The `block-toggle` class is applied to elements that can be toggled on and off. It often works in conjunction with JavaScript to provide toggle functionality. The class is set to `width: 60px` and can be used for creating toggle switches.

```html
<div class="block-toggle"></div>
```

### Block-button-close-e

The `block-button-close-e` class is used for creating close buttons or elements within the framework. It provides a consistent design for closing or dismissing elements, such as modal dialogs.

```html
<div class="block-button-close-e">
  <!-- Close button content or icon -->
</div>
```

These descriptions and examples should give you a clear understanding of how to use each class in the Kawai Framework to style different types of elements and components within your web applications. You can apply these classes to your HTML code as needed to achieve the desired visual design and functionality.

## Conclusion

This CSS documentation provides insights into the styling options available for the Kawai Framework's components. By using the provided classes and styles, you can tailor the appearance of your web applications to meet your specific design requirements. For additional details and usage examples, refer to the relevant component sections within the documentation.

### JavaScript

The JavaScript section of the documentation will focus on the functionalities and interactions provided by the Kawai Framework. You will discover how to leverage the JavaScript functions to create dynamic and responsive user experiences. The documentation will cover the usage of various functions and their parameters, enabling you to incorporate advanced functionalities into your web applications.

## Event Listeners and Functions

### Toggle Sidebar
```javascript
function toggleSidebar()
```
- **Description:** This function toggles the visibility of the sidebar by adding and removing CSS classes. It's typically triggered when a button or element with the class `toggle-menu-block` is clicked.
- **Example:** 
```javascript
toggleSidebar();
```

### Popup Close
```javascript
function PopupClose()
```
- **Description:** This function closes any visible pop-up elements by setting their display property to 'none'. It's often used to dismiss modal dialogs.
- **Example:**
```javascript
PopupClose();
```

### Open Link
```javascript
function OpenLink(getlink)
```
- **Description:** This function opens a link in the same window/tab. Pass the URL as the `getlink` parameter to navigate to the specified page.
- **Example:**
```javascript
OpenLink('https://example.com');
```

### Open Popup
```javascript
function OpenPopup(getid)
```
- **Description:** This function displays a hidden pop-up element by changing its display property to 'flex'. Use the `getid` parameter to specify the ID of the pop-up element.
- **Example:**
```javascript
OpenPopup('test-modal-1');
```

### Open Tablo
```javascript
function OpenTablo(tablo)
```
- **Description:** This function is used to toggle the visibility of tabbed content. It checks the current display state of a tab and switches it from 'flex' to 'none' or vice versa.
- **Example:**
```javascript
OpenTablo('tab-1');
```

### Open Tab
```javascript
function OpenTab(gettab)
```
- **Description:** This function is used to display a specific tab while hiding others. It sets the `display` property to 'flex' for the specified tab and 'none' for the rest.
- **Example:**
```javascript
OpenTab('tab-1');
```

### Apply Dark Mode Styles
```javascript
function applyDarkModeStyles()
```
- **Description:** This function applies dark mode styles to various elements, changing background colors and text colors to create a dark-themed appearance.
- **Example:**
```javascript
applyDarkModeStyles();
```

### Enable Dark Mode
```javascript
function enableDarkMode()
```
- **Description:** This function enables dark mode by applying the dark mode styles and storing the mode in localStorage.
- **Example:**
```javascript
enableDarkMode();
```

### Enable Light Mode
```javascript
function enableLightMode()
```
- **Description:** This function enables light mode by resetting the styles to the default light mode and storing the mode in localStorage.
- **Example:**
```javascript
enableLightMode();
```

### Initialize Theme
```javascript
function initializeTheme()
```
- **Description:** This function initializes the theme (dark or light) based on the value stored in localStorage. It's typically called when the page loads.
- **Example:**
```javascript
initializeTheme();
```

### Toggle Theme
```javascript
function toggleTheme()
```
- **Description:** This function toggles between dark and light modes by checking the current mode in localStorage and applying the opposite mode.
- **Example:**
```javascript
toggleTheme();
```

## Conclusion

The Kawai Framework offers a comprehensive set of tools and resources for developers to create powerful and visually appealing web applications. By leveraging the components and functionalities provided by the framework, developers can streamline the development process and deliver engaging user experiences. With its intuitive design and extensive documentation, Kawai is an ideal choice for developers looking to build modern and responsive web applications.

For detailed explanations and code samples, refer to the respective sections on HTML, CSS, and JavaScript within the documentation.