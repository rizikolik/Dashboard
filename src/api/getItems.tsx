import Data from 'shopping_cart_items.json';
const getItems = async () => {
  const results = await fetch('/api/getItems');
  console.log(results, 'Api Simulation result');
  return Data;
};
export default getItems;
