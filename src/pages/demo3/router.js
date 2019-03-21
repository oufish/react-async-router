import asyncComponent from "@/units/AsyncComponent";
export default {
    path: "/demo3",
    exact: true,
    component: asyncComponent(()=>import("./index"))
}