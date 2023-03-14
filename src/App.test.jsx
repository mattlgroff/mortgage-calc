import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  it("renders the component and checks the initial state", () => {
    render(<App />);
    expect(screen.getByText("Mortgage Calculator")).toBeInTheDocument();
  });

  it("updates take home pay input", () => {
    render(<App />);
    const takeHomePayInput = screen.getByLabelText(
      "Monthly Take Home Pay (Net, after tax)"
    );

    fireEvent.change(takeHomePayInput, { target: { value: "5000" } });
    expect(takeHomePayInput.value).toBe("5000");
  });

  it("updates house price input", () => {
    render(<App />);
    const housePriceInput = screen.getByLabelText("House Price");

    fireEvent.change(housePriceInput, { target: { value: "300000" } });
    expect(housePriceInput.value).toBe("300000");
  });

  it("updates percent down input", () => {
    render(<App />);
    const percentDownInput = screen.getByLabelText("Percent Down");

    fireEvent.change(percentDownInput, { target: { value: "10" } });
    expect(percentDownInput.value).toBe("10");
  });

  it("updates years of mortgage input", () => {
    render(<App />);
    const yearsOfMortgageInput = screen.getByLabelText("Years of Mortgage");

    fireEvent.change(yearsOfMortgageInput, { target: { value: "15" } });
    expect(yearsOfMortgageInput.value).toBe("15");
  });

  it("updates interest rate input", () => {
    render(<App />);
    const interestRateInput = screen.getByLabelText("Interest Rate");

    fireEvent.change(interestRateInput, { target: { value: "4" } });
    expect(interestRateInput.value).toBe("4");
  });

  it("updates property tax percentage input", () => {
    render(<App />);
    const propertyTaxPercentageInput = screen.getByLabelText(
      "Property Tax Percentage"
    );

    fireEvent.change(propertyTaxPercentageInput, { target: { value: "1" } });
    expect(propertyTaxPercentageInput.value).toBe("1");
  });

  it("updates homeowners insurance yearly cost input", () => {
    render(<App />);
    const homeownersInsuranceYearlyCostInput = screen.getByLabelText(
      "Homeowners Insurance Yearly Cost"
    );

    fireEvent.change(homeownersInsuranceYearlyCostInput, {
      target: { value: "3000" },
    });
    expect(homeownersInsuranceYearlyCostInput.value).toBe("3000");
  });

  it("updates H.O.A. cost monthly input", () => {
    render(<App />);
    const hoaCostMonthlyInput = screen.getByLabelText("H.O.A. Cost Monthly");

    fireEvent.change(hoaCostMonthlyInput, { target: { value: "50" } });
    expect(hoaCostMonthlyInput.value).toBe("50");
  });

  it("toggles No PMI Under 20% Down checkbox", () => {
    render(<App />);
    const noPmiUnder20DownCheckbox = screen.getByLabelText(
      "No PMI Under 20% Down"
    );

    expect(noPmiUnder20DownCheckbox.checked).toBe(false);
    fireEvent.click(noPmiUnder20DownCheckbox);
    expect(noPmiUnder20DownCheckbox.checked).toBe(true);
  });

  it("calculates and displays the monthly payment should not exceed value", () => {
    render(<App />);
    const takeHomePayInput = screen.getByLabelText(
      "Monthly Take Home Pay (Net, after tax)"
    );
    fireEvent.change(takeHomePayInput, { target: { value: "5000" } });
    const monthlyPaymentShouldNotExceed = screen.getByText(
      /Your monthly payment should not exceed/i
    );
    expect(monthlyPaymentShouldNotExceed).toHaveTextContent("$1500");
  });
});
