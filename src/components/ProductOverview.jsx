import React from 'react'
import { productRecords } from '../data/productDetails.js'

export default function ProductOverview() {

    // const filterByCategory = productRecords.filter((item) => item.price > 3000 )
    const allRecords = productRecords.map((item) => (
        <tr key={item.id}>

            <th scope="row">{item.id}</th>
            <td>{item.name}</td>
            <td>{item.category}</td>
            <td>₹ {item.price}</td>
        </tr>
    ))

    // const findByName = productRecords.find((product) => product.name === "Smartphone");
    // const findIndex = productRecords.findIndex((product)=> product.name === "Burger");
    // const itemFound = <tr key={findByName.id}>
    //     <th scope="row">{findByName.id}</th>
    //     <td>{findByName.name}</td>
    //     <td>{findByName.category}</td>
    //     <td>{findByName.price}</td>
    // </tr>

    const totalCostOfAllProducts = productRecords.reduce((acc, product) => (acc + product.price), 0)

    const sortByPrice = [...productRecords].sort((a, b) => a.price - b.price)
    const sortByPriceDisplay = sortByPrice.map((item) => (
        <tr key={item.id}>

            <th scope="row">{item.id}</th>
            <td>{item.name}</td>
            <td>{item.category}</td>
            <td>₹ {item.price}</td>
        </tr>
    ))

    const sortByName = [...productRecords].sort((a, b) => a.name.localeCompare(b.name))
    const sortByNameDisplay = sortByName.map((item) => (
        <tr key={item.id}>

            <th scope="row">{item.id}</th>
            <td>{item.name}</td>
            <td>{item.category}</td>
            <td>₹ {item.price}</td>
        </tr>
    ))

    const sortByCategory = [...productRecords].sort((a, b) => a.category.localeCompare(b.category))
    const sortByCategoryDisplay = sortByCategory.map((item) => (
        <tr key={item.id}>

            <th scope="row">{item.id}</th>
            <td>{item.name}</td>
            <td>{item.category}</td>
            <td>₹ {item.price}</td>
        </tr>
    ))
    return (
        <div className='container p-4'>
            <h1>Product Overview</h1><br />
            <h4>Product Count  {productRecords.length}</h4><br />
            <h4>Product Gross Price  : ₹ {totalCostOfAllProducts}</h4><br />
            <table className="table  mt-4 ">
                <thead>
                    <tr>
                        <th scope="col">SrNo.</th>
                        <th scope="col">Name</th>
                        <th scope="col">Category</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody >
                    <tr>
                        <th colspan='4'>Original Record</th>
                    </tr>
                    {allRecords}
                    <tr>
                        <th>Sort By Price</th>
                    </tr>
                    {sortByPriceDisplay}
                    <tr>
                        <th>Sort By Name</th>
                    </tr>
                    {sortByNameDisplay}
                    <tr>
                        <th>Sort By Category</th>
                    </tr>
                    {sortByCategoryDisplay}
                </tbody>
            </table>
        </div>
    )
}
