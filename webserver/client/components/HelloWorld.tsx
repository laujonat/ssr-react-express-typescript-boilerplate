import * as React from "react";

interface HelloWorldProps {
  Title?: string;
  Content: string;
}

export const HelloWorld: React.FC<HelloWorldProps> = ({ Content, Title }) => {
  return (
    <div>{Content}</div>
  )
  }
