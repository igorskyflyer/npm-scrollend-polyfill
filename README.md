<h1 align="center">ScrollEnd polyfill</h1>

<br>

<p align="center">
  🛴 A performant and light (&lt; 1.5KB) JavaScript polyfill for the scrollend Event. ⛸️
</p>

<br>
<br>

---

<div align="center">
  <blockquote>
    <br>
    <h4>💖 Support further development</h4>
    <span>I work hard for every project, including this one and your support means a lot to me!
    <br>
    Consider buying me a coffee. ☕
    <br>
    <strong>Thank you for supporting my efforts! 🙏😊</strong></span>
    <br>
    <br>
    <a href="https://ko-fi.com/igorskyflyer" target="_blank"><img src="https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/assets/ko-fi.png" alt="Donate to igorskyflyer" width="150"></a>
    <br>
    <br>
    <a href="https://github.com/igorskyflyer"><em>@igorskyflyer</em></a>
    <br>
    <br>
    <br>
  </blockquote>
</div>

<br>
<br>

## 📃 Table of contents

- [Usage](#-usage)
- [API](#-api)
    - [CDN](#cdn)
    - [Install](#package-install)
- [Examples](#-examples)
- [Changelog](#-changelog)
- [License](#-license)
- [Related](#-related)
- [Author](#-author)

---

<br>
<br>

## 🕵🏼 Usage

You can import the file via the CDN or by installing the package.

<br>

### CDN

<br>

<img src="https://data.jsdelivr.com/v1/package/gh/igorskyflyer/npm-scrollend-polyfill/badge" alt="jsDelivr stats">

<br>

The polyfill is hosted on jsDelivr and you can grab it from here:

[https://cdn.jsdelivr.net/gh/igorskyflyer/npm-scrollend-polyfill@1.2.1/dist/scrollend.min.js](https://cdn.jsdelivr.net/gh/igorskyflyer/npm-scrollend-polyfill@1.2.1/dist/scrollend.min.js)


then add it to your HTML file:

<br>

`index.html`
```html
<script src="https://cdn.jsdelivr.net/gh/igorskyflyer/npm-scrollend-polyfill@1.2.1/dist/scrollend.min.js"
        integrity="sha256-3fG8VnL6PFA7RyDVnkG5bk03GMi6Xvy1tIKkSMKJ+Ds="
        crossorigin="anonymous"></script>
```

---

### Package install

Install it by executing:

```shell
npm i "@igor.dvlpr/scrollend-polyfill"
```

Then import it into your project, e.g. an HTML page via the `<script>` tag:

<br>

`index.html`
```html
<script src="./node_modules/@igor.dvlpr/scrollend-polyfill/dist/scrollend.min.js"
        integrity="sha256-3fG8VnL6PFA7RyDVnkG5bk03GMi6Xvy1tIKkSMKJ+Ds="></script>
```

but if you don't like messing with that long path just copy the `"./node_modules/@igor.dvlpr/scrollend-polyfill/dist/scrollend.min.js"` file to a directory of your liking and then update the reference to it, i.e.

```html
<script src="./js/scrollend.min.js"
        integrity="sha256-3fG8VnL6PFA7RyDVnkG5bk03GMi6Xvy1tIKkSMKJ+Ds="></script>
```

<br>
<br>

> [!NOTE]
> If you use CSP (*which you really should)* you need to add the above SHA-256 hash to the allowed script sources.
>

<br>

## 🤹🏼 API

This polyfill adds the `scrollend` Event for the `window` and `document` objects.

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

---

## ✨ Examples

`scroll-end.html`
```html
<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Scrollend polyfill</title>
    <script src="https://cdn.jsdelivr.net/gh/igorskyflyer/npm-scrollend-polyfill@1.2.1/dist/scrollend.min.js"
            integrity="sha256-3fG8VnL6PFA7RyDVnkG5bk03GMi6Xvy1tIKkSMKJ+Ds="
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

---

## 📝 Changelog

✨ Changelog is available here: [CHANGELOG.md](https://github.com/igorskyflyer/npm-scrollend-polyfill/blob/main/CHANGELOG.md).

---

## 🪪 License

Licensed under the MIT license which is available here, [MIT license](https://github.com/igorskyflyer/npm-scrollend-polyfill/blob/main/LICENSE).

---

## 🧬 Related

[@igor.dvlpr/magic-queryselector](https://www.npmjs.com/package/@igor.dvlpr/magic-queryselector)

> _🪄 A TypeScript-types patch for querySelector/querySelectorAll, make them return types you expect them to! 🔮_

<br>

[@igor.dvlpr/aria](https://www.npmjs.com/package/@igor.dvlpr/aria)

> _🧬 Meet Aria, an efficient Adblock filter list compiler, with many features that make your maintenance of Adblock filter lists a breeze! 🦖_

<br>

[@igor.dvlpr/windows-packages](https://www.npmjs.com/package/@igor.dvlpr/windows-packages)

> _💻 A Node.js module for reading the Packages registry key on Windows 10+. Useful for retrieving Windows 10+ installed Store applications. 📦_

<br>

[@igor.dvlpr/encode-entities](https://www.npmjs.com/package/@igor.dvlpr/encode-entities)

> _🏃‍♂️ Fast and simple Map and RegExp based HTML entities encoder. 🍁_

<br>

[@igor.dvlpr/regkeys](https://www.npmjs.com/package/@igor.dvlpr/regkeys)

> _📚 An NPM package for fetching Windows registry keys. 🗝_

---

<br>

### 👨🏻‍💻 Author
Created by **Igor Dimitrijević** ([*@igorskyflyer*](https://github.com/igorskyflyer/)).
