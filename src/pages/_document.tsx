import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render(){
        return(
            <Html lang='en' className="scroll-smooth">
                <Head />
                <body>
                    <div id='overlays' />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;