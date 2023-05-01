import '@/styles/globals.css'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import Layout from '../components/_App/Layout';
import { SWRConfig } from 'swr';


let persistor = persistStore(store);

export default function App({ Component, pageProps }) {
  return (
    <>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </PersistGate>
        </Provider>
    </>
  )
}
