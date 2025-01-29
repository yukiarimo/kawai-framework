/*
    COPYRIGHT BY YUKI ARIMO
    KAWAI FRAMEWORK
*/

const navbarLinks = document.querySelector('.top-tab-block');
const addClosers = document.querySelectorAll('.block-popup');
const modeElementList = '.block-text, p, a, ul, li, ol, h1, h2, h3, h4, h5, h6, .side-tab-block-e, .block-input, label, .block-list-e, .block-dropdown-tab';
const sidebar = document.getElementById('sidebar');
const blocko = document.querySelector('.block-o');
const sendMessageContainer = document.querySelector('.input-container');
const topbar = document.querySelector('.topbar-o');

// Toggle Sidebar
function toggleSidebar() {
    if (sidebar) {
        sidebar.classList.toggle('showside');
        sidebar.classList.toggle('hideside');
    }
    if (blocko) {
        blocko.classList.toggle('uside');
    }
    kawaiAutoScale();
};

// Close Popups
document.querySelectorAll('.block-button-close').forEach(btn => {
    if (btn.parentElement) {
        btn.parentElement.style.display = 'none';
    }
});

// Open Link
const OpenLink = link => window.open(link, '_self');

// Open Popup
const OpenPopup = id => document.getElementById(id).style.display = 'flex';

// Toggle Dropdown Tab
const OpenTablo = tablo => {
    document.querySelectorAll('.block-dropdown-tab-lo').forEach(el => {
        el.style.display = el.id === tablo && getComputedStyle(el).display !== 'flex' ? 'flex' : 'none';
    });
};

// Tab Selection
document.querySelectorAll(".side-tab-block-e").forEach(el => {
    el.addEventListener('click', () => {
        document.querySelectorAll(".side-tab-block-e").forEach(e => e.classList.remove('selected'));
        el.classList.add('selected');
    });
});

// Open Tab
const OpenTab = tab => {
    document.querySelectorAll('.tab-o').forEach(el => el.style.display = 'none');
    document.getElementById(tab).style.display = 'flex';
};

// Apply Dark Mode Styles
const applyDarkModeStyles = () => {
    if (document.body && topbar && sidebar) {
        const darkStyles = {
            'backgroundColor': 'rgb(30, 30, 30)',
            'color': 'white'
        };
        document.body.style.backgroundColor = darkStyles.backgroundColor;
        topbar.style.color = darkStyles.color;
        sidebar.style.backgroundColor = 'rgb(36, 38, 38)';

        document.querySelectorAll('.block-card, .block-dropdown-tab-lo, .modal-content, .side-tab-block-e').forEach(el => {
            if (el) {
                el.style.backgroundColor = 'rgb(36, 38, 38)';
            }
        });

        document.querySelectorAll('.block-chat').forEach(chat => {
            if (chat) {
                chat.style.background = '#1a1a1a';
            }
        });

        document.querySelectorAll(modeElementList).forEach(el => {
            if (el) {
                el.style.color = darkStyles.color;
            }
        });

        document.querySelectorAll('.block-input').forEach(input => {
            if (input) {
                input.style.backgroundColor = 'rgb(32, 35, 37)';
                input.style.color = darkStyles.color;
            }
        });

        const textInputMsg = document.getElementById('input_text');
        if (textInputMsg) {
            textInputMsg.style.background = 'rgb(32, 35, 37)';
            textInputMsg.style.color = darkStyles.color;
        }

        document.querySelectorAll('.block-icon').forEach(icon => {
            if (icon) {
                icon.style.filter = 'invert(100%)';
            }
        });
    }
};

// Enable Dark Mode
const enableDarkMode = () => {
    applyDarkModeStyles();
    localStorage.setItem('mode', 'dark');
};

// Enable Light Mode
const enableLightMode = () => {
    if (document.body && topbar && sidebar) {
        document.body.style.backgroundColor = '';
        topbar.style.color = '';
        sidebar.style.backgroundColor = '';
        document.querySelectorAll('.block-card, .block-dropdown-tab-lo, .modal-content, .side-tab-block-e').forEach(el => {
            if (el) {
                el.style.backgroundColor = '';
            }
        });

        document.querySelectorAll('.block-chat').forEach(chat => {
            if (chat) {
                chat.style.background = '';
            }
        });

        document.querySelectorAll(modeElementList).forEach(el => {
            if (el) {
                el.style.color = '';
            }
        });

        document.querySelectorAll('.block-input').forEach(input => {
            if (input) {
                input.style.backgroundColor = '';
                input.style.color = '';
            }
        });

        const textInputMsg = document.getElementById('input_text');
        if (textInputMsg) {
            textInputMsg.style.background = '';
            textInputMsg.style.color = '';
        }

        document.querySelectorAll('.block-icon').forEach(icon => {
            if (icon) {
                icon.style.filter = '';
            }
        });

        localStorage.setItem('mode', 'light');
    }
};

// Initialize Theme
const initializeTheme = () => {
    localStorage.getItem('mode') === 'dark' ? enableDarkMode() : enableLightMode();
};

// Toggle Theme
const toggleTheme = () => {
    localStorage.getItem('mode') === 'dark' ? enableLightMode() : enableDarkMode();
};

// Adjust Visible Height
const getVisibleHeight = () => {
    const msgContainer = document.getElementById('message-container');
    const inputWrapper = document.querySelector('.input-wrapper');
    if (msgContainer && inputWrapper && topbar) {
        msgContainer.style.height = `calc(100% - ${topbar.offsetHeight}px - ${inputWrapper.offsetHeight}px)`;
    }
};

// Auto Scale Function
const kawaiAutoScale = () => {
    if (topbar && sidebar && blocko) {
        const additionalMargin = 20;
        const sidebarWidth = sidebar.offsetWidth;
        blocko.style.marginTop = `calc(${topbar.offsetHeight}px + ${additionalMargin}px)`;
        blocko.style.width = `calc(100% - ${sidebarWidth}px)`;
        blocko.style.marginLeft = `${sidebarWidth}px`;
        topbar.style.width = `calc(100% - ${sidebarWidth}px)`;
        topbar.style.marginLeft = `${sidebarWidth}px`;
        if (sendMessageContainer) {
            sendMessageContainer.style.width = `calc(100% - ${sidebarWidth}px)`;
            sendMessageContainer.style.marginLeft = `${sidebarWidth}px`;
        }
        if (sidebar.classList.contains('showside')) sidebar.style.display = 'none';
        getVisibleHeight();
    }
};

// Event Listeners
window.addEventListener('load', kawaiAutoScale);
window.addEventListener('resize', kawaiAutoScale);
setTimeout(kawaiAutoScale, 10);

// kawai-extensions
class KawaiBundle {
    constructor(config) {
        this.id = KawaiBundle.generateId();
        this.name = config.name || 'Unnamed Bundle';
        this.version = config.version || '1.0.0';
        this.author = config.author || 'Anonymous';
        this.icon = config.icon || null;
        this.script = config.script || '';
        this.assets = config.assets || {};
        this.active = false;
        this._scriptElement = null;
    }

    static generateId() {
        return 'kb_' + Math.random().toString(36).substring(2, 9);
    }

    async activate() {
        if (this.active) return;
        
        // Process script and replace asset references
        let processedScript = this.script;
        for (const [assetId, assetData] of Object.entries(this.assets)) {
            const pattern = new RegExp(`&asset:${assetId}&`, 'g');
            processedScript = processedScript.replace(pattern, assetData);
        }

        // Create script element
        this._scriptElement = document.createElement('script');
        this._scriptElement.id = this.id;
        this._scriptElement.textContent = `
            (function() {
                const bundle = ${JSON.stringify({
                    id: this.id,
                    name: this.name,
                    version: this.version,
                    author: this.author
                })};
                ${processedScript}
            })();
        `;

        document.head.appendChild(this._scriptElement);
        this.active = true;
    }

    deactivate() {
        if (!this.active) return;
        if (this._scriptElement) {
            this._scriptElement.remove();
            this._scriptElement = null;
        }
        this.active = false;
    }

    toBlob() {
        const bundleData = {
            name: this.name,
            version: this.version,
            author: this.author,
            icon: this.icon,
            script: this.script,
            assets: this.assets
        };
        return new Blob([JSON.stringify(bundleData)], { type: 'application/json' });
    }

    static async fromBlob(blob) {
        const text = await blob.text();
        const data = JSON.parse(text);
        return new KawaiBundle(data);
    }
}

class KawaiExtensions {
    constructor() {
        this.bundles = new Map();
    }

    async createBundle(config) {
        const bundle = new KawaiBundle(config);
        this.bundles.set(bundle.id, bundle);
        return bundle;
    }

    async loadBundleFile(file) {
        try {
            const bundle = await KawaiBundle.fromBlob(file);
            this.bundles.set(bundle.id, bundle);
            return bundle;
        } catch (error) {
            console.error('Failed to load bundle:', error);
            return null;
        }
    }

    activateBundle(id) {
        const bundle = this.bundles.get(id);
        if (bundle) {
            return bundle.activate();
        }
        return false;
    }

    deactivateBundle(id) {
        const bundle = this.bundles.get(id);
        if (bundle) {
            bundle.deactivate();
            return true;
        }
        return false;
    }

    getBundles() {
        return Array.from(this.bundles.values());
    }
}