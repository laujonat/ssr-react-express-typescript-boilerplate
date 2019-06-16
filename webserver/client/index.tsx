// src/public/home.js
import React from "react";
import {hydrate} from "react-dom";
import {HelloWorld} from "./components/HelloWorld";

hydrate(<HelloWorld Content="It works!"/>, document.getElementById("ssr"));
