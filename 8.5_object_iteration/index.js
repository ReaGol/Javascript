
const menuObject = { food : "pizza", topping: "onion", price: "45" };

const swapFunction = (objectInput) => {
  const swappedMenuObject = {};
  for (const key in objectInput) {
    const val = menuObject[key];
    swappedMenuObject[val] = key;
  }
  return swappedMenuObject;
};
console.log(swapFunction(menuObject));
