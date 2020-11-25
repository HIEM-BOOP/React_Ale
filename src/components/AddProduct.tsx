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
            showPopUpEdit: false,
            showPopUp: false,
            dsSanPham: dsdt,
            sanPham: { idProduct: 0, nameProduct: " 7", imgProduct: "pg", beforSale: 0, afterSale: 0 }
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
                <div className="pr">
                    <div className="products">
                        <div className="container">
                            <div className="content" id="products">

                                {
                                    this.state.dsSanPham.map((item: any) => {
                                        return (
                                            <ShowAddProduct turnOn={this.onUpDate}
                                                onDelete={this.onDelete} sanPham={item}
                                                spOBJ={(event) => {
                                                    let Mang = {}
                                                    Mang = event
                                                    this.setState({ sanPham: event })
                                                    console.log(this.state.sanPham)

                                                }}

                                            ></ShowAddProduct>

                                        )
                                    })
                                }

                            </div>
                        </div>
                    </div>
                </div>

                {this.state.showPopUp && <PopUpAddProduct onClose={this.closeModel}></PopUpAddProduct>}
                {this.state.showPopUpEdit && <PopUpUpdate turnOff={this.tatPopUpEdit}  > </PopUpUpdate>}
            </div>
        );
    }
    // PopUp chỉnh sữa 
    onUpDate = (id: number) => {
        this.setState({
            showPopUpEdit: true
        })
        console.log(id);
    }
    tatPopUpEdit = () => {
        this.setState({
            showPopUpEdit: false
        })
    }
    tatMoPopUp = () => {
        this.setState({
            showPopUp: true
        })
    }
    // Hàm truyền thông tin Product 



    closeModel = () => {
        this.setState({
            showPopUp: false
        })
    }
    onDelete = (id: number) => {
        var data = localStorage.getItem("products");
        var dsdt = JSON.parse(data || "[]");
        console.log(id);
        let danhSachSPMoi = [] as Product[];
        this.state.dsSanPham.forEach((item) => {
            if (id != item.idProduct) {
                danhSachSPMoi.push(item);
            }
        })
        this.setState({
            dsSanPham: danhSachSPMoi

        })
        var local = localStorage.setItem('products', JSON.stringify(danhSachSPMoi))

    }


}


type State = {
    showPopUpEdit: boolean,
    showPopUp: boolean,
    dsSanPham: Product[],
    sanPham: {}
}
export default AddProduct;
