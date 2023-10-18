# Kawai Bundler
Kawai Bundler is a powerful tool for creating and managing bundles and extensions with Kawai natively. This documentation provides a comprehensive guide on how to utilize the Kawai Bundler to its full potential.

## Table of Contents

- [Introduction](#introduction)
- [Encode and Decode Operations](#encode-and-decode-operations)
- [Bundle Creation](#bundle-creation)
- [Loading and Parsing Bundles](#loading-and-parsing-bundles)
- [Bundle Blob Creation](#bundle-blob-creation)
- [Example Usage](#example-usage)

## Introduction
Kawai Bundler simplifies the process of creating, managing, and utilizing bundles and extensions within the Kawai framework. With various built-in functionalities, it enables smooth encoding, decoding, creation, and manipulation of bundles for a seamless development experience.

## Encode and Decode Operations

### `encodeBase64(str)`

Encodes a string as base64.

### `decodeBase64(base64)`

Decodes a base64 string.

## Bundle Creation

### `createBundle(type, assets, script)`
Creates a bundle with the provided data, including type, assets, and script.

- `type` (string): Specifies the type of the bundle.
- `assets` (array): Contains an array of base64 encoded elements.
- `script` (string): Represents a single base64 encoded script.

## Loading and Parsing Bundles

### `getBundleJSON()`

Returns the bundle data as JSON.

### `loadBundleFromJSON(bundleJSON)`

Loads and parses a bundle from JSON.

### `createBundleBlob()`

Creates and returns a Blob for the bundle.

## Bundle Blob Creation

### `loadBundle()`

Creates a download link for the bundle, allowing for easy access and utilization.

## Example Usage
```
const kawaiBundler = new KawaiBundler();
kawaiBundler.createBundle('extension', ['base64-asset-1', 'base64-asset-2'], 'base64-script');
kawaiBundler.loadBundle();
```

The above example demonstrates the basic usage of the Kawai Bundler for creating and loading a sample bundle.

Feel free to explore the Kawai Bundler and its capabilities to streamline your development process within the Kawai framework.

For any further inquiries or support, please refer to the official Kawai documentation or contact our support team.