// Define a function named TodayDays that takes an optional parameter givenDate
function TodayDays(givenDate) {
    // If no given date is provided, default to the current date
    givenDate = givenDate || new Date();
  
    // Get the current date
    let currentDate = new Date();
  
    // Calculate the difference in milliseconds between the current date and given date
    let differenceInMilliseconds = currentDate - givenDate;

    // Calculate the difference in days by dividing milliseconds by the number of milliseconds in a day
    let differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));
  
    // Return the difference in days
    return differenceInDays;
}

// Example usage with a given date (March 31, 2005)
let givenDate = new Date("2005-03-31");

// Call the TodayDays function with the given date and store the result in the variable difference
let difference = TodayDays(givenDate);

// Create a new date object (copy of the given date)
let newDate = new Date(givenDate);

// Set the date of the new date object to be 25000 days from the given date
newDate.setDate(givenDate.getDate() + 25000);

// Calculate the number of days left in 25000 days  for avg person
// const leftDays = 25000 - difference;
// Calculate the number of days left in 18250 days  for me Ni
const leftDays = 18250 - difference;

// Display the results in html
document.getElementById("leftDays").textContent = leftDays;
// Display the results 
// console.log("Given Date:", givenDate.toDateString());
// console.log("Difference in days:", difference);
// console.log("New Date after 25000 days:", newDate.toDateString());
// console.log("Days Left in 25000 days:", leftDays);


