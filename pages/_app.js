function GlobalStyle() {
    return (
      <style global jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          list-style: none;
        }
        body {
          font-family: 'Open Sans', sans-serif;
        }
        ::-webkit-scrollbar {
          width: 17px;
        }
        ::-webkit-scrollbar-track {
          box-shadow: inset 0 0 5px grey; 
          border-radius: 6px;
        }
        ::-webkit-scrollbar-thumb {
          background: #6495ED; 
          border-radius: 6px;
        }
        /* App fit Height */ 
        html, body, #__next {
          min-height: 100vh;
          display: flex;
          flex: 1;
        }
        #__next {
          flex: 1;
        }
        #__next > * {
          flex: 1;
        }
        /* ./App fit Height */ 
      `}</style>
    );
  }

export default function CustomApp({ Component, pageProps}) {
    console.log('Roda em todas as páginas!')
    return <>
            <GlobalStyle/>
            <Component {...pageProps} />
        </>
}