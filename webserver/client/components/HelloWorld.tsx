import React from "react";
import { IHelloWorldProps } from '../types/index';

export const HelloWorld: React.FC<IHelloWorldProps<Object>> = ({ data }) => {
  return (
    <div>Initial data served by server: {data}</div>
  )
}
