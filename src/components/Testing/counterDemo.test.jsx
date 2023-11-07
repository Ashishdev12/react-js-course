import { fireEvent, render } from "@testing-library/react"
import CounterDemo from "./counterDemo"

describe('Counter', ()=>{
  it('check initial count value', ()=>{
    const { getByTestId } = render(<CounterDemo></CounterDemo>);
    const actualCountValue = Number(getByTestId('countTestId').textContent);
    const expectedCountValue = 0;
    expect(actualCountValue).toEqual(expectedCountValue);

  });
  //Before clicking doing one accretion and after clicking doing one accretion 

  it('check if count value increments by one when increment button is clicked', ()=>{
    const { getByTestId, getByRole } = render(<CounterDemo></CounterDemo>);
    const incrementBtn = getByRole("button", {name: "Increment"}); // here we are getting reference to the button with Increment on it.
    const actualCountValue1 = Number(getByTestId('countTestId').textContent);
    const expectedCountValue1 = 0;
    expect(actualCountValue1).toEqual(expectedCountValue1);

    // next we wil fire the button click event
    fireEvent.click(incrementBtn); // here we are clicking the increment button
    const actualCountValue2 = Number(getByTestId('countTestId').textContent);
    const expectedCountValue2 = 1;
    expect(actualCountValue2).toEqual(expectedCountValue2);


  });
})