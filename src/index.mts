// Author: Igor Dimitrijević (@igorskyflyer)

import type { Func } from '@igor.dvlpr/common-types'
import { hook } from '@igor.dvlpr/hook'

if (typeof window === 'undefined') {
  throw 'Not in a browser.'
}

type Listener = {
  scrollFn: EventListener
  handlers: Func[]
}

const supported: boolean = 'onscrollend' in window

if (!supported) {
  const registered: WeakMap<EventTarget, Listener> = new WeakMap<
    EventTarget,
    Listener
  >()
  let currentHandlerWindow: Func | null = null
  let currentHandlerDocument: Func | null = null

  function addScrollEndHandler(
    this: EventTarget,
    native: Func,
    eventName: string,
    handler: Func
  ) {
    if (eventName !== 'scrollend') {
      native.apply(this, [eventName, handler])
      return
    }

    const target: EventTarget = this
    let listener: Listener | undefined = registered.get(target)

    if (!listener) {
      let timeout: NodeJS.Timeout | number

      listener = {
        scrollFn: () => {
          clearTimeout(timeout)
          timeout = setTimeout(() => {
            handler()
          }, 100)
        },
        handlers: [handler]
      }

      native.apply(target, ['scroll', listener.scrollFn, false])
      registered.set(target, listener)
    }
  }

  function removeScrollEndHandler(
    this: EventTarget,
    native: Func,
    eventName: string,
    handler: Func
  ): void {
    if (eventName !== 'scrollend') {
      native.apply(this, [eventName, handler])
      return
    }

    const target: EventTarget = this
    const listener: Listener | undefined = registered.get(target)

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
      registered.delete(target)
    }
  }

  hook(window, 'addEventListener', addScrollEndHandler, true)
  hook(window, 'removeEventListener', removeScrollEndHandler, true)
  Object.defineProperty(window, 'onscrollend', {
    set: (handler) => {
      if (typeof handler !== 'function' || currentHandlerWindow) {
        removeScrollEndHandler.call(
          window,
          window.removeEventListener,
          'scrollend',
          currentHandlerWindow as Func
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
    set: (handler) => {
      if (typeof handler !== 'function' || currentHandlerDocument) {
        removeScrollEndHandler.call(
          document,
          document.removeEventListener,
          'scrollend',
          currentHandlerDocument as Func
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
