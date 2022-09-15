// 2.9 optional chaining ?.

const customer = {
    name: "Carl",
    details: { age: 82 }
  };
  const customerCity = customer?.city ?? "Unknown city";
console.log(customerCity); // Unknown city
  
const adventurer = {
    name: 'Alice',
    cat: {
      name: 'Dinah'
    }
  };
  
  const dogName = adventurer.cat?.name;
  console.log(dogName); //Dinah