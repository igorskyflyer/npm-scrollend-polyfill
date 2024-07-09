// Author: Igor Dimitrijević (@igorskyflyer)

import { hook } from '@igor.dvlpr/hook'

if (typeof window === 'undefined') {
  throw 'Not in a browser.'
}

const supported: boolean = 'onscrollend' in window

if (!supported) {
  const scrollEndEvent: Event = new Event('scrollend')

  function addScrollEndHandler(
    this: EventTarget,
    eventName: string,
    handler: (...args: any[]) => any
  ) {
    if (eventName !== 'scrollend') {
      return
    }

    const target: EventTarget = this
    let timeout: NodeJS.Timeout | number

    this.addEventListener(
      'scroll',
      () => {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
          handler()
          target.dispatchEvent(scrollEndEvent)
        }, 100)
      },
      false
    )
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
