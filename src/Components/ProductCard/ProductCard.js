import React from "react";
import './card.css'

class ProductCard extends React.Component{
    render(){
        return (
                    <div className="card" >
                        <div className="image-box">
                        <img className="card-img-top" src={this.props.image} alt="Card image cap"/>
                    <div className="card-body">
                    <h5 className="text-box">{this.props.title}</h5>
                    <p className="text-price">{this.props.price}</p>
                    <a href="#" className="btn btn-warning">Detail</a>
                    </div>
                    </div>
                        </div>
        );
    }
}

export default ProductCard;