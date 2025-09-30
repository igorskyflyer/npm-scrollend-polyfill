<div align="center">
  <img src="https://raw.githubusercontent.com/igorskyflyer/npm-scrollend-polyfill/main/media/scrollend-polyfill.png" alt="Icon of Scrollend Polyfill" width="256" height="256">
  <h1>Scrollend Polyfill</h1>
</div>

<blockquote align="center"> Spec-Faithful • Scrollend Event • Type-Safe • Cross-Browser </blockquote>

<h4 align="center">
  🛴 Lightweight (<strong>&lt; 1.5KB</strong>) scrollend polyfill for browsers, enabling 'scrollend' via add/removeEventListener and 'onscrollend' property for fast, reliable scroll detection. ⛸️
</h4>

<br>
<br>

<div align="center">
  <img src="https://data.jsdelivr.com/v1/package/npm/@igorskyflyer/scrollend-polyfill/badge" alt="jsDelivr stats">
  <img src="https://img.shields.io/npm/dt/@igorskyflyer/scrollend-polyfill?label=npm" alt="npm stats">
</div>

<br>

## 📃 Table of Contents

- [**Features**](#-features)
- [**Usage**](#-usage)
    - [**CDN**](#cdn)
    - [**Local**](#local)
- [**API**](#-api)
- [**Examples**](#️-examples)
- [**Changelog**](#-changelog)
- [**Support**](#-support)
- [**License**](#-license)
- [**Related**](#-related)
- [**Author**](#-author)

<br>

## 🤖 Features

- ✨ Fires `scrollend` event reliably
- 🌍 Works across browsers and devices
- ⚡ Lightweight (< 1.5KB minified)
- 🧩 Type-safe for strong typings
- 🛡 Safe native-like behavior
- 🎯 Supports `once` and `bubbling`
- 🔧 Easy drop-in usage
- 📦 Ready for production builds
- 🔍 Debug-friendly and reversible
- 🕹 Compatible with `window`, `document` and `onscrollend` property

<br>

## 🕵🏼 Usage

There are two ways of obtaining the polyfill:
- via a CDN (*recommended*)
- via a local file.

<br>

### CDN

<br>

The polyfill is hosted on jsDelivr and you can grab it from here:

[https://cdn.jsdelivr.net/npm/@igorskyflyer/scrollend-polyfill@1.3.0/dist/scrollend.min.js](https://cdn.jsdelivr.net/npm/@igorskyflyer/scrollend-polyfill@1.3.0/dist/scrollend.min.js)

then add it to your HTML file:

<br>

`index.html`
```html
<script src="https://cdn.jsdelivr.net/npm/@igorskyflyer/scrollend-polyfill@1.3.0/dist/scrollend.min.js"
        integrity="sha256-P1Q7nRQI+8DpWPufXZGwsmwkY/uYGwA0TIFLO7m0kI4"
        crossorigin="anonymous"></script>
```

<br>

> ### ℹ️ NOTE
>
> #### CSP (Content Security Policy)
>
> If you use CSP (*which you really should)* you need to add the above SHA-256 hash to the allowed script sources.
>

---

### Local

Install it by executing any of the following, depending on your preferred package manager:

```bash
pnpm add @igorskyflyer/scrollend-polyfill
```

```bash
yarn add @igorskyflyer/scrollend-polyfill
```

```bash
npm i @igorskyflyer/scrollend-polyfill
```

Then import it into your project, e.g. an HTML page via the `<script>` tag:

<br>

`index.html`
```html
<script src="./node_modules/@igorskyflyer/scrollend-polyfill/dist/scrollend.min.js"></script>
```

but if you don't like messing with that long path just copy the `"./node_modules/@igorskyflyer/scrollend-polyfill/dist/scrollend.min.js"` file to a directory of your liking and then update the reference to it, i.e.

```html
<script src="./js/scrollend.min.js"></script>
```

<br>

## 🤹🏼 API

This polyfill adds the `scrollend` Event for the `window` and `document` objects and the `onscrollend` property.

```js
window.addEventListener('scrollend', myHandler)
document.addEventListener('scrollend', myHandler)
```

<br>

The polyfilled `scrollend` Event can be added via `addEventListener()` or via the property `onscrollend`.

```js
window.onscrollend = myHandler
document.onscrollend = myHandler
```

<br>

## 🗒️ Examples

`scroll-end.html`
```html
<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Scrollend polyfill</title>
    <script src="https://cdn.jsdelivr.net/npm/@igorskyflyer/scrollend-polyfill@1.3.0/dist/scrollend.min.js"
            integrity="sha256-P1Q7nRQI+8DpWPufXZGwsmwkY/uYGwA0TIFLO7m0kI4"
            crossorigin="anonymous"></script>
    <style>
      body {
        height: 180vh;
      }
    </style>
  </head>

  <body>
    <main>
      <div>
        <h1>Launch the DevTools and open the Console tab.</h1>
        <h3>Then start scrolling.</h3>
      </div>
    </main>
    <script>
      function test() {
        console.log('Scroll ended')
      }

      document.addEventListener('scrollend', test)
    </script>
  </body>

</html>

```

<br>

## 📝 Changelog

📑 Read about the latest changes in the [**CHANGELOG**](https://github.com/igorskyflyer/npm-scrollend-polyfill/blob/main/CHANGELOG.md).

<br>

## 🪪 License

Licensed under the [**MIT license**](https://github.com/igorskyflyer/npm-scrollend-polyfill/blob/main/LICENSE).

<br>

## 💖 Support

<div align="center">
  I work hard for every project, including this one and your support means a lot to me!
  <br>
  Consider buying me a coffee. ☕
  <br>
  <br>
  <a href="https://ko-fi.com/igorskyflyer" target="_blank"><img src="https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/assets/ko-fi.png" alt="Donate to igorskyflyer" width="180" height="46"></a>
  <br>
  <br>
  <em>Thank you for supporting my efforts!</em> 🙏😊
</div>

<br>

## 🧬 Related

[**@igorskyflyer/adblock-filter-counter**](https://www.npmjs.com/package/@igorskyflyer/adblock-filter-counter)

> _🐲 A lightweight npm module for counting ad-block filter rules, ultra-simple, fast, and perfect for list maintainers, filter testers, and privacy tool developers.🦘_

<br>

[**@igorskyflyer/emojilyzer**](https://www.npmjs.com/package/@igorskyflyer/emojilyzer)

> _💬 Emojifies strings, converting textual representations of emojis to graphical ones. 🖌️_

<br>

[**@igorskyflyer/mp3size**](https://www.npmjs.com/package/@igorskyflyer/mp3size)

> _🧮 Calculates an estimated file size of Mp3 files. 🎶_

<br>

[**@igorskyflyer/windev**](https://www.npmjs.com/package/@igorskyflyer/windev)

> _🍃 Determines whether a path is a legacy Windows device. 💾_

<br>

[**@igorskyflyer/is-git-repo**](https://www.npmjs.com/package/@igorskyflyer/is-git-repo)

> _🐸 Checks if a directory is a local Git repository. 🕶️_

<br>

## 👨🏻‍💻 Author
Created by **Igor Dimitrijević ([*@igorskyflyer*](https://github.com/igorskyflyer/))**.
