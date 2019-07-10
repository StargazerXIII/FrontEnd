// Karvonen Heart Rate Calculator

var age = 35;
var pulseAtRest = 90;
var intensity = 75;
var maxHeartRate = 220 - age;
var pulseAtWorkout = Math.round((maxHeartRate - pulseAtRest) * (intensity / 100) + pulseAtRest);
console.log('Heart rate is ' + pulseAtWorkout);