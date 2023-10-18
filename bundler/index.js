class KawaiBundler {
    constructor() {
      this.bundleData = {
        type: null,
        assets: [],
        script: null,
      };
    }
  
    // Option 1: Encode a string as base64
    static encodeBase64(str) {
      return btoa(str);
    }
  
    // Option 1: Decode a base64 string
    static decodeBase64(base64) {
      return atob(base64);
    }
  
    // Option 2: Create a bundle with given data
    createBundle(type, assets, script) {
      this.bundleData.type = type;
      this.bundleData.assets = assets;
      this.bundleData.script = script;
    }
  
    // Option 2: Return the bundle data as JSON
    getBundleJSON() {
      return JSON.stringify(this.bundleData);
    }
  
    // Option 2: Load and parse a bundle from JSON
    loadBundleFromJSON(bundleJSON) {
      try {
        this.bundleData = JSON.parse(bundleJSON);
        return true;
      } catch (error) {
        console.error('Failed to load bundle:', error);
        return false;
      }
    }
  
    // Option 2: Create and return a Blob for the bundle
    createBundleBlob() {
      const bundleJSON = this.getBundleJSON();
      return new Blob([bundleJSON], { type: 'application/json' });
    }
  
    // Option 2: Create a download link for the bundle
    loadBundle() {
      const bundleBlob = this.createBundleBlob();
      const bundleUrl = URL.createObjectURL(bundleBlob);
  
      const downloadLink = document.createElement('a');
      downloadLink.href = bundleUrl;
      downloadLink.download = 'newbundle.kawaibundle';
      downloadLink.click();
    }
  }
  
  // Example usage:
  const kawaiBundler = new KawaiBundler();
  kawaiBundler.createBundle('extension', ['base64-asset-1', 'base64-asset-2'], 'base64-script');
  kawaiBundler.loadBundle();
  