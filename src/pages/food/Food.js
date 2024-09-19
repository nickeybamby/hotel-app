// import './food.css' ;

const Food = ({ image, name }) => {
    return (
      <div className="food__menu-card">
        <div className="food__menu-image">
          <img src={image} alt={name} />
        </div>
        <p>{name}</p>
      </div>
    );
  };
  
  export default Food;
  