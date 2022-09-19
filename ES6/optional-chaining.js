// 2.9 optional chaining ?.
// The optional chaining operator (?.) accesses an object's property or calls a function. If the object is undefined or null, it returns undefined instead of throwing an error.

const customer = {
    name: "Carl",
    details: { age: 82 }
  };
  const customerCity = customer?.city ?? "Unknown city"; // value set
console.log(customerCity); // Unknown city
  
const adventurer = {
    name: 'Alice',
    cat: {
      name: 'Dinah'
    }
  };
  
  const dogName = adventurer.cat?.name;
  console.log(dogName); //Dinah