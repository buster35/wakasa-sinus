
/*
  I am loading the sample data via another script tag on the index.html page, so I have that data 
  available here as a global variable (daysInForecast). It was named sample in the other file so we'll use that here.
*/


// This is the array of hour blocks(array of objects in other script): 8 per day, for a total of 40.
const daysInForecast = sample.list

/*
Each date object has a property called "dt", which is a Unix timestamp for the date and time 
of that object's data. The first one is 1681333200.
*/ 

// Create a new array to hold one day block per forecast day. We will construct this array with the for loop spelled out below//
const newForecastArr = []

// iterate over the 40 blocks, but we will do them 8 at a time, so that we get one per day.
for( let i=0; i<40; i=i+8 ){
  newForecastArr.push( sample.list[i])
} //builds array with every 8 day block which will compute out to one per day//

// We now have a new array with one record for each day!
console.log(newForecastArr)


/* 
Want to see why arrow functions are cool? Combined with an array method you haven't learned 
yet, we can do all this work in one line of code. We will show you array.filter() later!
*/ 
//named newForecastArr2 bc we already have a newForecastArr used in the above example code//
const newForecastArr2 = sample.list.filter( (_dayObj, idx) => idx % 8 === 0)
console.log(newForecastArr2)