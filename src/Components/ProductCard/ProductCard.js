import React from "react";
import './card.css'

class ProductCard extends React.Component{
    render(){
        return (
                    <div class="card" >
                    <img class="card-img-top" src={this.props.image} alt="Card image cap"/>
                    <div class="card-body">
                    <h5 class="card-title">{this.props.title}</h5>
                    <p class="card-text">{this.props.price}</p>
                    <a href="#" class="btn btn-outline-success">Detail</a>
                    </div>
                    </div>
        );
    }
}

export default ProductCard;