/**
 * Created by hcy on 2017/4/15.
 */
import React from 'react'
import CartTopNav from './CartTopNav'
import Cart from './Cart'
import CartTotal from './CartTotal'
export default class CartHomePage extends React.Component{
    render(){
        console.log('123')
        return(
            <div>qqq
                <CartTopNav navTitle="购物车"/>
                <Cart/>
                <div style={{width:'100%',height:'280px'}}></div>
                <CartTotal className="cartTotal"/>
            </div>
        )
    }
}