import React from 'react'
import ReactDom from 'react-dom'
// import App from './App.jsx'
import App from './router/index.js'
import 'normalize.css'
import {Provider} from 'react-redux'
import store from './redux/store/index.js'
import registerServiceWorker from './registerServiceWorker';


// store.subscribe(() => console.log(store.getState()))

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
