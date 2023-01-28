import Head from "next/head";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
`;

function App({ Component, pageProps }) {
  return (
    <Container>
      <Head>
        <title>Next.js App</title>
      </Head>
      <Component {...pageProps} />
    </Container>
  );
}

export default App;
