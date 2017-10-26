import React from 'react';  //导入react相关模块
import ReactDOM from 'react-dom';
import App from './Order/App.js';  //导入App组件所在的模块文件
import SubNav from './SubNav/SubNav';

class Main extends React.Component {
    render () {
        return (
            <App/>
        )
    }
}

ReactDOM.render(<Main/>, document.getElementById('app'));  //使用组件并渲染到界面