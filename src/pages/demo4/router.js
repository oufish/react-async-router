import asyncComponent from "@/units/AsyncComponent";
export default {
    path: "/demo4",
    component: asyncComponent(() => import("./index")),
    routes: [
        {
            path: "/demo4/child1",
            component: asyncComponent(() => import("./components/child1"))
        },
        {
            path: "/demo4/child2",
            component: asyncComponent(() => import("./components/child2"))
        },
        {
            path: "/demo4/child3",
            component: asyncComponent(() => import("./components/child3"))
        },
        {
            path: "/demo4/child4",
            component: asyncComponent(() => import("./components/child4"))
        }
    ]
}