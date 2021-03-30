const initState = {
  isOpen: true,
}

export function open(
  state = initState,
  action: { type: string; isOpen: boolean }
) {
  switch (action.type) {
    case "isOpen":
      return {
        ...state,
        isOpen: action.isOpen,
      }
    default:
      return state
  }
}
