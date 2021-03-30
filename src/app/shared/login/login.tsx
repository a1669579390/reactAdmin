import React, { Component } from "react"

interface IProps {}
interface IState {
  names: string[]
  lists: {
    title: string
    content: string
  }[]
}
export default class UserGreet extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      names: ["小明", "小张", "小李"],
      lists: [
        {
          title: "标题1",
          content: "内容1",
        },
        {
          title: "标题2",
          content: "内容2",
        },
        {
          title: "标题3",
          content: "内容3",
        },
      ],
    }
  }
  render() {
    let arr = this.state.lists.map((item, index) => {
      return (
        <li key={index}>
          <h4>
            {index}:{item.title}
          </h4>
          <span>{item.content}</span>
        </li>
      )
    })

    return (
      <div>
        <h1>标题</h1>
        <ul>{arr}</ul>
      </div>
    )
  }
}
