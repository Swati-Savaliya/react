import React, { useEffect, useState } from 'react';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';

function Product5(props) {
    const [productData, setProduct] = useState([]);
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("");
    const [category, setCategory] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    // spinners
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        // spinners
        setLoading(true);
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setProduct(data);

            let selectCate = [];
            data.forEach((v) => {
                if (!selectCate.includes(v.category)) {
                    selectCate.push(v.category);
                }
            });
            setCategory(selectCate);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleFind = () => {
        let availableItem = productData.filter((v) =>
            v.title.toLowerCase().includes(search) ||
            v.description.toLowerCase().includes(search) ||
            v.price.toString().includes(search)
        );

        availableItem = availableItem.sort((a, b) => {
            if (sort === "lh") {
                return a.price - b.price;
            } else if (sort === "hl") {
                return b.price - a.price;
            } else if (sort === "az") {
                return a.title.localeCompare(b.title);
            } else if (sort === "za") {
                return b.title.localeCompare(a.title);
            }
        });

        if (selectedCategory) {
            availableItem = availableItem.filter((v) => v.category === selectedCategory);
        }

        return availableItem;
    };

    const finalData = handleFind();

    return (
        <div className='container' style={{ backgroundColor: 'pink' }}>
            <div className='row '>
                <h2 className='text-center'>Products Data</h2>
                <div className='mb-3 text-center'>
                    <input
                        type='search'
                        id='searchBox'
                        placeholder='Search'
                        onChange={(event) => setSearch(event.target.value)}
                    />
                    <br />
                    <br />
                    <select onChange={(event) => setSort(event.target.value)}>
                        <option value="0">--sort--</option>
                        <option value="lh">Price: Low to High</option>
                        <option value="hl">Price: High to Low</option>
                        <option value="az">Product: A to Z</option>
                        <option value="za">Product: Z to A</option>
                    </select>

                    <button style={{ background: selectedCategory === '' ? "pink" : "none" }} onClick={() => setSelectedCategory('')}>All</button>

                    {category.map((v) => (
                        <button style={{ background: v === selectedCategory ? "orange" : "white" }} onClick={() => setSelectedCategory(v)} key={v}>{v}</button>
                    ))}
                </div>

                {isLoading ? (
                    <div className="text-center" style={{ marginTop: '20px' }}>
                        <div className="spinner-border text-primary" role="status" style={{ width: '3rem', height: '3rem' }}>
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                ) : (
                    finalData.map((v, i) => (
                        <div className='col-md-4 gy-5' key={i}>
                            <Card style={{ width: '18rem' }}>
                                <img src={v.image} width={"150px"} height={"200px"} className="align-self-center" alt={v.title} />
                                <CardBody>
                                    <CardTitle tag="h5" className='text-truncate'>{v.title}</CardTitle>
                                    <CardSubtitle className="mb-2 text-muted" tag="h6">{v.price}</CardSubtitle>
                                    <CardText className='text-primary-emphasis text-truncate' tag='p'>{v.description}</CardText>
                                    <Button>Add to cart</Button>
                                </CardBody>
                            </Card>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default Product5;
