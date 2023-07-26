import React from "react";
import { Link } from "react-router-dom";
import stocks from "./Data";

export default function Dasbhoard () {
    return (
        <div>
            <h2>All Stocks</h2>
            <ul>
                {stocks.map((stock) => (
                   <li key={stock.symbol}>
                        <Link to={`/stock/${stock.symbol}`}>
                            <h2>{stock.name}</h2>
                        </Link>
                   </li>
                ))}
            </ul>
        </div>
    )
}