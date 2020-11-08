import React, { Component } from 'react';
import { Product } from '../model/Product';

class ProductItem extends Component<Props, {}> {
    constructor(props: any) {
        super(props);

    }
    render() {
        return (


            <div className="productCard">
                <img src={this.props.sanPham.imgProduct} alt="" />
                <div className="nameProduct">
                    <p>{this.props.sanPham.nameProduct}</p>
                </div>
                <div className="price">
                    <p>
                        <span className="afterSale">{this.props.sanPham.afterSale}</span>
                        <span className="beforSale">{this.props.sanPham.beforSale}</span>
                    </p>
                </div>
                <div className="button">
                    <button className="btn btn-primary">Đưa vào giỏ</button>
                </div>
            </div>

        );
    }
}

type Props = {
    sanPham: Product;
}

export default ProductItem;
