import { useParams } from "react-router-dom"

const Info = () => {
    const {id} = useParams();
    return (
        <div>
            <h1>Product {id} Information</h1>
        </div>
    )
}

export default Info