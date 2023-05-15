import { Container } from "reactstrap";
import ConcessionsAccordion from "../features/Concession/ConcessionAccordion";

const ConcessionDirectoryPage = () => {
    return (
        <Container>
            <h1> Consession page.</h1>
            <ConcessionsAccordion />
        </Container>
    )
}

export default ConcessionDirectoryPage;