import React, { useMemo } from 'react';
import './MonthlyPayment.css';

const MonthlyPayment = ({ 
    housePrice, 
    percentDown, 
    propertyTaxPercentage,
    homeownersInsuranceYearlyCost,
    hoaCostMonthly,
    yearsOfMortgage,
    interestRate,
    monthlyPaymentShouldBeAtOrBelow
 }) => {

    const downPayment = useMemo(() => {
        return Number(Number(housePrice) * ((Number(percentDown)) / 100)).toFixed();
    }, [housePrice, percentDown]);

    const loanAmount = useMemo(() => {
        return Number(Number(housePrice) - Number(downPayment)).toFixed();
    }, [housePrice, downPayment]);

    const principalInterestPayment = useMemo(() => {
        const monthlyInterestRate = Number(interestRate) / 100 / 12;
        const numberOfPayments = Number(yearsOfMortgage) * 12;
        const monthlyPayment = Number(loanAmount) * (monthlyInterestRate / (1 - (Math.pow(1 / (1 + monthlyInterestRate), numberOfPayments))));
        return Number(monthlyPayment).toFixed();
    }, [loanAmount, interestRate, yearsOfMortgage]);

    const monthlyPropertyTaxCost = useMemo(() => {
        return Number((Number(housePrice) * Number(propertyTaxPercentage)) / 100 / 12).toFixed();
    }, [housePrice, propertyTaxPercentage]);

    const monthlyHomeownersInsuranceCost = useMemo(() => {
        return Number(Number(homeownersInsuranceYearlyCost) / 12).toFixed();
    }, [homeownersInsuranceYearlyCost]);

    const pmi = useMemo(() => {
        if (Number(percentDown) >= 20) {
            return 0;
        }

        return Number(Number(loanAmount) * 0.00041587301).toFixed()
      }, [loanAmount, percentDown]);

    const totalMonthlyCost = useMemo(() => {
        return Number(Number(monthlyPropertyTaxCost) + Number(monthlyHomeownersInsuranceCost) + Number(hoaCostMonthly) + Number(principalInterestPayment) + Number(pmi)).toFixed();
    }, [monthlyPropertyTaxCost, monthlyHomeownersInsuranceCost, hoaCostMonthly, principalInterestPayment]);


    const isMonthlyPaymentAtOrBelow = useMemo(() => {
        return Number(monthlyPaymentShouldBeAtOrBelow) >= Number(totalMonthlyCost);
    }, [monthlyPaymentShouldBeAtOrBelow, totalMonthlyCost]);

    return (
        <div className="monthly-payment">
            <h3 style={{
                color: isMonthlyPaymentAtOrBelow ? 'green' : 'red',
            }}>${totalMonthlyCost}</h3>

            {isMonthlyPaymentAtOrBelow === false &&
                <div className="monthly-payment-should-be-at-or-below">
                    <span style={{ color: 'red' }}>Monthly payment should be at or below ${monthlyPaymentShouldBeAtOrBelow}</span>
                </div>
            }

            <div className="monthly-payment-breakdown">
                <div className="monthly-payment-breakdown-item">
                    <div className="monthly-payment-breakdown-item-label">Principal & Interest</div>
                    <div className="monthly-payment-breakdown-item-value">${principalInterestPayment}</div>
                </div>

                <div className="monthly-payment-breakdown-item">
                    <div className="monthly-payment-breakdown-item-label">Property Tax</div>
                    <div className="monthly-payment-breakdown-item-value">${monthlyPropertyTaxCost}</div>
                </div>

                <div className="monthly-payment-breakdown-item">
                    <div className="monthly-payment-breakdown-item-label">Homeowners Insurance</div>
                    <div className="monthly-payment-breakdown-item-value">${monthlyHomeownersInsuranceCost}</div>
                </div>

                <div className="monthly-payment-breakdown-item">
                    <div className="monthly-payment-breakdown-item-label">HOA</div>
                    <div className="monthly-payment-breakdown-item-value">${hoaCostMonthly}</div>
                </div>

                {pmi > 0 &&
                    <div className="monthly-payment-breakdown-item">
                        <div className="monthly-payment-breakdown-item-label">PMI 0.58%</div>
                        <div className="monthly-payment-breakdown-item-value">${pmi}</div>
                    </div>
                }
            </div>
        </div>
    )
}

export default MonthlyPayment;