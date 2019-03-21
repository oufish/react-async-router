import asyncComponent from "@/units/AsyncComponent";
export default {
    path: "/demo2",
    exact: true,
    component: asyncComponent(()=>import("./index"))
}