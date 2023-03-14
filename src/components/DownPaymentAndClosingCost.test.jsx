import { render, screen } from "@testing-library/react";
import DownPaymentAndClosingCost from "./DownPaymentAndClosingCost";

describe("DownPaymentAndClosingCost component", () => {
  it("renders DownPaymentAndClosingCost component and checks the calculated value", () => {
    render(<DownPaymentAndClosingCost housePrice={300000} percentDown={10} />);

    const downPaymentAndClosingCost = screen.getByText(/^\$\d+$/, {
      selector: "h3",
    });
    const expectedValue = 300000 * 0.1 + 300000 * 0.03; // downPayment + closingCost
    expect(downPaymentAndClosingCost).toHaveTextContent(
      `$${expectedValue.toFixed()}`
    );
  });
});
