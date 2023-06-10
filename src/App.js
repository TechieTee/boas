import Layout from "./component/Layout/Layout";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import Home from "./pages/Home";
import { Route } from "wouter";

function App() {
    return (
        <Layout>
             <Route path="/" component={Home} />
  <Route path="/page-one" component={PageOne} />
  <Route path="/page-two" component={PageTwo} />
          
        </Layout>
    );
}

export default App;


