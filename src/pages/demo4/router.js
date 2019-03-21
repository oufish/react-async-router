import asyncComponent from "@/units/AsyncComponent";
export default {
    path: "/demo4",
    exact: true,
    component: asyncComponent(()=>import("./index"))
}