import React, { useEffect, useState } from 'react';

function Product5(props) {
        const [productData, setProduct] = useState ([])

    useEffect(() =>{
        getData();
    },[]);

    const getData = async () => {
        const response = await fetch ('https://fakestoreapi.com/products')
        const data = await response.json()
        console.log(data);

        setProduct(data)
    }
    return (
        <div>
            {
                productData.map((v,i) => (
                    <>
                    <p>{v.title}</p>
                    <h2>{v.price}</h2>
                    <img src={v.image} width={"150px"} height={"150px"} />
                    </>
                ))
            }
        </div>
    );
}

export default Product5;

