# Kawai Bundler
Kawai Bundler is a powerful tool for creating and managing bundles and extensions with Kawai natively. This documentation provides a comprehensive guide on how to utilize the Kawai Bundler to its full potential.

## Table of Contents

- [Kawai Bundler](#kawai-bundler)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Encode and Decode Operations](#encode-and-decode-operations)
    - [`encodeBase64(str)`](#encodebase64str)
    - [`decodeBase64(base64)`](#decodebase64base64)
  - [Bundle and Extension Creation](#bundle-and-extension-creation)
    - [`createBundle(type, assets, script)`](#createbundletype-assets-script)
    - [`createExtension(type, script)`](#createextensiontype-script)
  - [Loading and Parsing Bundles](#loading-and-parsing-bundles)
    - [`getBundleJSON()`](#getbundlejson)
    - [`loadBundleFromJSON(bundleJSON)`](#loadbundlefromjsonbundlejson)
    - [`createBundleBlob()`](#createbundleblob)
  - [Bundle Blob Creation](#bundle-blob-creation)
    - [`loadBundle()`](#loadbundle)
  - [Example Usage](#example-usage)

## Introduction
Kawai Bundler simplifies the process of creating, managing, and utilizing bundles and extensions within the Kawai framework. With various built-in functionalities, it enables smooth encoding, decoding, creation, and manipulation of bundles for a seamless development experience.

## Encode and Decode Operations

### `encodeBase64(str)`

Encodes a string as base64.

### `decodeBase64(base64)`

Decodes a base64 string.

## Bundle and Extension Creation

### `createBundle(type, assets, script)`
Creates a bundle with the provided data, including type, assets, and script. This can be used for creating bundles or extensions.

- `type` (string): Specifies the type of the bundle or extension.
- `assets` (array): Contains an array of base64-encoded elements.
- `script` (string): Represents a single base64-encoded script.

### `createExtension(type, script)`
Creates an extension with the provided data, including type and script. This is a specialized method for creating extensions.

- `type` (string): Specifies the type of the extension.
- `script` (string): Represents a single base64-encoded script.

## Loading and Parsing Bundles

### `getBundleJSON()`

Returns the bundle data as JSON.

### `loadBundleFromJSON(bundleJSON)`

Loads and parses a bundle or extension from JSON.

### `createBundleBlob()`

Creates and returns a Blob for the bundle or extension.

## Bundle Blob Creation

### `loadBundle()`

Creates a download link for the bundle or extension, allowing for easy access and utilization.

## Example Usage
```
// Initialize new Bundler
const kawaiBundler = new KawaiBundler();

// Create a bundle
kawaiBundler.createBundle('extension', ['base64-asset-1', 'base64-asset-2'], 'console.log("Hello from the bundle!");');

// Downloading created bundle or extension
kawaiBundler.downloadBundle();

// Loading a bundle or extension from the file
const bundleLoaded = kawaiBundler.loadBundle('assets/js/newbundle.kawaibundle')

// Activating
bundleLoaded.activate();

// Activating
bundleLoaded.deactivate();
```

The above example demonstrates the basic usage of the Kawai Bundler for creating and loading a sample bundle.

Feel free to explore the Kawai Bundler and its capabilities to streamline your development process within the Kawai framework.

For any further inquiries or support, please refer to the official Kawai documentation or contact our support team.