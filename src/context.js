import React, { Component } from 'react'
import {storeProducts, detailProduct} from "./data";

const ProducerContext =React.createContext();

class ProductProvider extends Component {
    state={
        products:storeProducts,
        detailProduct:detailProduct
    }
    handleDetail=()=>{
        console.log("details");
    }
    addToCart=()=>{
        console.log("add to cart");
    }
    render() {
        return (
            <ProducerContext.Provider value=
            {{
                ...this.state,
                handleDetail:this.handleDetail,
                addToCart:this.addToCart
            }
            }>
                {this.props.children}
            </ProducerContext.Provider>
        )
    }
}
const ProductConsumer = ProducerContext.Consumer;
export { ProductProvider , ProductConsumer };