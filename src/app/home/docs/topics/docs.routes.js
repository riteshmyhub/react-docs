import IntroRoutes from "./Intro/IntroRoutes.js";
import JsxRoutes from "./Jsx/JsxRoutes.js";
import StylingRoutes from "./styling/StylingRoutes";
import ConditionalRenderingRoutes from "./conditional-rendering/ConditionalRenderingRoutes";
import HandlingEventsRoutes from "./HandlingEvents/HandlingEventsRoutes";
import ListRenderingRoutes from "./list-rendering/ListRenderingRoutes";
import ComponentRoutes from "./react-component/ComponentRoutes";
import StateRoutes from "./state/StateRoutes";
import PropsRoutes from "./props/PropsRoutes";
import FormRoutes from "./form-handling/FormRoutes";
import LifeCycleRuotes from "./life-cycle/LifeCycleRuotes";

const docsRoutes = [
  {
    title: "introduction and setup",
    path: "intro",
    component: () => <IntroRoutes />,
    list: [
      { name: "introduction", path: "introduction" },
      { name: "set-up", path: "set-up" },
      { name: "booting", path: "booting" },
    ],
  },
  {
    title: "jsx",
    path: "jsx",
    component: () => <JsxRoutes />,
    list: [
      { name: "what is jsx", path: "what-is-jsx" },
      { name: "Jsx Rules", path: "rules-of-jsx" },
      { name: "fragment", path: "fragment" },
    ],
  },
  {
    title: "styling",
    path: "styling",
    component: () => <StylingRoutes />,
    list: [
      { name: "style sheets", path: "style-sheets" },
      { name: "inline styles", path: "inline-styles" },
      { name: "css module", path: "css-module" },
      { name: "styled component", path: "styled-component" },
    ],
  },
  //componet
  {
    title: "components",
    path: "components",
    component: () => <ComponentRoutes />,
    list: [
      { name: "what is components", path: "what-is-components" },
      { name: "function component", path: "function-component" },
      { name: "class component", path: "class-component" },
    ],
  },
  {
    title: "state",
    path: "state",
    component: () => <StateRoutes />,
    list: [
      {
        name: "what is state",
        path: "what-is-state",
      },
      {
        name: "state in function component",
        path: "state-in-function-component",
      },
      {
        name: "state in class component",
        path: "state-in-class-component",
      },
    ],
  },
  {
    title: "props",
    path: "props",
    component: () => <PropsRoutes />,
    list: [
      {
        name: "what is props",
        path: "what-is-props",
      },
      {
        name: "props in function component",
        path: "props-in-function-component",
      },
      {
        name: "props in class component",
        path: "props-in-class-component",
      },
    ],
  },
  {
    title: "conditional rendering",
    path: "conditional_rendering",
    component: () => <ConditionalRenderingRoutes />,
    list: [
      { name: "if-else", path: "if-else" },
      { name: "element-variables", path: "element-variables" },
      { name: "ternary-operator", path: "ternary-operator" },
      { name: "short circuit operator", path: "short-circuit-operator" },
    ],
  },
  {
    title: "event handling",
    path: "event_handling",
    component: () => <HandlingEventsRoutes />,
    list: [
      { name: "function component events", path: "function-component-events" },
      { name: "class component events", path: "class-component-events" },
    ],
  },
  {
    title: "list rendering",
    path: "list_rendering",
    component: () => <ListRenderingRoutes />,
    list: [
      { name: "what is list rendering", path: "what-is-list-rendering" },
      { name: "array list", path: "array-list" },
      { name: "array of objects list", path: "array-of-objects-list" },
      { name: "nested array list", path: "nested-array-list" },
    ],
  },

  {
    title: "life cycle method",
    path: "life_cycle_method",
    component: () => <LifeCycleRuotes />,
    list: [
      {
        name: "what is life cycle method",
        path: "what-is-life-cycle-method",
      },
      {
        name: "constructor",
        path: "constructor",
      },
      {
        name: "render method",
        path: "render-method",
      },
      {
        name: "componentDidMount",
        path: "component-did-mount",
      },
      {
        name: "componentDidUpdate",
        path: "component-did-update",
      },
      {
        name: "shouldComponentUpdate ",
        path: "should-component-update",
      },
      {
        name: "componentWillUnmount",
        path: "component-will-unmount",
      },
      
    ],
  },
  //form
  {
    title: "form handling",
    path: "form_handling",
    component: () => <FormRoutes />,
    list: [
      { name: "what is form handling", path: "what-is-form-handling" },
      { name: "BasicForm", path: "basic-form" },
      { name: "basic form validation", path: "basic-form-validation" },
    ],
  },
  {
    title: "hooks",
    path: "hooks",
    component: () => <p>hooks</p>,
    list: [],
  },
  //props & state
  {
    title: "routing",
    path: "routing",
    component: () => <p>routing</p>,
    list: [],
  },
];

export { docsRoutes };
