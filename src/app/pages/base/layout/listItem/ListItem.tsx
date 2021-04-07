import React, { Component } from "react"
import { Menu } from "antd"
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons"
import {
  IListItemProps,
  IListItemState,
} from "@/app/models/app/layout/listItem.model"
import "./listItem.scss"

export default class ListItem extends Component<
  IListItemProps,
  IListItemState
> {
  constructor(props: IListItemProps) {
    super(props)
  }
  render() {
    const { isOpen } = this.props
    console.log(isOpen)

    return (
      <div
        style={{
          background: `url("https://demos.creative-tim.com/material-dashboard-pro-react/static/media/sidebar-4.f34e943f.jpg") no-repeat`,
        }}
        className={"list-item-bgc"}
      >
        <div>
          <div className={"logo"}>
            <span>LOGO </span>
            {isOpen == true && <span>YANG</span>}
          </div>
          <div className={"user-manage"}>
            <span className={"avatar"}>头像</span>
          </div>
          <Menu
            className="menu-item"
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
          >
            <Menu.Item key="1" icon={<UserOutlined />}>
              nav 1
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              nav 2
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              nav 3
            </Menu.Item>
          </Menu>
        </div>
      </div>
    )
  }
}
