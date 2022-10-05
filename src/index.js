import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRouter from './AppRouter.js';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import getDatasFromDatabase from "./Actions/Actions"

const store=configureStore()


const result=
<Provider store={store}>
    <AppRouter />
</Provider>



ReactDOM.render(<h1>loading</h1>,document.getElementById('root'));
store.dispatch(getDatasFromDatabase()).then(()=>{
    ReactDOM.render(result,document.getElementById('root'));
})


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
