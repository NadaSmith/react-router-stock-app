import React from "react";

export default function Stock (props) {
    
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
            <h2>{name}</h2>
            <p>Symbol: {symbol} </p>
            <p>Last Price: {lastPrice} </p>
            <p>Change: {change} </p>
            <p>High: {high} </p>
            <p>Low: {low} </p>
            <p>Open: {open} </p>
        </div>
    )
}