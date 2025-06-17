import React, { useState, useEffect } from "react";
import InputBox from "./components/InputBox";
import Price_converter_info from "./Hooks/usePrice_converter_info";

function App() {
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");

  const priceConversion = Price_converter_info(fromCurrency);
  const currencyOptions = Object.keys(priceConversion);

  useEffect(() => {
    if (amount > 0 && priceConversion[toCurrency]) {
      setConvertedAmount(amount * priceConversion[toCurrency]);
    }
  }, [amount, fromCurrency, toCurrency, priceConversion]);

  const onAmountChange = (amt) => {
    setAmount(amt);
  };

  const onFromCurrencyChange = (curr) => {
    setFromCurrency(curr);
  };

  const onToCurrencyChange = (curr) => {
    setToCurrency(curr);
  };

  const swap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat text-lg font-semibold">
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="w-full mb-1">
              <InputBox
                label={fromCurrency}
                amount={amount}
                onAmountChange={onAmountChange}
                onCurrencyChange={onFromCurrencyChange}
                currencyOptions={currencyOptions}
                currency={fromCurrency}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label={toCurrency}
                amount={convertedAmount}
                onAmountChange={() => {}}
                onCurrencyChange={onToCurrencyChange}
                currencyOptions={currencyOptions}
                currency={toCurrency}
                amountDisabled
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
