# Model
## Schema:
> o <-> lo -> l <-> block -> block-e

### Elements:
> topbar-o
    - text-block
    - toggle-block (for mobile)
    - top-tab-block > top-tab-block-e

> sidebar-o
    - text-block
    - side-tab-block > side-tab-block-e

> bottombar-o
    - block-bottom-tabs

> block-o (only one for main)
    - collector-lo
        - block-l (.el(1-9))
            - text: l(a,b,c,de,f)
        - other elems

> block-form
    - block-input
    - block-button

> block-scroll (for inside conteiner)
> block-list > block-list-e
> [block-card, block-popup > block-button-close-e] => similar to block-l

-------------------------------------------------------------------------------------------------------
### Functions:
> OpenLink('link')

> OpenPopup('id')
> OpenTab('id') 

> ThemeSwitch()
> SideBarSwitch('id)

-------------------------------------------------------------------------------------------------------
Stylishing:
> logo (for logo text)
> tab-o (indentify tab)
> uside (block-o only for sidebar)
> tab-o-default (set default one tab only)

> txt-lock (block on block text select)
> txt-(1,2,3) (align for left, center, and right text)

> div size el-(1,2,3,4,5,6,7,8,9,0) from 10% to 95%
> Colors unique: mudiny, craily, rosely, oxely, finy, selty, darkly, lovely-blue=selected

> mobile-only (preset)
> desktop-only (preset)