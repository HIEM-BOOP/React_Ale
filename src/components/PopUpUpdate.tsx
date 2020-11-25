import React, { Component } from 'react';
import { Product } from '../model/Product';

class PopUpUpdate extends Component<Props , State> {
    constructor(props: any) {
        super(props);

    }
    render() {
        return (
            <div>
                <div className="pop-up"  id="popUpEditProduct"><div className="container">
                    <div className="content">
                        <h1 className="title">Chỉnh sửa thông tin sản phẩm</h1>
                        <div className="item">
                            <label htmlFor="name">Tên sản phẩm</label>
                            <input type="text" id="nameProduct" name="name" defaultValue="Iphone 20" />
                        </div>
                        <div className="item">
                            <label htmlFor="afterSale">Giá bán</label>
                            <input type="number" id="afterSale" name="afterSale" defaultValue={1} />
                        </div>
                        <div className="item">
                            <label htmlFor="beforSale">Giá gốc</label>
                            <input type="number" id="beforSale" name="beforSale" defaultValue={20} />
                        </div>
                        <div className="item">
                            <label htmlFor="imgProduct">Hình ảnh sản phẩm</label>
                            <input type="url" id="imgProduct" name="imgProduct" defaultValue="https://scontent.fdad2-1.fna.fbcdn.net/v/t1.0-9/123927278_2440326366272540_6376597531101614378_n.jpg?_nc_cat=110&ccb=2&_nc_sid=8bfeb9&_nc_ohc=2m3jhXBdX5gAX820BVf&_nc_ht=scontent.fdad2-1.fna&oh=518e7618c00a9755e4c0891497c94fef&oe=5FCCE83A" />
                        </div>
                        <div className="button-item">
                            <button className="btn btn-primary" >Lưu</button>
                            <button className="btn btn-outline" onClick = {() => {
                                this.props.turnOff()
                            }}>Hủy</button>
                        </div>
                    </div>
                </div></div>
            </div>
        );
    }
}
type Props = {
   turnOff () : void
//      Props Truyền thông tin Sản PHẨM = { ID ,  hÌNH .....}
// sanPham: Product;

}
type State = {

}
export default PopUpUpdate;
