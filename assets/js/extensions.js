/*
    COPYRIGHT BY YUKI ARIMO
    KAWAI FRAMEWORK
*/

class KawaiBundler {
    constructor() {
        this.bundleData = {
            type: null,
            assets: [],
            script: null,
        };
    }

    static generateRandomId() {
        return Math.random().toString(36).substring(7);
    }

    static encodeBase64(str) {
        return btoa(str);
    }

    static decodeBase64(base64) {
        return atob(base64);
    }

    createBundle(type, assets = [], script = null) {
        this.bundleData.type = type;
        this.bundleData.assets = assets;
        this.bundleData.script = script;
    }

    getBundleJSON() {
        return JSON.stringify(this.bundleData);
    }

    async loadBundle(bundleData) {
        try {
            if (typeof bundleData == 'object') {
                // Use the provided bundle data directly
                this.bundleData = bundleData;
            } else if (typeof bundleData == 'string') {
                // Load from a URL
                const response = await fetch(bundleData);
                if (response.ok) {
                    const jsonData = await response.json();
                    this.bundleData = jsonData;
                    console.log('success');
                } else {
                    console.error('Failed to load bundle:', response.statusText);
                    return null; // Return null on failure
                }
            } else {
                console.error('Invalid bundle data:', bundleData);
                return null; // Return null for invalid input
            }

            return this.bundleData; // Return the loaded data
        } catch (error) {
            console.error('Failed to load bundle:', error);
            return null; // Return null on error
        }
    }


    createBundleBlob() {
        const bundleJSON = this.getBundleJSON();
        return new Blob([bundleJSON], {
            type: 'application/json'
        });
    }

    downloadBundle() {
        const bundleBlob = this.createBundleBlob();
        const bundleUrl = URL.createObjectURL(bundleBlob);

        const downloadLink = document.createElement('a');
        downloadLink.href = bundleUrl;
        downloadLink.download = 'newbundle.kawaibundle';
        downloadLink.click();
    }

    activate() {
        const scriptTag = document.createElement('script');
        scriptTag.type = 'text/javascript';
        scriptTag.innerHTML = this.bundleData.script;
        document.body.appendChild(scriptTag);
        return this; // Add this line to return the instance
    }

    deactivate() {
        const scriptTag = document.querySelector(`script[data-type="${this.bundleData.type}"]`);
        if (scriptTag) {
            scriptTag.remove();
        }
    }
}