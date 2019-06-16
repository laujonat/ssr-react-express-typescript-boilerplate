// src/public/home.js
import React from "react";
import {hydrate} from "react-dom";
import Counter from "./components/Counter";

hydrate(<Counter />, document.getElementById("ssr"));
