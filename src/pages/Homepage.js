import { Container } from "reactstrap";
import Jumbotron from "../features/HomePage/Jumbotron";


const HomePage = () => {
    return (
        <Container>
            <Jumbotron className="Jumbotron" />
            <h1> Home page.</h1>
        </Container>
    )
}

export default HomePage;