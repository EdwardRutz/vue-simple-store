//simple store holding an array of numbers
//method to add new numbers from user input into the array

export const store = {
  state: {
    numbers: [1, 2, 3 ]
  },
  addNewNumber(newNumberString) {
    this.state.numbers.push(Number(newNumberString));
  }
};

