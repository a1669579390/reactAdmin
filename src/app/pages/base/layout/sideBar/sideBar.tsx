import { Layout } from "antd"
import React from "react"
import "@/app/pages/base/layout/sideBar/sideBar.scss"
import {
  ISideBarProps,
  ISideBarState,
} from "@/app/models/app/layout/sideBar.model"
import ListItem from "@/app/pages/base/layout/listItem"

const { Sider } = Layout

class SiderBar extends React.Component<ISideBarProps, ISideBarState> {
  render() {
    const { isOpen } = this.props
    return (
      <div className={"side-bar"}>
        <Layout className={"side-bar-height"}>
          <Sider width={264} trigger={null} collapsible collapsed={!isOpen}>
            <div className="logo" />
            <ListItem></ListItem>
          </Sider>
        </Layout>
      </div>
    )
  }
}

export default SiderBar
