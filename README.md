该项目基于create -react-app脚手架构建<br/>
实现功能：<br/>
1、动态组件路由加载<br/>
2、以json数据类型加载路由，取掉了默认的路由层级表配置<br/>
实现方案：<br/>
1、编写AsyncComponent（详见units/AsyncComponent/js）<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;1.该asyncComponent函数采用了一个参数; 一个function（importComponent），当被调用时将动态导入给定的组件。当我们   使用时，这将更有意义asyncComponent。<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;2.在componentDidMount，我们只需调用importComponent传入的函数。并将动态加载的组件保存在状态中。<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;3.最后，如果组件已完成加载，我们会有条件地渲染组件。如果不是，我们只是渲染null。但是null，您可以渲染加载微调器而   不是渲染。<br/>
2、基于react-router-config这个包实现功能<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;1.新增模模块只需要在新增文件夹下增加router.js。基于require.context获取指定路径下面指定文件名的js(webpack内容)，最终会得到一个Array。碰巧react-router-config此模块的renderRoutes方法接受的三个参数(routes, authed, authPath)。第一个就是arr<br/>
然后啪啦啪啦的敲，是不是特别像vue的路由表了<br/>
----------------------目前还没添加拦截器。不过react-router-config这货有matchRoutes(routes, pathname)这个。完美解决<br/>
