import Document, { Head, Main, NextScript } from "next/document";
import flush from "styled-jsx/server";
import stylesheet from "../styles/application.scss";

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage();
    const styles = flush();
    return { html, head, errorHtml, chunks, styles };
  }

  render() {
    return (
      <html>
        <Head>
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
          <link rel="icon" type="image/x-icon" href="/static/logo.ico?v=2" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
