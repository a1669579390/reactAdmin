import React, { Component } from "react"
import { Button, Tooltip } from "antd"
import { MoreOutlined, UnorderedListOutlined } from "@ant-design/icons"

import {
  IHeaderProps,
  IHeaderState,
} from "@/app/models/app/layout/header.model"

class Header extends Component<IHeaderProps, IHeaderState> {
  constructor(props: IHeaderProps) {
    super(props)
  }
  setData = () => {
    this.props.mapStateToPropsOpen(!this.props.isOpen)
    this.props.getOpenData(!this.props.isOpen)
  }

  render() {
    const open = this.props.isOpen
    return (
      <div id="header" className={`${!open ? "calcClose" : "calcOpen"}`}>
        {/* 侧边栏按钮 */}
        <div className={`headNav MuiToolbar-root `}>
          <div className={"jss88"}>
            <div onClick={this.setData}>
              {open ? (
                <Button
                  shape="circle"
                  size="large"
                  icon={<MoreOutlined />}
                ></Button>
              ) : (
                <Button
                  size="large"
                  shape="circle"
                  icon={<UnorderedListOutlined />}
                ></Button>
              )}
            </div>
          </div>
          {/* 文字 */}
          <div className="header-title">
            <span className={"title-text" + " jss408"}>DEMO</span>
          </div>
          {/* 右侧功能区 */}
          <div className={"header-control" + "  jss1096"}>
            <div className={"control-p"}></div>
            <div className={"control-p"}>2</div>
            <div className={"control-p"}>3</div>
            <div className={"control-p"}>4</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
