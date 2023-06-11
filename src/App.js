import Layout from "./component/Layout/Layout";
import Women from "./pages/Women";
import Men from "./pages/Men";
import Home from "./pages/Home";
import { Route } from "wouter";
import { Helmet } from "react-helmet";

function App() {
    return (<> <Helmet>
        <meta charSet="utf-8" />
        <title>BOAS | Shop sustainable fashion and pre owned jeans</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="Helmet application" />
    </Helmet>
        <Layout>
             <Route path="/" component={Home} />
  <Route path="/page-one" component={Women} />
  <Route path="/page-two" component={Men} />
          
        </Layout></>
    );
}

export default App;


