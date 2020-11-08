import React, { Component } from 'react';
import PopUpAddProduct from './PopUpAddProduct';
import ShowAddProduct from './ShowAddProduct';
import { Product } from '../model/Product';
import PopUpUpdate from './PopUpUpdate';


class AddProduct extends Component<{}, State> {
    constructor(props: any) {
        super(props);
        var data = localStorage.getItem("products");
        var dsdt = JSON.parse(data || "[]");
        this.state = {
            showPopUpEdit : false,
            showPopUp: false,
            dsSanPham : dsdt,
        }
    }
    render() {
        return (
            <div>

                <div className="them-sp">
                    <div className="container">
                        <div className="content">
                            <div className="addProduct">
                                <h1 className="title">DANH SÁCH SẢN PHẨM TRONG KHO</h1>
                                <button onClick={this.tatMoPopUp} className="btn btn-primary">Thêm sản phẩm</button>
                            </div>
                        </div>
                    </div>
                </div>

               {
                   this.state.dsSanPham.map((item : any) => {
                        return (
                            <ShowAddProduct 
                             onDelete = {this.onDelete} sanPham = {item}></ShowAddProduct>

                        )
                   })
               }
               


                {this.state.showPopUp && <PopUpAddProduct onClose={this.closeModel}></PopUpAddProduct>}
                
            </div>
        );
    }
    tatMoPopUp = () => {
        this.setState({
            showPopUp: true
        })
    }

    tatPopUpEdit = () => {
        this.setState({
            showPopUpEdit : false
        })
        console.log('Mở');
        
    }
    moPopUpEdit = () => {
        this.setState({
            showPopUpEdit : true
        })
    }
    closeModel = () => {
        this.setState({
            showPopUp: false
        })
    }
    onDelete = (id : number) => {
        var data = localStorage.getItem("products");
        var dsdt = JSON.parse(data || "[]");
        console.log(id);
        let danhSachSPMoi = [] as Product[];
        this.state.dsSanPham.forEach((item) => {
            if(id != item.idProduct){
                danhSachSPMoi.push(item);
            }
        })
        this.setState({
            dsSanPham : danhSachSPMoi

        })
        var local =  localStorage.setItem('products',JSON.stringify(danhSachSPMoi))
        
    }

    
}

type Props = {

}
type State = {
    showPopUpEdit : boolean,
    showPopUp: boolean,
    dsSanPham : Product[]
}
export default AddProduct;