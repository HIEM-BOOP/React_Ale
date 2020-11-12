import React, { Component } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { Product } from '../model/Product';
import PopUpUpdate from './PopUpUpdate';


class ShowAddProduct extends Component<Props, State> {
    constructor(props: any) {
        super(props);
      
    }
    render() {
        return (
           
                            <div className="productCard">
                                <div className="setting">
                                    <span className="material-icons" onClick={(event) => {
                                        this.props.onDelete(this.props.sanPham.idProduct)
                                    }}><DeleteIcon style={{ fontSize: 30 }} /></span>
                                </div>
                                <img
                                    src={this.props.sanPham.imgProduct}
                                    alt=""
                                />
                                <div className="nameProduct">
                                    <p>{this.props.sanPham.nameProduct} </p>
                                </div>
                                <div className="price">
                                    <p>
                                        <span className="afterSale">{this.props.sanPham.afterSale}</span>
                                        <span className="beforSale">{this.props.sanPham.beforSale}đ</span>
                                    </p>
                                </div>
                                <div className="button">
                                    <button className="btn btn-primary" onClick = {(event) => {this.props.turnOn(this.props.sanPham.idProduct)}}

                                    >Chỉnh sửa</button>
                                </div>
                                
                            </div>


                       
        );
    }
  
}


type Props = {

    onDelete(id: number): void;
    turnOn(id : number) : void ; 
    sanPham: Product;
}
type State = {
    
}
export default ShowAddProduct;
