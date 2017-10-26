import React from 'react';  //导入react相关模块
import ReactDOM from 'react-dom';

import {Switch, Router, Route, Redirect, Link} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'
import Panel from './SubNav/Panel'


const history = createHistory();

class Main extends React.Component{
    render(){
        return(
            <Router history={history}>
                <Switch>
                    <Route path="/diver/:id" component={Panel}/>
                </Switch>
            </Router>
        )
    }
}

ReactDOM.render(<Main/>, document.getElementById('app'));  //使用组件并渲染到界面