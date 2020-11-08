import React, { Component } from 'react';

class CartBuyer extends Component {
    render() {
        return (
            <div className="productInfor" id="carts"><div className="cart">
                <div className="detailInfor">
                    <div className="img-item">
                        <img src="https://scontent.xx.fbcdn.net/v/t1.15752-0/p280x280/124661933_2837771373169541_1330725220471104526_n.jpg?_nc_cat=106&ccb=2&_nc_sid=ae9488&_nc_ohc=oJ9_6cCmFVYAX9s2xl_&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&tp=6&oh=b262ca6c0e9132060fa9990095336b79&oe=5FCD82AE" alt="" className="img" />
                    </div>
                </div>
                <div className="detailInfor"><span>Iphone 20</span></div>
                <div className="detailInfor">
                    <span className="afterSale">1đ</span>
                    <span className="beforSale">20đ</span>
                </div>
                <div className="detailInfor">
                    <input type="number" min={1} id="quantityProduct"  defaultValue={1} />
                </div>
                <div className="detailInfor">
                    <span>1đ</span>
                </div>
                <div className="detailInfor">
                    <i className="fas fa-trash" aria-hidden="true" />
                </div>
            </div>
               </div>
        );
    }
}

export default CartBuyer;
