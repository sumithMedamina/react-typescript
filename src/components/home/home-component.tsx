import { useEffect, useState } from "react";
import axios from "axios";
import { FakestoreContract } from "../../contracts/FakeStoreContract";


export function HomeComponent(){
    const [categories, setCategories] = useState<string[]>([]);
    const [products, setProducts] = useState<FakestoreContract[]>([]);

function LoadCategories(){
 axios({
    method:"GET",
    url: "https://fakestoreapi.com/products/categories"
 }).then(response =>{
    setCategories(response.data);
 })
}

function LoadProducts(){
    axios({
        method:"GET",
        url:"https://fakestoreapi.com/products"
    }).then(response => {
        setProducts(response.data);
    })
}

function handleCategoryChange(e:any){
    console.log(e.target.value);
    if(e.target.value==="all"){
        LoadProducts();
    }else{
        axios({
            method:"Get",
            url:`https://fakestoreapi.com/products/category/${e.target.value}`
        }).then(response =>{
            setProducts(response.data);
        })
    }

}

useEffect(() =>{
    LoadCategories();
    LoadProducts();
},[])

    return(
        <div className="container-fluid">
            <h2>Shopping Home</h2>
             <select onChange={handleCategoryChange} style={{textTransform:"capitalize"}} className="form-select w-25" name="" id="">
                <option value="all" >Select-Category</option>
                {
                    categories.map(category =>
                        <option key={category} className="">{category}</option>
                    )
                }
             </select>
             <hr />
             <ol>
                {
                    products.map(item =>
                        <li key={item.id}>{item.title}</li>
                    )
                }
             </ol>
        </div>
    )
}