import { IIsOpen } from "@/app/models/store/mapState.model"
import { connect } from "react-redux"
import { mapStateToPropsOpen } from "@/app/store/actions/open"
import Header from "./header"

const mapStateToProps = (state: IIsOpen) => {
  return {
    isOpen: state.open.isOpen,
  }
}
const actionCreator = { mapStateToPropsOpen }
export default connect(mapStateToProps, actionCreator)(Header)
