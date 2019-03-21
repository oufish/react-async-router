该项目基于create -react-app脚手架构建<br/>
实现功能：
1、动态组件路由加载
2、以json数据类型加载路由，取掉了默认的路由层级表配置
实现方案：
1、编写AsyncComponent（详见units/AsyncComponent/js）
    1.该asyncComponent函数采用了一个参数; 一个function（importComponent），当被调用时将动态导入给定的组件。当我们   使用时，这将更有意义asyncComponent。
    2.在componentDidMount，我们只需调用importComponent传入的函数。并将动态加载的组件保存在状态中。
    3.最后，如果组件已完成加载，我们会有条件地渲染组件。如果不是，我们只是渲染null。但是null，您可以渲染加载微调器而   不是渲染。
2、基于react-router-config这个包实现功能
    1.新增模模块只需要在新增文件夹下增加router。基于require.context获取指定路径下面指定文件名的js(webpack内容)，最终会得到一个Array。碰巧react-router-config此模块的renderRoutes方法接受的三个参数(routes, authed, authPath)。第一个就是arr
然后啪啦啪啦的敲，是不是特别像vue的路由表了
----------------------目前还没添加拦截器。不过react-router-config这货有matchRoutes(routes, pathname)这个。完美解决
