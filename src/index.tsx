'use strict'
import * as React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
window.oncontextmenu = () => false;
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement);
root.render(<App/>);