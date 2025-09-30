// Author: Igor Dimitrijević (@igorskyflyer)

import { hook } from '@igorskyflyer/hook'

if (typeof window === 'undefined') {
  throw new Error('Not in a browser.')
}

type Listener = {
  scrollFn: EventListener
  handlers: EventListenerOrEventListenerObject[]
}

const supported: boolean = 'onscrollend' in window

if (!supported) {
  const registered: WeakMap<EventTarget, Listener> = new WeakMap<
    EventTarget,
    Listener
  >()
  let currentHandlerWindow: EventListenerOrEventListenerObject | null = null
  let currentHandlerDocument: EventListenerOrEventListenerObject | null = null

  function addScrollEndHandler(
    this: EventTarget,
    native: typeof EventTarget.prototype.addEventListener,
    eventName: string,
    handler: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ) {
    if (eventName !== 'scrollend') {
      native.call(this, eventName, handler, options)
      return
    }

    let listener = registered.get(this)

    if (!listener) {
      let timeout: number | NodeJS.Timeout

      listener = {
        scrollFn: () => {
          clearTimeout(timeout as number)
          timeout = setTimeout(() => {
            const scrollEndEvent: Event = new Event('scrollend', {
              bubbles: true
            })

            const target = this === window ? document : this

            target.dispatchEvent(scrollEndEvent)
          }, 100)
        },
        handlers: []
      }

      native.call(this, 'scroll', listener.scrollFn, false)
      registered.set(this, listener)
    }

    native.call(this, 'scrollend', handler)
    listener.handlers.push(handler)
  }

  function removeScrollEndHandler(
    this: EventTarget,
    native: typeof EventTarget.prototype.removeEventListener,
    eventName: string,
    handler: EventListenerOrEventListenerObject,
    options?: boolean | EventListenerOptions
  ): void {
    if (eventName !== 'scrollend') {
      native.call(this, eventName, handler, options)
      return
    }

    const listener = registered.get(this)
    if (!listener) {
      return
    }

    native.call(this, 'scrollend', handler)

    const idx = listener.handlers.indexOf(handler)
    if (idx > -1) {
      listener.handlers.splice(idx, 1)
    }

    if (listener.handlers.length === 0) {
      native.call(this, 'scroll', listener.scrollFn)
      registered.delete(this)
    }
  }

  hook(window, 'addEventListener', addScrollEndHandler, true)
  hook(window, 'removeEventListener', removeScrollEndHandler, true)
  Object.defineProperty(window, 'onscrollend', {
    set: (handler: EventListenerOrEventListenerObject | null) => {
      if (currentHandlerWindow) {
        removeScrollEndHandler.call(
          window,
          window.removeEventListener,
          'scrollend',
          currentHandlerWindow
        )
      }

      currentHandlerWindow = handler

      if (handler) {
        addScrollEndHandler.call(
          window,
          window.addEventListener,
          'scrollend',
          handler
        )
      }
    },
    get: () => currentHandlerWindow
  })

  hook(document, 'addEventListener', addScrollEndHandler, true)
  hook(document, 'removeEventListener', removeScrollEndHandler, true)
  Object.defineProperty(document, 'onscrollend', {
    set: (handler: EventListenerOrEventListenerObject | null) => {
      if (currentHandlerDocument) {
        removeScrollEndHandler.call(
          document,
          document.removeEventListener,
          'scrollend',
          currentHandlerDocument
        )
      }

      currentHandlerDocument = handler

      if (handler) {
        addScrollEndHandler.call(
          document,
          document.addEventListener,
          'scrollend',
          handler
        )
      }
    },
    get: () => currentHandlerDocument
  })
}
