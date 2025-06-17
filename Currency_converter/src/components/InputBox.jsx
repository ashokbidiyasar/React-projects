import React from "react";

const InputBox = (props) => {
  const {
    label,
    amount,
    onAmountChange,
    currency,
    onCurrencyChange,
    currencyOptions = [],
  } = props;

  return (
    <div className={`bg-white p-3 rounded-lg text-[15px] flex `}>
      <div className="w-1/2">
        <label className="text-black/60 mb-2 inline-block">{label}</label>
        <input
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          value={amount}
          placeholder="Amount"
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/60 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={currency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {currencyOptions.map((currencyOption) => (
            <option key={currencyOption} value={currencyOption}>
              {currencyOption}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default InputBox;
