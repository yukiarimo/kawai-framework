# Kawai website pre-build renderer
It is all about generate complete HTML

## Function kawaiConstructorBlocks()
> This function generates the block elements of the website.

### Input
- The SiteBlocks array imported from kawai-config.js that contains the block configuration.

### Output
- A string of HTML that represents the block elements of the website.

### Implementation Details

- An empty string addBlock is initialized.
- The function loops through each property in SiteBlocks[0] and assigns the value to blocks.
- For each property, a string addBlockInside is initialized as an empty string.
- The function then loops through the blockName array and assigns the value to blockInfo.
- An empty string insideDoubleFlorAddElement is initialized.
- The function loops through the blockInfo.config array and concatenates the value to insideDoubleFlorAddElement.
- The inner block element is created by concatenating insideDoubleFlorAddElement with a div element.
- The addBlockInside is updated by concatenating the inner block element.
- The addBlock is updated by concatenating the outer block element with addBlockInside.
- The addBlock is returned as the output.

## Function kawaiConstructorSidebar(data)
> This function generates the sidebar elements of the website.

### Input
- The sidebarSetup object imported from kawai-config.js that contains the sidebar configuration.

### Output
- A string of HTML that represents the sidebar elements of the website.

### Implementation Details
- An empty string createSidebarTabs is initialized.
- The function loops through each property in sidebarSetup.links[0] and creates a string with a div element.
- The createSidebarTabs is updated by concatenating the string with the div element.
- The sidebar element is created by concatenating createSidebarTabs with a div element.
- The createSidebar is returned as the output.

## Function kawaiConstructorTopbar(data)
> This function generates the topbar elements of the website.

### Input
- The topbarSetup object imported from kawai-config.js that contains the topbar configuration.

### Output
- A string of HTML that represents the topbar elements of the website.

### Implementation Details
- An empty string createTopTabs is initialized.
- The function loops through each property in topbarSetup.links[0] and creates a string with a div element.
- The createTopTabs is updated by concatenating the string with the div element.
- The topbar element is created by concatenating createTopTabs with a div element.
- The createTopbar is returned as the output.

## Function kawaiConstructorBlocko()
> This function function is used to construct the main block of the website. 

It starts by defining a variable addSideClassAccept and sets it to an empty string. If the value of sidebar is true, the addSideClassAccept variable is set to the string ' uside'. This variable is used to add a class to the main block to indicate whether or not the sidebar should be displayed.

Next, the function creates the topbar and main content elements using the kawaiConstructorTopbar() and kawaiConstructorBlocks() functions, respectively. Finally, the function returns a string of HTML that combines the topbar, main content, and a class that indicates whether or not the sidebar should be displayed.

```
var createTopbarElement = kawaiConstructorTopbar();
var createBlockElements = kawaiConstructorBlocks();
var createBlocko = `
  <div class="block-o${addSideClassAccept}">
    ${createTopbarElement}
    ${createBlockElements}
  </div>
  `
return createBlocko
```

### Input
- The sidebar and topbar variables imported from kawai-config.js.

### Output
- A string of HTML that represents the block elements and top

## Function kawaiCompiler()
> The kawaiCompiler() function is used to compile the website into a single HTML string.

It starts by defining a variable compileKawaiElements and sets it to the result of concatenating the createSidebar and createBlocko variables. The createSidebar and createBlocko variables are previously defined as the results of calling the kawaiConstructorSidebar() and kawaiConstructorBlocko() functions, respectively. Finally, the function returns the compileKawaiElements variable, which is the complete HTML string for the website.

```
var compileKawaiElements = createSidebar + createBlocko;

return compileKawaiElements
```

## Adding the Website to the Document Body
> The final step in the code is to add the compiled website to the body of the HTML document.

```
document.getElementsByTagName('body')[0].innerHTML = kawaiCompile;
```

This line of code uses JavaScript's getElementsByTagName() method to select the <body> element of the HTML document, and then sets its innerHTML property to the value of the kawaiCompile variable, which is the result of calling the kawaiCompiler() function. This will replace the contents of the body with the compiled website.