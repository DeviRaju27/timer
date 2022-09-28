
const compareNumbers = (a, b) =>  a - b;

const func = (input) => {
  input = process.argv.splice(2);
  let sorted = input.sort(compareNumbers);
  for (let each of sorted) {
    if ((Math.sign(each) !== -1) && (!isNaN(each))) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, each * 1000);
    }
  }
  return;
};

func();

