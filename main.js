let raceNumber = Math.floor(Math.random() * 1000);
let earlyRunner = true;
let ageRunner = 22;
 
if (ageRunner > 18 && earlyRunner) {
  raceNumber += 1000;
  console.log(`Race starts at 9.30am and race number is ${raceNumber}`);
} 
else if (ageRunner > 18 && !earlyRunner) {
  console.log(`Race starts at 11.00am and race number is ${raceNumber}`);
} 
else if (ageRunner < 18) {
  console.log(`Race starts at 12.30pm and race number is ${raceNumber}`);
} 
else {
  console.log('Approach registration desk');
}
