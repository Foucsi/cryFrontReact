import Head from "next/head";

// redux imports
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import user from "../reducers/user";

const store = configureStore({
  reducer: { user },
});

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div>
        <Head>
          <title>MSM</title>
        </Head>
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}

export default App;
