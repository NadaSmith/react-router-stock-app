import React from "react";
import stocks from "../data";

export default function Stock () {
    
    /* props.stock object
    const stock = (props) => {
        const name = props.stock;
        const symbol = props.stock;
        const lastPrice = props.stock;
        const change = props.stock;
        const high = props.stock;
        const low = props.stock;
        const open = props.stock;
    }*/

    //deconstructing to extract properties from props.stock
    const Stock = (props) => {
        const { name, symbol, lastPrice, change, high, low, open } = props.stock;
    }

    return (
        <div>
            <h2>{stocks.name}</h2>
            <p>Symbol: {stocks.symbol}</p>
            <p>Last Price: {stocks.lastPrice}</p>
            <p>Change: {stocks.change}</p>
            <p>High: {stocks.high}</p>
            <p>Low: {stocks.low}</p>
            <p>Open: {stocks.open}</p>
        </div>
    )
}