import React, { Component } from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

class Header extends Component {
    render() {
        return (
            <div className="nav-bar">
                <div className="contaner">
                    <div className="content">
                        <ul className="menu-left-lv1">
                            <li className="menu">
                                <a href="/src/pages/Home.tsx" className = "menu-lv1">Home</a>
                            </li>
                            <li className="menu">
                                <a href="/src/pages/Home.tsx" className = "menu-lv1">Quần áo</a>
                                <ul className="menu-left-lv2">
                                    <li className="menu-lv2">
                                        <a href="">Quần áo nam</a>
                                    </li>
                                    <li className="menu-lv2">
                                        <a href="">Quần áo nữ</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu">
                                <a href="" className = "menu-lv1">Phụ kiện</a>
                            </li>
                            <li className="menu">
                                <a href="" className = "menu-lv1">Đồ điện tử</a>
                                <ul className="menu-left-lv2">
                                    <li className="menu-lv2">
                                        <a href="" >Điện thoại</a>
                                    </li>
                                    <li className="menu-lv2">
                                        <a href="">Đồ gia dụng</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="menu-right-lv1">
                            <li className="menu">
                                <a href="" className = "fas">
                                    <ShoppingCartIcon style={{ fontSize: 25 }} />
                                </a>
                            </li>
                            <li className="menu">
                                <a href="../pages/Add.tsx" className = "fas  fa-box-open">
                                    <ShoppingBasketIcon style={{ fontSize: 25 }} />
                                    <span>Kho Hàng</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
