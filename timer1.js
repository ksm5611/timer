const args = process.argv;
// console.log(args);

const timer = args.slice(2);
const setProp = timer.sort((a, b) => a - b);

let startTime = 0;

for (let i = 0; i < setProp.length; i++) {
  if (i !== 0) {
    startTime += (Number(setProp[i]) - Number(setProp[i - 1])) * 1000;
  } else {
    startTime += Number(setProp[i]) * 1000;
  }
  setTimeout(() => {
    process.stdout.write('\x07');
  }, startTime);
}

