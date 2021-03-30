import { Dispatch } from "redux"

export function mapStateToPropsOpen(open: boolean) {
  return { type: "isOpen", isOpen: open }
}

export function mapDispatchToPropsOpen(open: boolean) {
  return (dispatch: Dispatch) => {
    dispatch(mapStateToPropsOpen(open))
  }
}
