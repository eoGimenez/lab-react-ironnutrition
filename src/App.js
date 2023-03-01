import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';
import { Row, Divider } from 'antd';

function App() {
  const [dishes, setDishes] = useState(foods);
  const [meal, setCopy] = useState(foods);

  const createDish = (dish) => {
    setDishes([dish, ...dishes]);
    setCopy([dish, ...meal]);
  };
  let serchOut = [...foods];
  const searchDish = (text) => {
    if (!text) {
      setDishes(meal);
    } else {
      setDishes(dishes.filter((dish) => dish.name.toLowerCase().includes(text.toLowerCase())));
    }
  };
  const deleteHandler = (name) => {
    setDishes(dishes.filter(dish => dish.name !== name))
  }

  

  return (
    <div className="App">
      <Divider>Lista de comida</Divider>
      <br></br>
      <Search searchDish={searchDish} />
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {dishes.map((dish, k) => (
          <FoodBox dish={dish} deleteHandler={deleteHandler} key={k} />
        ))}
      </Row>
      <AddFoodForm createDish={createDish} />
    </div>
  );
}

export default App;
