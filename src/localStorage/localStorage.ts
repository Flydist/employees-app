export const loadState = <T>(itemName: string): T | null => {
  try {
    const serializedState = localStorage.getItem(itemName)
    if (serializedState === null) {
      return null
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return null
  }
}

export const saveState = <T>(state: T, itemName: string): void => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem(itemName, serializedState)
  } catch {
    // ignore
  }
}
