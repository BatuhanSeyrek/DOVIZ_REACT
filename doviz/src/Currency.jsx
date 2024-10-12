import React from "react";
import "../src/css/currency.css";
import { useState } from "react";
import axios from "axios";
let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "fca_live_7BWcA7VeJeUiujugeUlizbpJoFo6Q0zqO2GxcDq2";

function Currency() {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("TRY");
  const [result, setResult] = useState(0);

  const exchange = async () => {
    const reponse = await axios.get(
      `${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`
    );
    const result = (reponse.data.data[toCurrency] * amount).toFixed(2);
    setResult(result);
  };

  return (
    <div style={{ flexDirection: "column" }} className="currency-div">
      <div
        style={{
          width: "100%",
          fontFamily: "arial",
          backgroundColor: "black",
          color: "#ffffff",
          textAlign: "center",
        }}
      >
        <h3>Döviz Uygulaması</h3>
      </div>
      <div style={{ marginTop: "50px" }}>
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          className="amount"
        />
        <select
          onChange={(e) => setFromCurrency(e.target.value)}
          style={{ marginRight: "10px" }}
          name="from-currency-option"
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="TRY">TRY</option>
        </select>

        <select
          onChange={(e) => setToCurrency(e.target.value)}
          style={{ marginRight: "10px" }}
          name="to-currency-option"
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="TRY">TRY</option>
        </select>
        <input
          style={{ marginRight: "10px" }}
          value={result}
          onChange={(e) => setResult(e.target.value)}
          type="number"
          className="result"
        />
      </div>
      <div>
        <button
          style={{
            width: "80px",
            height: "30px",
            backgroundColor: "red",
            color: "white",
            border: "none",
            borderRadius: "5px",
            marginTop: "15px",
          }}
          onClick={exchange}
        >
          ÇEVİR
        </button>
      </div>
    </div>
  );
}

export default Currency;
