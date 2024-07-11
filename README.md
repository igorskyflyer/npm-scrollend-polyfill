# ScrollEnd polyfill

<br>

<p align="center">
	🛴 A performant and light (&lt; 1KB) JavaScript polyfill for the scrollend Event. ⛸️
</p>

<br>
<br>

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

## 🕵🏼 Usage

You can import the file via the CDN or by installing the package.

<br>

#### CDN

The polyfill is hosted on jsDelivr and you can grab it from here:

[https://cdn.jsdelivr.net/gh/igorskyflyer/npm-scrollend-polyfill/dist/scrollend.min.js](https://cdn.jsdelivr.net/gh/igorskyflyer/npm-scrollend-polyfill/dist/scrollend.min.js)


then add it to your HTML file:

<br>

`index.html`
```html
<script
  src="https://cdn.jsdelivr.net/gh/igorskyflyer/npm-scrollend-polyfill/dist/scrollend.min.js"
  integrity="sha256-6F/bdXudM1cUuqzzFwPFvSw14qQwWeWdhUs+7nG+Kgw="
  crossorigin="anonymous"></script>
```

<br>

#### Package install

Install it by executing:

```shell
npm i "@igor.dvlpr/scrollend-polyfill"
```

Then import it into your project, e.g. an HTML page via the `<script>` tag:

<br>

`index.html`
```html
<script
  src="./node_modules/@igor.dvlpr/scrollend-polyfill/dist/scrollend.min.js"
  integrity="sha256-6F/bdXudM1cUuqzzFwPFvSw14qQwWeWdhUs+7nG+Kgw="
  crossorigin="anonymous"></script>
```

but if you don't like messing with that long path just copy the `"./node_modules/@igor.dvlpr/scrollend-polyfill/dist/scrollend.min.js"` file to a directory of your liking and then update the reference to it, i.e.

```html
<script
  src="./js/scrollend.min.js"
  integrity="sha256-6F/bdXudM1cUuqzzFwPFvSw14qQwWeWdhUs+7nG+Kgw="
  crossorigin="anonymous"></script>
```

<br>
<br>

> [!NOTE]
> If you use CSP (*which you really should)* you need to add the above SHA-256 hash to the allowed script sources.
>

<br>

## 🤹🏼 API

This polyfill adds the `scrollend` Event for the `window` and `document` objects.

<br>

The polyfilled `scrollend` Event can be added via `addEventListener()` or via the property `onscrollend`, e.g.

<br>

`scroll-end.html`
```html
<!DOCTYPE html>
<html lang="en">

	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Scrollend polyfill</title>
		<script src="https://cdn.jsdelivr.net/gh/igorskyflyer/npm-scrollend-polyfill/dist/scrollend.min.js"></script>
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

## 🪪 License

Licensed under the MIT license which is available here, [MIT license](https://github.com/igorskyflyer/npm-scrollend-polyfill/blob/main/LICENSE).

---

## 🧬 Related

[@igor.dvlpr/windows-packages](https://www.npmjs.com/package/@igor.dvlpr/windows-packages)

> _💻 A Node.js module for reading the Packages registry key on Windows 10. Useful for retrieving Windows 10 installed Store applications. 📦_

[@igor.dvlpr/astro-post-excerpt](https://www.npmjs.com/package/@igor.dvlpr/astro-post-excerpt)

> _⭐ An Astro component that renders post excerpts for your Astro blog - directly from your Markdown files. Astro v2 collections are supported as well! 💎_

[@igor.dvlpr/node-clone-js](https://www.npmjs.com/package/@igor.dvlpr/node-clone-js)

> _🧬 A lightweight JavaScript utility allowing deep copy-by-value of nested objects, arrays and arrays of objects. 🪁_

[@igor.dvlpr/odin](https://www.npmjs.com/package/@igor.dvlpr/odin)

> _🔱 Odin is an Object wrapper that allows you to create objects and set their attributes - all at once! 🔺_

[@igor.dvlpr/str-is-in](https://www.npmjs.com/package/@igor.dvlpr/str-is-in)

> _🧵 Provides ways of checking whether a String is present in an Array of Strings using custom Comparators. 🔍_

<br>
<br>

>
> Provided by **Igor Dimitrijević** ([*@igorskyflyer*](https://github.com/igorskyflyer/)).
>
