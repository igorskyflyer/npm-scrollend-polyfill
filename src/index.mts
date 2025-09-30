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
    handler: EventListenerOrEventListenerObject
  ) {
    if (eventName !== 'scrollend') {
      native.apply(this, [eventName, handler])
      return
    }

    let listener: Listener | undefined = registered.get(this)

    if (!listener) {
      let timeout: NodeJS.Timeout | number

      listener = {
        scrollFn: (ev) => {
          clearTimeout(timeout)
          timeout = setTimeout(() => {
            if (typeof handler === 'function') {
              handler(ev)
            } else {
              handler.handleEvent(ev)
            }
          }, 100)
        },
        handlers: [handler]
      }

      native.apply(this, ['scroll', listener.scrollFn, false])
      registered.set(this, listener)
    }
  }

  function removeScrollEndHandler(
    this: EventTarget,
    native: typeof EventTarget.prototype.removeEventListener,
    eventName: string,
    handler: EventListenerOrEventListenerObject
  ): void {
    if (eventName !== 'scrollend') {
      native.apply(this, [eventName, handler])
      return
    }

    const listener: Listener | undefined = registered.get(this)

    if (!listener) {
      return
    }

    if (typeof listener.scrollFn === 'function') {
      native.apply(this, ['scroll', listener.scrollFn])
    }

    if (typeof handler === 'undefined') {
      listener.handlers = []
    } else {
      const handlerIndex: number = listener.handlers.indexOf(handler)

      if (handlerIndex > -1) {
        listener.handlers.splice(handlerIndex, 1)
      }
    }

    if (listener.handlers.length === 0) {
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
