import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import "@/common/style/global.less";
import RenderRoute from "./router"
ReactDOM.render(<RenderRoute/>, document.getElementById('root'));
