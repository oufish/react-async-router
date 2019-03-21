import React, { Component } from 'react';
import { Link } from "react-router-dom"
import { renderRoutes } from "react-router-config";
import style from "./index.module.less"
export default class Demo4 extends Component {
  render() {
    return (
      <div className={style.container}>
        <div className={style.linkContainer}>
          <Link to="/demo4/child1">去查看子节点1</Link>
          <Link to="/demo4/child2">去查看子节点2</Link>
          <Link to="/demo4/child3">去查看子节点3</Link>
          <Link to="/demo4/child4">去查看子节点4</Link></div>
        <div className={style.content}>
          {renderRoutes(this.props.route.routes)}
        </div>
      </div>
    );
  }
}

