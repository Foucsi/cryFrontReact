import Head from "next/head";
import styled from "styled-components";

// redux imports
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import user from "../reducers/user";

const Container = styled.div`
  height: 100vh;
`;

const store = configureStore({
  reducer: { user },
});

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Container>
        <Head>
          <title>Next.js App</title>
        </Head>
        <Component {...pageProps} />
      </Container>
    </Provider>
  );
}

export default App;
