import { useState, useMemo, useEffect } from "react";
import MonthlyPayment from "./components/MonthlyPayment";
import DownPaymentAndClosingCost from "./components/DownPaymentAndClosingCost";
import "./App.css";

function App() {
  // PMI Under 20% Down?
  const [hasPmiUnder20Down, setHasPmiUnder20Down] = useState(false);

  // Take Home Pay
  const defaultTakeHomePay = useMemo(() => {
    return localStorage.getItem("TAKE_HOME_PAY")
      ? Number(localStorage.getItem("TAKE_HOME_PAY"))
      : 0;
  });

  const [takeHomePay, setTakeHomePay] = useState(defaultTakeHomePay);

  useEffect(() => {
    localStorage.setItem("TAKE_HOME_PAY", takeHomePay);
  }, [takeHomePay]);

  // House Price
  const defaultHousePrice = useMemo(() => {
    return localStorage.getItem("HOUSE_PRICE")
      ? Number(localStorage.getItem("HOUSE_PRICE"))
      : 0;
  });

  const [housePrice, setHousePrice] = useState(defaultHousePrice);

  useEffect(() => {
    localStorage.setItem("HOUSE_PRICE", housePrice);
  }, [housePrice]);

  // Years of Mortgage
  const defaultYearsOfMortgage = useMemo(() => {
    return localStorage.getItem("YEARS_OF_MORTGAGE")
      ? Number(localStorage.getItem("YEARS_OF_MORTGAGE"))
      : 30;
  }, []);

  const [yearsOfMortgage, setYearsOfMortgage] = useState(
    defaultYearsOfMortgage
  );

  useEffect(() => {
    localStorage.setItem("YEARS_OF_MORTGAGE", yearsOfMortgage);
  }, [yearsOfMortgage]);

  // Interest Rate
  const defaultInterestRate = useMemo(() => {
    return localStorage.getItem("INTEREST_RATE")
      ? Number(localStorage.getItem("INTEREST_RATE"))
      : 6;
  }, []);

  const [interestRate, setInterestRate] = useState(defaultInterestRate);

  useEffect(() => {
    localStorage.setItem("INTEREST_RATE", interestRate);
  }, [interestRate]);

  // Percent Down
  const defaultPercentDown = useMemo(() => {
    return localStorage.getItem("PERCENT_DOWN")
      ? Number(localStorage.getItem("PERCENT_DOWN"))
      : 3;
  });

  const [percentDown, setPercentDown] = useState(defaultPercentDown);

  useEffect(() => {
    localStorage.setItem("PERCENT_DOWN", percentDown);
  }, [percentDown]);

  // Property Tax Percentage
  const defaultPropertyTaxPercentage = useMemo(() => {
    return localStorage.getItem("PROPERTY_TAX_PERCENTAGE")
      ? Number(localStorage.getItem("PROPERTY_TAX_PERCENTAGE"))
      : 0.81;
  }, []);

  const [propertyTaxPercentage, setPropertyTaxPercentage] = useState(
    defaultPropertyTaxPercentage
  );

  useEffect(() => {
    localStorage.setItem("PROPERTY_TAX_PERCENTAGE", propertyTaxPercentage);
  }, [propertyTaxPercentage]);

  // Homeowners Insurance Yearly Cost
  const defaultHomeownersInsuranceYearlyCost = useMemo(() => {
    return localStorage.getItem("HOMEOWNERS_INSURANCE_YEARLY_COST")
      ? Number(localStorage.getItem("HOMEOWNERS_INSURANCE_YEARLY_COST"))
      : 5000;
  }, []);

  const [homeownersInsuranceYearlyCost, setHomeownersInsuranceYearlyCost] =
    useState(defaultHomeownersInsuranceYearlyCost);

  useEffect(() => {
    localStorage.setItem(
      "HOMEOWNERS_INSURANCE_YEARLY_COST",
      homeownersInsuranceYearlyCost
    );
  }, [homeownersInsuranceYearlyCost]);

  // H.O.A. Cost Monthly
  const defaultHOACostMonthly = useMemo(() => {
    return localStorage.getItem("HOA_COST_MONTHLY")
      ? Number(localStorage.getItem("HOA_COST_MONTHLY"))
      : 16;
  }, []);

  const [hoaCostMonthly, setHOACostMonthly] = useState(defaultHOACostMonthly);

  useEffect(() => {
    localStorage.setItem("HOA_COST_MONTHLY", hoaCostMonthly);
  }, [hoaCostMonthly]);

  // Monthly Payment Should Be At Or Below
  const monthlyPaymentShouldBeAtOrBelow = useMemo(() => {
    return Number(takeHomePay * 0.3).toFixed();
  }, [takeHomePay]);

  return (
    <div className="App">
      <h1>Mortgage Calculator</h1>

      <div className="input-group">
        <label htmlFor="take-home-pay">
          Monthly Take Home Pay (Gross, before tax)
        </label>
        <input
          type="number"
          id="take-home-pay"
          value={takeHomePay}
          onChange={(e) => setTakeHomePay(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label htmlFor="house-price">House Price</label>
        <input
          type="number"
          id="house-price"
          value={housePrice}
          onChange={(e) => setHousePrice(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label htmlFor="percent-down">Percent Down</label>
        <input
          type="number"
          id="percent-down"
          value={percentDown}
          onChange={(e) => setPercentDown(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label htmlFor="years-of-mortgage">Years of Mortgage</label>
        <input
          type="number"
          id="years-of-mortgage"
          value={yearsOfMortgage}
          onChange={(e) => setYearsOfMortgage(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label htmlFor="interest-rate">Interest Rate</label>
        <input
          type="number"
          id="interest-rate"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label htmlFor="property-tax-percentage">Property Tax Percentage</label>
        <input
          type="number"
          id="property-tax-percentage"
          value={propertyTaxPercentage}
          onChange={(e) => setPropertyTaxPercentage(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label htmlFor="homeowners-insurance-yearly-cost">
          Homeowners Insurance Yearly Cost
        </label>
        <input
          type="number"
          id="homeowners-insurance-yearly-cost"
          value={homeownersInsuranceYearlyCost}
          onChange={(e) => setHomeownersInsuranceYearlyCost(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label htmlFor="hoa-cost-monthly">H.O.A. Cost Monthly</label>
        <input
          type="number"
          id="hoa-cost-monthly"
          value={hoaCostMonthly}
          onChange={(e) => setHOACostMonthly(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label htmlFor="pmi-under-20-down">No PMI Under 20% Down</label>
        <input
          type="checkbox"
          id="pmi-under-20-down"
          checked={hasPmiUnder20Down}
          onChange={(e) => setHasPmiUnder20Down(e.target.checked)}
        />
      </div>

      <h2>
        Your monthly payment should not exceed{" "}
        <strong>${monthlyPaymentShouldBeAtOrBelow}</strong>
      </h2>
      <p>That's 30% of your gross take home pay</p>

      <h2>Monthly Payment</h2>
      <MonthlyPayment
        housePrice={housePrice}
        percentDown={percentDown}
        propertyTaxPercentage={propertyTaxPercentage}
        homeownersInsuranceYearlyCost={homeownersInsuranceYearlyCost}
        hoaCostMonthly={hoaCostMonthly}
        yearsOfMortgage={yearsOfMortgage}
        interestRate={interestRate}
        monthlyPaymentShouldBeAtOrBelow={monthlyPaymentShouldBeAtOrBelow}
        hasPmiUnder20Down={hasPmiUnder20Down}
      />

      <h2>Down Payment + Closing Cost</h2>
      <DownPaymentAndClosingCost
        housePrice={housePrice}
        percentDown={percentDown}
      />
    </div>
  );
}

export default App;
