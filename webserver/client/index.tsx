// src/public/home.js
import React from 'react'
import ReactDOM from 'react-dom'
import Counter from './components/Counter'

ReactDOM.hydrate(
    <Counter />,
    document.getElementById('ssr')
)
