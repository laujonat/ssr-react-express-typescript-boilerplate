declare module "react";
declare module "rollup-plugin-typescript";
declare module "rollup-plugin-node-resolve";
declare module "rollup-plugin-local-resolve";
declare module "rollup-plugin-babel";
declare namespace JSX {
    interface IntrinsicElements {
      div: any;
      h1: any;
      button: any;
    }
}
