import { render, screen } from "@testing-library/react";
import MonthlyPayment from "./MonthlyPayment";

describe("MonthlyPayment component", () => {
  it("renders correctly and calculates the total monthly cost", () => {
    const props = {
      housePrice: 300000,
      percentDown: 10,
      propertyTaxPercentage: 1,
      homeownersInsuranceYearlyCost: 1200,
      hoaCostMonthly: 50,
      yearsOfMortgage: 30,
      interestRate: 3,
      monthlyPaymentShouldBeAtOrBelow: 1500,
      hasPmiUnder20Down: false,
    };

    render(<MonthlyPayment {...props} />);

    const totalMonthlyCost = screen.getByTestId("total-monthly-cost");
    expect(totalMonthlyCost).toBeInTheDocument();
    expect(totalMonthlyCost).toHaveTextContent(/^\$\d+$/);

    const principalInterestPayment = screen.getByTestId(
      "principal-interest-payment"
    );
    expect(principalInterestPayment).toBeInTheDocument();
    expect(principalInterestPayment).toHaveTextContent(/^\$\d+$/);
  });
});
