import Card from "../UI/Card";

const RoomDetails = ({ image, name, maxPerson, price, facilities }) => {
  return (
    <Card className="trainer ">
      <div className="trainer__img">
        <img src={image} alt={name} />
      </div>
      <h3>{name}</h3>
      <p>{maxPerson}</p>
      <p>{price}</p>
      <div className="trainer__facilities">
        {facilities.map(({ icon }, index) => {
          return <a key={index}>{icon}</a>;
        })}
      </div>
    </Card>
  );
};

export default RoomDetails;
