import React from 'react';
import Loadable from 'react-loadable';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import Layout from './hoc/layout';
// import Index from './pages/index';
import Loading from './components/loading';

const Index = Loadable({
    loader: () => import('./pages/index'),
    loading: Loading,
  });

const SignUp = Loadable({
loader: () => import('./pages/signup'),
loading: Loading,
});

const SignUp2 = Loadable({
    loader: () => import('./pages/signup2'),
    loading: Loading,
});
const SignUp3 = Loadable({
    loader: () => import('./pages/signup3'),
    loading: Loading,
});

const Routes = (props) => {
    return (
        <Layout>
            <BrowserRouter>
                <Switch>
                    <Route path="/signup3" exact component={SignUp3}/>
                    <Route path="/signup2" exact component={SignUp2}/>
                    <Route path="/signup" exact component={SignUp}/>
                    <Route path="/" component={Index}/>
                    {/* <PrivateRoute path="/protected" component={Protected} /> */}
                </Switch>
            </BrowserRouter>
        </Layout>
    )
}

export default Routes;