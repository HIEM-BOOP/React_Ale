import React, { Component } from 'react';
import BuyerInformation from '../components/BuyerInformation';
import BuyingList from '../components/BuyingList';
import Header from '../components/Header';

class Cart extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <BuyingList></BuyingList>
                <BuyerInformation></BuyerInformation>
            </div>
        );
    }
}

export default Cart;
