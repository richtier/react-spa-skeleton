import React from 'react';
import { render } from "react-dom";

import './App.css';
import App from './entrypoints/App'


const rootElement = document.getElementById('root');

render(<App />, rootElement)
