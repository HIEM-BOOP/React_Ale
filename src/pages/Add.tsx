import React, { Component } from 'react';
import AddProduct from '../components/AddProduct';
import Header from '../components/Header';
import PopUpAddProduct from '../components/PopUpAddProduct';
import ShowAddProduct from '../components/ShowAddProduct';

class Add extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <AddProduct></AddProduct>
                
            </div>
        );
    }
}

export default Add;
