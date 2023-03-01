import { Card, Col, Button,} from 'antd';

function FoodBox({ dish:{name, calories, image, servings}, deleteHandler }) {
  let totalKcal = calories * servings;
  const deleteDish = () => {
    const dele = () => {

      deleteHandler(name)
    }
    return dele
  }


  return (
    <div>
      <Col>
        <Card title={name} style={{ width: 230, height: 300, margin: 10 }}>
          <img src={image} height={60} alt="food" />
          <p>Calories: {calories}</p>
          <p>Servings: {servings}</p>
          <p>
            <b>Total Calories: {totalKcal} </b> kcal
          </p>
          <Button type="primary" onClick={deleteDish()}> Delete </Button>
        </Card>
      </Col>
    </div>
  );
}

export default FoodBox;
