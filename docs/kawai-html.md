# Kawai Framework HTML Documentation
## Components
Kawai comes with a variety of pre-built UI components like topbar, block, collector, and more that can be used to create your projects and make it easy to quickly build and design your web pages.
Each component should be listed with a short description and any relevant information such as dependencies, configurations, and usage examples.

### Topbar-o
The top bar is a header that appears at the top of the page and contains the logo or title, navigation links, and a toggle menu button. It can be added to your page using the following HTML code:

The topbar-o component creates a top navigation bar with a header, tabs, and a toggle menu button.
```
<div class="topbar-o">
  <div class="la text-block">Kawai</div>
  <div class="top-tab-block">
    <div class="top-tab-block-e text-block lc">Home</div>
    <div class="top-tab-block-e text-block lc">Docs</div>
    <div class="top-tab-block-e text-block lc">Contact</div>
  </div>
  <div class="toggle-menu-block"></div>
</div>
```

### Block-o (Main Block)
The block-o is the main block that serves as a container for your content.
```
<div class="block-o">
  <!-- All website exept sidebar and popups -->
</div>
```

### Block-l
The Block component is a simple container for your content. You can wrap any content inside the Block component, including text, images, or other components.
```
<div class="block-l">
  <div class="text-block la">Hi from Kawai</div>
    <div class="text-block lb">
      Kawai - is the world famous framework for building anything you want in one sec!
    </div>
</div> 
```

### Block-collector
The coll-lo component collects and organizes the content into a layout.
```
<div class="coll-lo">
  <div class="block-l el-9 shadow">
    <!-- Your content here -->
  </div>
</div>
```

### Card
The Card component is a pre-built UI element that you can use to display content in a visually appealing way. You can use cards to show images, text, and other elements in a compact, organized manner.

### List
The List component is used for displaying a list of items, such as text or images. It allows you to present information in a clean and organized way, and can be customized to match the look and feel of your project.

### Pop-Up
The Pop-Up component is a UI element that allows you to display additional content or information on top of your existing content. It is often used for modal windows, notifications, or other types of messages that need to be displayed temporarily.

### Sidebar
The Sidebar component is a pre-built UI element that can be used for navigation, or for displaying additional information. It is typically placed on the side of your screen and can be toggled on or off as needed.

### Forms
The Forms component is a pre-built UI element that allows you to collect information from users. You can use forms to create input fields, dropdown menus, radio buttons, and other types of form elements that can be used to gather information from users.

-------------------------------------

### Navbar:
A navigation bar is a crucial component of any website as it provides easy navigation to different pages or sections of a website. It typically displays a list of links in a horizontal or vertical format, allowing users to quickly find and access the information they need. A well-designed navbar should be simple, intuitive, and responsive, adapting to different screen sizes and devices. It should also provide visual cues, such as active or hover states, to indicate the current location or selection.

### Carousel:
A carousel is a component for displaying a slideshow of images or content. It allows users to view multiple pieces of content in a single container, where only one slide is visible at a time. Carousels typically include navigation controls, such as arrows or indicators, to allow users to flip through the slides. They are often used to showcase products, promotions, or featured content. To ensure a good user experience, it's important to design a carousel that is fast, responsive, and accessible, and that provides clear visual cues to indicate the current slide and the total number of slides.

### Modal:
A modal is a pop-up window that appears on top of the main content, used for displaying additional information or for capturing user input. Modals are typically used for tasks such as creating or editing an item, displaying a message or confirmation, or requesting additional information from the user. A well-designed modal should be easy to use, accessible, and should not interfere with the main content of the page. It should also include clear calls to action and should be dismissible by the user.

### Table:
A table is a component for displaying data in a tabular format. It allows users to view large amounts of data in an organized and structured way, making it easier to compare and analyze the information. Tables typically include columns and rows, with each cell containing a specific piece of data. To ensure a good user experience, it's important to design a table that is responsive, accessible, and easy to read and understand. This may include using clear headings, color coding, and appropriate font sizes.

### Tabs:
Tabs are a component for displaying multiple sections of content in a single container, where only one section is visible at a time. Tabs are typically used to display related content in a compact and organized way, allowing users to quickly switch between different sections. They can be arranged horizontally or vertically, and should include clear labels to indicate the content of each tab. To ensure a good user experience, it's important to design tabs that are intuitive, accessible, and responsive, adapting to different screen sizes and devices.

### Accordion:
An accordion is a component for displaying multiple sections of content in a single container, where only one section is visible at a time, and the rest can be expanded or contracted. Accordions are similar to tabs, but allow for a more compact display of content. They are often used to display related information, such as FAQs or product descriptions. To ensure a good user experience, it's important to design an accordion that is easy to use, accessible, and responsive, adapting to different screen sizes and devices. It should also include clear labels and visual cues to indicate the state of each section, such as expanded or contracted.

### Progress bar:
A progress bar is a component for indicating the progress of a task or an operation. It provides a visual representation of how much of the task has been completed, and how much remains. Progress bars are often used to show the status of downloads, installations, or other time-consuming tasks. To ensure a good user experience, it's important to design.

### Tooltip: 
A tooltip is a small information box that displays additional information about an element when the user hovers over it with the cursor. Tooltips are commonly used to provide clarification or additional information about an element, such as a button or a link. They can also be used to display short messages or to provide context for the user. Tooltips are usually positioned near the element they are associated with and disappear when the user moves the cursor away.

### Alert: 
An alert is a component that displays a message to the user in a prominent way. Alerts are typically used to provide information about a specific event or condition, such as an error message, a success message, or a warning. Alerts can be displayed in various forms, such as a pop-up window, a banner, or a modal, and they can include a message, an icon, and a set of actions or buttons. The purpose of alerts is to draw the user's attention to important information and to provide guidance on how to proceed.

### Badge: 
A badge is a small component that displays a numeric value or status indicator. Badges are often used to show the number of items in a list or to highlight important information. For example, a badge can be used to show the number of unread messages in an inbox, the number of items in a shopping cart, or to indicate the status of an item, such as "new" or "featured." Badges are usually displayed in a prominent place, such as next to the item they are associated with, and they are designed to be eye-catching and easily recognizable.

### Pagination: 
Pagination is a component for navigating through pages of content. Pagination is used to break up large amounts of content into smaller, more manageable sections, making it easier for users to navigate and find what they're looking for. Pagination typically consists of a series of page numbers, or buttons for navigating to the next or previous page, and can also include options for jumping to specific pages or for displaying a specific number of items per page. The purpose of pagination is to allow the user to easily move through a large amount of content, and to make it easier to find what they're looking for.

### Dropdown: 
A dropdown is a component for displaying a list of options that can be selected. Dropdowns are typically used for navigation or for filtering content. They consist of a button or a link that, when clicked, displays a list of options. The user can then select one of the options by clicking on it. Dropdowns can be used to allow the user to choose from a set of options, such as a list of categories, a list of countries, or a list of language options. They can also be used to filter content, such as search results, based on specific criteria.

## Simple helpful website model scheme:
> o <-> lo -> l <-> block -> block-e

### Elements:

- sidebar-o (before block-o)
    - text-block
    - side-tab-block > side-tab-block-e

- block-o
  - < all blocks here>

- topbar-o
    - text-block
    - toggle-menu-block (for mobile)
    - top-tab-block > top-tab-block-e

- bottombar-o
    - block-bottom-tabs

- block-o (only one for main)
    - coll-lo
        - block-l (.el(1-9))
            - text: l(a,b,c,de,f)
        - other elems

- block-form
    - block-input
    - block-button

- Inneriable
  - block-scroll (for inside conteiner)
  - block-list > block-list-e
  - [block-card, block-popup > block-button-close-e] => similar to block-l

- Outline:
  - block-popup