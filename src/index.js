import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import countryStore from "./store/countries/country-store";
import reportWebVitals from './reportWebVitals';
import regionsStore from "./store/store-regions/regions-store";
function rerender() {
    ReactDOM.render(
        <App store={countryStore} reigionStore={regionsStore}/>,
        document.getElementById('root')
    );
}
countryStore.setUpdate(rerender);
regionsStore.setOnUpdate(rerender);
rerender();
rerender();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
