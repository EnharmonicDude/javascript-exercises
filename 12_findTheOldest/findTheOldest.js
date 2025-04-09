/*First we need a function to extract the age from the arrays. A person's age is computed by subtracting their death year from their birth year, e.g. 2000 - 1990. If people are still alive, we just use a built-in method to get the current year. */
const getAge = function(birth, death){
    if(!death){
        death = new Date().getFullYear();
    }

    return death - birth;
}

const findTheOldest = function (people) {
    return people.reduce((oldest, currentPerson) => {
      // reduce() iterates through 'people', comparing each person to find the oldest.
      // The accumulator ('oldest') starts as the first person in the array and updates as needed.
  
      const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
      // Determine the age of the current 'oldest' person.
      // On the first iteration, 'oldest' is just the first person in the array.
      // In later iterations, 'oldest' is whoever was returned as the oldest so far.
  
      const currentAge = getAge(
        currentPerson.yearOfBirth,
        currentPerson.yearOfDeath
      );
      // Get the age of the current person being checked.
  
      return oldestAge < currentAge ? currentPerson : oldest;
      // If the current person is older than the current 'oldest', update 'oldest'.
      // Otherwise, keep 'oldest' unchanged and continue to the next person.
    });
  };
  

// Do not edit below this line
module.exports = findTheOldest;
