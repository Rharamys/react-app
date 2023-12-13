// or use const Props = (props) => {
const CarDetails = ({ brand, color, newCar, km}) => {

    return (
        <div>
            <h2>Car details</h2>
            <ul>
                <li>Brand: {brand}</li>
                <li>Color: {color}</li>
                <li>KM: {km}</li>
            </ul>
            {newCar && <p>This is a new car!</p>}
        </div>
    )
}

export default CarDetails