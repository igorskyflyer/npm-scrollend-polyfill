// Author: Igor Dimitrijević (@igorskyflyer)

import { hook } from '@igor.dvlpr/hook'

if (typeof window === 'undefined') {
  throw 'Not in a browser.'
}

const supported: boolean = 'onscrollend' in window

if (!supported) {
  const scrollEndEvent: Event = new Event('scrollend')
  const registered: WeakMap<EventTarget, boolean> = new WeakMap<
    EventTarget,
    boolean
  >()

  function addScrollEndHandler(
    this: EventTarget,
    eventName: string,
    handler: (...args: any[]) => any
  ) {
    if (eventName !== 'scrollend') {
      return
    }

    const target: EventTarget = this

    if (registered.has(target)) {
      return
    }

    let timeout: NodeJS.Timeout | number

    target.addEventListener(
      'scroll',
      () => {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
          target.dispatchEvent(scrollEndEvent)
        }, 100)
      },
      false
    )

    registered.set(target, true)
    target.addEventListener('scrollend', handler, false)
  }

  hook(window, 'addEventListener', addScrollEndHandler)
  Object.defineProperty(window, 'onscrollend', {
    set: function (handler) {
      addScrollEndHandler.call(this, 'scrollend', handler)
    }
  })

  hook(document, 'addEventListener', addScrollEndHandler)
  Object.defineProperty(document, 'onscrollend', {
    set: function (handler) {
      addScrollEndHandler.call(this, 'scrollend', handler)
    }
  })
}
