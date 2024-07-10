import { useDispatch } from "react-redux";
import { addToCart } from "../slicers/cart-slicers";
import { useEffect, useState } from "react";
import { FakestoreContract } from "../contracts/FakeStoreContract";
import axios from "axios";


export function ProductsCatalog(){
    const dispatch = useDispatch();

    const handleAddToCart = (product:any) =>{
            dispatch(addToCart(product));
    }

    const[products,setProducts] = useState<FakestoreContract[]>([]);

    useEffect(()=>{
        axios({
            method:"Get",
            url:"http://fakestoreapi.com/products"
        }).then(response =>{
            setProducts(response.data);
        })
    })

    return(
        <div className="container-fluid p-0">
            <header className="bg-black text-white p-2">
            <h2>Shopping Catalog</h2>
            </header>
            <div className="d-flex flex-wrap justify-content-start">
                {
                    products.map(item =>
                        <div key={item.id} className="card m-2" style={{width:'220px'}} >
                            <div className="card-header">
                                <img src={item.image} height="150" width="200" alt="" />
                            </div>
                            <div className="card-body">
                                    <p>{item.title}</p>
                            </div>
                            <div className="card-footer">
                                    <p>{item.rating.rate}</p>
                                    <button onClick={() =>handleAddToCart(item)}>add to cart</button>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}