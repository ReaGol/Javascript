const candyStore = {
  candies: [
    {
      name: "mint gum",
      id: "as12f",
      price: 2,
      amount: 2,
    },
    {
      name: "twix",
      id: "5hd7y",
      price: 5,
      amount: 4,
    },
  ],
  cashRegister: 200,
};

function getCandy(candyStore, id) {
  const candy = candyStore.candies.find((candy) => candy.id === id);
  return candy.name;
}

getCandy(candyStore, "5hd7y");

function getPrice(candyStore, id) {
  const result = candyStore.candies.find((result) => result.id === id);

  console.log(result.price);
}

getPrice(candyStore, "5hd7y");

function addCandy(candyStore, id, name, price) {
  let newCandy = { name: "mars", id: "ab12c3", price: 9, amount: 1 };
  console.log(candyStore.candies.push(newCandy));
}


function buy(candyStore, id) {
    const boughtCandy = candyStore.candies.find((boughtCandy) => boughtCandy.id === id);
    candyStore.cashRegister = candyStore.cashRegister + boughtCandy.price;
    boughtCandy.amount--;
}
