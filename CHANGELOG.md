# 📒 Changelog

### of [**@igorskyflyer/scrollend-polyfill**](https://github.com/igorskyflyer/npm-scrollend-polyfill)

<br>

## v1.3.0 (*30-Sep-2025*)

- ✨ **feat**: handlers now receive a real `Event` object (`type`, `target`, `eventPhase`, etc.)
- ✅ **fix**: forward full `(type, listener, options)` signature to preserve `{ once, passive, capture }` flags
- ✅ **fix**: dispatch proper `Event("scrollend")` objects instead of directly invoking handlers
- ✅ **fix**: ensure multiple handlers are supported and invoked consistently
- ✅ **fix**: align `onscrollend` property with native behavior, removing stale handlers before setting new ones
- ✅ **fix**: correct `removeEventListener` signature to use `boolean | EventListenerOptions`
- 💻 **dev**: refactor types to use `EventListener` / `EventListenerOrEventListenerObject` for spec fidelity
- 💻 **dev**: upgrade [@igorskyflyer/hook](https://www.npmjs.com/package/@igorskyflyer/hook)
- 💻 **dev**: refactor server

<br>
<br>

## v1.2.1 (*21-Jul-2024*)

- 💻 **dev**: always used the tagged version for `jsDelivr`
- 📜 **docs**: improve API documentation

<br>
<br>

## v1.2.0 (*21-Jul-2024*)

- ✨ **feat**: remove all references of a target when all handlers are removed
- ✨ **feat**: keep track of current target `scroll` handlers
- ✨ **feat**: don't allow duplicate handlers
- ✨ **feat**: keep track of the current handler when using the `onscrollend` property

<br>

- 💻 **dev**: upgrade [@igorskyflyer/hook](https://www.npmjs.com/package/@igorskyflyer/hook)

<br>
<br>

## v1.1.1 (*11-Jul-2024*)

- ✨ **feat**: add subresource integrity (CSP)

<br>
<br>

## v1.1.0 (*09-Jul-2024*)

- ✨ **feat**: switch to using the minified version

<br>
<br>

## v1.0.0 (*09-Jul-2024*)

- 🚀 **launch**: initial release 🎉
