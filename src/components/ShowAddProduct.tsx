import React, { Component } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { Product } from '../model/Product';
import PopUpUpdate from './PopUpUpdate';


class ShowAddProduct extends Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            onEdit : false
        }
    }
    render() {
        return (
            <div className = "pr">
                <div className="products">
                    <div className="container">
                        <div className="content" id="products">
                            <div className="productCard">
                                <div className="setting">
                                    <span className="material-icons" onClick = {(event) => {
                                        this.props.onDelete(this.props.sanPham.idProduct)
                                    }}><DeleteIcon style={{ fontSize: 30 }} /></span>
                                </div>
                                <img
                                    src= {this.props.sanPham.imgProduct}
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
                                    <button className="btn btn-primary" onClick = 
                                    
                                    {this.onUpDate}
                                    
                                    >Chỉnh sửa</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>;
                {this.state.onEdit && <PopUpUpdate  turnOff ={this.tatPopUpEdit}></PopUpUpdate>}
            </div>
        );
    }
    onUpDate = () =>{
        this.setState({
            onEdit : true
        })
        console.log(this.state.onEdit);
        
    }
    tatPopUpEdit = () => {
        this.setState({
            onEdit : false
        })
        console.log('Mở');
       
}
}
type Props = {
    
    onDelete(id : number) : void;
    sanPham: Product;
}
type State = {
    onEdit : boolean,
}
export default ShowAddProduct;
