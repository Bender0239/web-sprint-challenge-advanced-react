import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>)
    const formHeader = screen.findByText(/checkout form/i)
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />)
    const submitButton = screen.getByRole('button')
    fireEvent.click(submitButton)
    const successMessage = screen.getAllByTestId('successMessage')
});
