import { stat } from 'fs';
import React, { Component } from 'react';

class PopUpAddProduct extends Component<Props, State>{
    constructor(props: any) {
        super(props)
        this.state = {
            nameProduct: "",
            imgProduct: "",
            beforSale: 0,
            afterSale: 0,
        }
    }
    render() {
        return (
            <div>

                <div className="pop-up" id="popUpEditProduct"><div className="container">
                    <div className="content">
                        <h1 className="title">Nhập thông tin sản phẩm</h1>
                        <div className="item">
                            <label htmlFor="name">Tên sản phẩm</label>
                            <input type="text" id="nameProduct" name="name" placeholder="Nhập tên sản phẩm"
                                onChange={(even) => {
                                    this.setState({
                                        nameProduct: even.target.value,
                                    })
                                    console.log(this.state.nameProduct);
                                }}
                                value={this.state.nameProduct}

                            />

                        </div>
                        <div className="item">
                            <label htmlFor="afterSale">Giá bán</label>
                            <input type="number" id="afterSale" name="afterSale" placeholder="Nhập giá bán"
                                onChange={(event) => {
                                    this.setState({
                                        afterSale: event.target.valueAsNumber
                                    })
                                }}
                                value={this.state.afterSale}
                            />
                        </div>
                        <div className="item">
                            <label htmlFor="beforSale">Giá gốc</label>
                            <input type="number" id="beforSale" name="beforSale" placeholder="Nhập giá gốc"
                                value={this.state.beforSale}
                                onChange={(event) =>
                                    this.setState({
                                        beforSale: event.target.valueAsNumber
                                    })
                                }
                            />
                        </div>
                        <div className="item">
                            <label htmlFor="imgProduct">Hình ảnh sản phẩm</label>
                            <input type="url" id="imgProduct" name="imgProduct" placeholder="Nhập link hình ảnh sản phẩm (Khuyến khích ảnh dạng hình vuông)"
                                onChange={(event) => this.setState({
                                    imgProduct: event.target.value
                                })}
                                value={this.state.imgProduct}
                            />
                        </div>
                        <div className="button-item">
                            <button className="btn btn-primary" onClick={this.dangSP}>Tạo sản phẩm mới</button>
                            <button className="btn btn-outline" onClick={() => this.props.onClose()}>Hủy</button>
                        </div>
                    </div>
                </div></div>
            </div>
        );
    }

    dangSP = () => {

        // Tạo 1 object 
        let Product = {
            idProduct: new Date().getTime(),
            nameProduct: this.state.nameProduct,
            imgProduct: this.state.imgProduct,
            beforSale: this.state.beforSale,
            afterSale: this.state.afterSale,

        };
        //  getItem từ local xuống 
        let data = localStorage.getItem('products')
        // Chuyển sang dạng bình thường 
        let Json = JSON.parse(data || '{}') 
        console.log(Json);

        Json.push(Product);
        localStorage.setItem('products',JSON.stringify(Json));
        
    }


}

type Props = {
    onClose(): void;
}
type State = {
    nameProduct: string,
    imgProduct: string,
    beforSale: number,
    afterSale: number,

}

export default PopUpAddProduct;
