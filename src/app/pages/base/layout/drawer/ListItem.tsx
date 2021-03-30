import React, { Component } from "react"
import ControlledAccordions from "@/app/thirds/accordions/controlledAccordions"

import { IListItemProps, IListItemState } from "@/app/models/app/listItem.model"
import "@/app/styles/listItem.scss"

export class ListItem extends Component<IListItemProps, IListItemState> {
  constructor(props: IListItemProps) {
    super(props)
  }
  render() {
    const { isOpen } = this.props

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
            <ControlledAccordions></ControlledAccordions>
            <span className={"avatar"}>头像</span>
          </div>
        </div>
      </div>
    )
  }
}
