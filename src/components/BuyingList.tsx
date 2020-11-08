import React, { Component } from 'react';
import CartBuyer from './CartBuyer';

class BuyingList extends Component {
    render() {
        return (
            <div>
                <div className="buyingList">
                    <div className="container">
                        <div className="content">
                            <h1 className="title">Giỏ hàng của bạn</h1>
                            <div className="headList">
                                <div className="item-headList" />
                                <div className="item-headList"><span>Sản phẩm</span></div>
                                <div className="item-headList"><span>Đơn giá</span></div>
                                <div className="item-headList"><span>Số lượng</span></div>
                                <div className="item-headList"><span>Tổng tiền</span></div>
                                <div className="item-headList"><span>Thao tác</span></div>
                            </div>
                            <div className="productInfor" id="carts" />
                            <CartBuyer></CartBuyer>
                            <CartBuyer></CartBuyer>

                            <div className="cart">
                                <div className="detailInfor" />
                                <div className="detailInfor" />
                                <div className="detailInfor" />
                                <div className="detailInfor">
                                    <h1>Tổng</h1>
                                </div>
                                <div className="detailInfor" id="totalAmounts">
                                    <h1>1đ</h1>
                                </div>
                                <div className="detailInfor" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default BuyingList;
