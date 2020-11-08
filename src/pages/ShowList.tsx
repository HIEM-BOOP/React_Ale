import React, { Component, StatelessComponent } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ProductItem from '../components/ProductItem';
import Slider from '../components/Slider';
import { Product } from '../model/Product';

class ShowList extends Component<Props, State> {
    constructor(props: any) {
        super(props);
        var data = localStorage.getItem("products");
        var dsdt = JSON.parse(data || "[]");
        this.state = {
            dsSanPham: dsdt

        }
    }
    render() {
        return (
            <div>
                <Header></Header>
                <Slider></Slider>
                <div className="products">
                    <div className="container">
                        <div className="content" id="products">
                            {
                                this.state.dsSanPham.map((item: any) => {
                                    return (
                                        <ProductItem sanPham={item}></ProductItem>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

                <Footer></Footer>
            </div>
        );
    }
}
type Props = {
}
type State = {
    dsSanPham: Product[]
}
export default ShowList;
