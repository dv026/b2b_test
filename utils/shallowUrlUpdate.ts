'use client'

// change url without reload
export const shallowUrlUpdate = (url: string) => window.history.replaceState({ ...window.history.state, as: url, url: url }, '', url);