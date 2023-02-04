import React, { useMemo } from 'react';

const DownPaymentAndClosingCost = ({ 
    housePrice, 
    percentDown, 
 }) => {

    // Using useMemo calculate the closing cost as 3% of housePrice
    const closingCost = useMemo(() => {
        return Number(Number(housePrice) * 0.03).toFixed();
    }, [housePrice]);

    // Using useMemo calculate the downPayment as percentDown / 100 of housePrice
    const downPayment = useMemo(() => {
        return Number(Number(housePrice) * (Number(percentDown) / 100)).toFixed();
    }, [housePrice, percentDown]);

    // Using useMemo calculate the sum of down payment and closing cost
    const downPaymentAndClosingCost = useMemo(() => {
        return Number(Number(downPayment) + Number(closingCost)).toFixed();
    }, [downPayment, closingCost]);

    return (
        <div className="mortgage-calc">
            <h3>${downPaymentAndClosingCost}</h3>
        </div>
    )
}

export default DownPaymentAndClosingCost;