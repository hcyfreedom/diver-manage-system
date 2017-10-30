import React from 'react';  //引入react组件
import HeaderTip from '../subNav/HeaderTip'
class StudentList extends React.Component {  //定义组件，也可以用React.createClass方法创建组件
    render() {
        return (
            <div>
                <HeaderTip firstLevel="学员管理"/>
                test router studentList
            </div>
        );
    }
}
export default StudentList;   //将App组件导出