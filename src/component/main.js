import React from 'react';  //导入react相关模块
import ReactDOM from 'react-dom';

import {Switch, Router, Route, Redirect, Link} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'
import Panel from './subNav/Panel'


import {Provider} from 'react-redux';
import configureStore from '../store/configureStore';

let store = configureStore();
const history = createHistory();

class Main extends React.Component{
    render(){
        return(
            <Provider store={store}>
                <Router history={history}>
                    <Switch>
                        <Route path="/diver/:id" component={Panel}/>
                    </Switch>
                </Router>
            </Provider>
        )
    }
}

ReactDOM.render(<Main/>, document.getElementById('app'));  //使用组件并渲染到界面