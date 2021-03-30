import React, { Component } from "react"

import { RoundButton, MenuButton } from "../../../../thirds/buttons/button"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import DashboardIcon from "@material-ui/icons/Dashboard"
import NotificationsIcon from "@material-ui/icons/Notifications"
import SettingsIcon from "@material-ui/icons/Settings"
import PersonIcon from "@material-ui/icons/Person"
import MenuOpenOutlinedIcon from "@material-ui/icons/MenuOpenOutlined"
import { IHeaderProps, IHeaderState } from "../../../../models/app/header.model"

class Header extends Component<IHeaderProps, IHeaderState> {
  constructor(props: IHeaderProps) {
    super(props)
  }
  setData = () => {
    console.log(this.props.isOpen)
    this.props.mapStateToPropsOpen(!this.props.isOpen)
    console.log(this.props.isOpen)
    this.props.getOpenData(!this.props.isOpen)
  }

  render() {
    const open = this.props.isOpen
    return (
      <div id="header">
        {/* 侧边栏按钮 */}
        <div className={"headNav" + " MuiToolbar-root"}>
          <div className={"jss88"}>
            <div onClick={this.setData}>
              <RoundButton>
                {open ? (
                  <MenuOpenOutlinedIcon
                    style={{ fontSize: 20 }}
                  ></MenuOpenOutlinedIcon>
                ) : (
                  <MoreVertIcon style={{ fontSize: 20 }}></MoreVertIcon>
                )}
              </RoundButton>
            </div>
          </div>
          {/* 文字 */}
          <div className="header-title">
            <span className={"title-text" + " jss408"}>DEMO</span>
          </div>
          {/* 右侧功能区 */}
          <div className={"header-control" + "  jss1096"}>
            <div className={"control-p"}>
              <MenuButton>
                <DashboardIcon style={{ fontSize: 25 }}></DashboardIcon>
              </MenuButton>
            </div>
            <div className={"control-p"}>
              <MenuButton>
                <NotificationsIcon style={{ fontSize: 25 }}></NotificationsIcon>
              </MenuButton>
            </div>
            <div className={"control-p"}>
              <MenuButton>
                <SettingsIcon style={{ fontSize: 25 }}></SettingsIcon>
              </MenuButton>
            </div>
            <div className={"control-p"}>
              <MenuButton>
                <PersonIcon style={{ fontSize: 25 }}></PersonIcon>
              </MenuButton>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
