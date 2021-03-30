// import React, { Component } from "react"
// import UserLogin from "./app/shared/pleaseLogin/pleaseLogin"
// import UserGreet from "./app/shared/login/login"
// import home from "./app/services/index"

// import { BrowserRouter as Router, Link, Route } from "react-router-dom"

// interface IProps {}
// interface IState {
//   isLogin: boolean
//   imgurl: string
// }

// class App extends Component<IProps, IState> {
//   constructor(props: IProps) {
//     super(props)
//     this.state = {
//       isLogin: true,
//       imgurl: "",
//     }
//   }

//   async componentDidMount() {
//     let data = await home.getHome()
//     console.log(data)
//   }

//   render() {
//     return (
//       <Router>
//         <div>
//           <Link to="/">123</Link>
//           <Link to="/p">123</Link>
//           <Link to="/m"></Link>
//         </div>
//         <Route path="/" exact component={UserLogin}></Route>
//         <Route path="/p" component={UserGreet}></Route>
//       </Router>
//     )
//     // console.log(import.meta.env)
//     // let url = JSON.parse(import.meta.env.VITE_APP_MSG as string).imgurl
//     // if (this.state.isLogin) {
//     //   return <UserLogin url={url}></UserLogin>
//     // } else {
//     //   return <UserGreet></UserGreet>
//     // }
//   }
// }

// export default App
