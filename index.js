
function writeCards(names, event) {
  return names.map(name => `Thank you, ${name}, for the wonderful ${event} gift!`);
}

describe('writeCards()', () => {
  it('returns an array of thank you messages for each name provided to the function', () => {
    const result = writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");
    
    let messages=([]);
  });
});


  
function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }
  
  module.exports = { writeCards, countDown };
  