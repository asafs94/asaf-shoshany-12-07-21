import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ThemeProvider from './contexts/theme/theme.provider';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import UserPreferencesProvider from './contexts/user-preferences/user-preferences.provider';
import history from './router/history';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <UserPreferencesProvider>
        <Router history={history}>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </Router>
      </UserPreferencesProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
