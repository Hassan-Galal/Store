import React, { Component } from 'react'
import Title from "./Title";
import Product from "./Product";
import {storeProducts} from "../data";
import {ProductConsumer} from "../context";
export default class ProductList extends Component {
    state = {
        products:storeProducts
    };
    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title ftitle="Online" sectitle="Store" />

                        <div className="row">
                            <ProductConsumer>
                                { value=>{
                                        return value.products.map(
                                            product=>{
                                                return (
                                                <Product key={product.id} product={product} />
                                                )
                                            }
                                        );                                        
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
