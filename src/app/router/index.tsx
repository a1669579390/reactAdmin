import React from "react"
import {
  BrowserRouter,
  Router,
  Route /* , Redirect */,
  Switch,
} from "react-router-dom"

import Home from "@/app/pages/base"

export const Routers = () => (
  <BrowserRouter basename="/">
    <Switch>
      <Route path="/" component={Home}></Route>
    </Switch>
  </BrowserRouter>
)

// {/* <Route path="/" component={base.app} onEnter={isLogin}>
//   <IndexRoute component={base.example} />
//   <Route path="/desk$/index" component={base.example} />
//   {/* <Route path="/socketReceive" component={base.socketReceive} /> */}
//   {/** *菜单 开始 */}
//   <Route path="/echarts" component={menu.echarts} />
//   <Route path="/editor" component={menu.editor} />
//   {/** *菜单 结束 */}
//   {/** *系统设置 开始 */}
//   <Route path={`/${set}/userManage`} component={sysSet.userManage} />
//   <Route path={`/${set}/roleManage`} component={sysSet.roleManage} />
//   <Route path={`/${set}/moduleManage`} component={sysSet.moduleManage} />
//   {/** *系统设置 结束 */}
// </Route>
// <Route path="/login" component={base.login} />
// <Route path="*" component={base.notfound} /> */}
