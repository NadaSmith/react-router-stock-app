import React from "react";
import stocks from "../components/Data";
//access the symbol parameter form the URL and finds the matching stock data from the imported "data" array
import { Link, useParams } from "react-router-dom";

//functional component that displays details of specific stock based on its symbol
export default function Stock () {

    //the useParam hook extracts the symbol paramater from URL; this parameter will be part of the URL defined in the Route for the Stock component in App.js
    const { symbol } = useParams();

    const stock = stock.find((s) => 
        s.symbol === symbol
    );

    if (!stock) {
        return  <div>
            Stock not found
        </div>;
    }

    
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

    return (
        <div>
            <h2>{stock.name}</h2>
            <p>Symbol: {stock.symbol}</p>
            <p>Last Price: {stock.lastPrice}</p>
            <p>Change: {stock.change}</p>
            <p>High: {stock.high}</p>
            <p>Low: {stock.low}</p>
            <p>Open: {stock.open}</p>
        </div>
    )
}