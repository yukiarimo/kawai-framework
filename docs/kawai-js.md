# Kawai Framework JS Documentation
This script provides functionality for a UI interface, including a sidebar toggle, popup modals, and dark mode support.

## Functions

#### SideBarSwitch
```
SideBarSwitch("id-of-sidebar")
```
This function toggles the sidebar on and off.

Or, this function sets the local storage value for sideid to sidebar and hides the sidebar element by setting its style to "display: none". It also removes the uside class from the .block-o element.

#### PopupClose
This function closes open popups using automatic open popup detection

#### OpenLink
This function opens a the specified link URL.

#### OpenPopup
This function opens a popup with the specified getid.

#### OpenTablo
This function toggles the display of the specified tablo element.

#### OpenTab
This function opens a tab with the specified gettab by setting its display style to "flex".

#### DarkEnabler
This function sets styles for various elements to enable dark mode, including the background color, text color, and sidebar style.

## Variables and -processes
- getsideid is a string that holds the value of the sidebar id.
- checkSide is a variable that checks the value of the side in local storage.
- toggleButton is a reference to the toggle menu button element.
- navbarLinks is a reference to the top navigation bar links element.
- addclosers is a reference to the popup elements.
- If checkSide is equal to 1, the SideDisabler function is called.
- checkMode is a variable that checks the value of the mode in local storage.
- If checkMode is equal to 1, the DarkEnabler function is called.

## Conclusion
This script provides essential functionality for a UI interface, such as toggle options and modal windows. The functions can be easily modified and added to based on the needs of the specific project.