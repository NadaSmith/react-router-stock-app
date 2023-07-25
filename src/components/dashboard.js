import React from "react";
import { Link } from "react-router-dom";
import stocks from "../data";

export default function Dasbhoard () {
    return (
        <div>
            <h2>All Stocks</h2>
            <ul>
                {stocks.map((stocks) => (
                    <li key={stocks.symbol}>
                        {stocks.name} - {stocks.symbol}
                    </li>
                ))}
            </ul>
        </div>
    )
}