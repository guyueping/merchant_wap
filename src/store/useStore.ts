import React, { useState, useEffect } from 'react'

export default function useStore (store) {
  console.log('store.get()>>', store.get())
  const [ state, setState ] = useState(store.get())

  function updateState () {
    setState(store.get())
  }

  useEffect(() => {
    store.subscribe(updateState)
    return () => store.unsubscribe(updateState)
  })

  return state
}