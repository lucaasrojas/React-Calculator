# Calculator

This is a project developed for applying to a job position.\
It was coded using React, plain CSS and @testing-library/react for the unit tests

## Development

I started using the most common way to calculate `Number(a) + Number(b)` and storing both numbers in different states, but it was too messy and I decided to investigate other ways to perform calculations. I found the `eval()` method, knowing that it has a risk for malicious injection I decided to use it because it is a simple calculator without sensitive information and there is no scenario for an attack.

On the other hand, the design began very simple in order to follow a minimalist light theme, then I decided to change to a dark one with more color.

Finally, Redux was not neccesary due to the low complexity of the project and the simple state management.

- The input number was limited to a maximum of 32 digits based on Windows's calculator
- If the result is too big it will be shown with Exponent value to make easier to read
- The rotation functionality will rotate the value that is in the display (numbers and operators)
- After a calculartion you can use the answer to perform another calculation and so on
