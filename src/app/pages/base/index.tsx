import React, { Component } from "react"
import "antd/dist/antd.css"
import "@/app/styles/home.scss"
import Header from "@/app/pages/base/layout/header"
import SideBar from "@/app/pages/base/layout/sideBar"
import { IHomeProps, IHomeState } from "@/app/models/app/layout/home.model"

export default class Home extends Component<IHomeProps, IHomeState> {
  constructor(props: IHomeProps) {
    super(props)
    this.state = {
      open: true,
    }
  }

  getData = (open: boolean) => {
    this.setState({
      open,
    }) //接受header组件传值
  }
  render() {
    return (
      <div className={"jss1"}>
        <Header getOpenData={this.getData}></Header>
        <SideBar></SideBar>
      </div>
    )
  }
}
