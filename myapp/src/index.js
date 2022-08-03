import React ,{Suspense}from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'react-toastify/dist/ReactToastify.css';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { legacy_createStore as createStore} from 'redux'

import { Provider } from 'react-redux';
import { roots } from './Redux/Reducer';
import Loading from './Pages/Loading';
const App=React.lazy(()=>import("./App"))


const root = ReactDOM.createRoot(document.getElementById('root'));
const store=createStore(roots)
root.render(
  <PayPalScriptProvider options={ {"client-id":"ARM8FWnUTM3GwkWCDHkiGb7lE1aCDNkgZ152b0FQfEossr40JvwsbYcFQXSpCdhYLusrCP899s9F1Bx2"}}>
  <Provider store={store}>
  <BrowserRouter>
<Suspense fallback={<Loading/>}>
<App />
</Suspense>

</BrowserRouter>
</Provider>
</PayPalScriptProvider>
  
  
  
);


