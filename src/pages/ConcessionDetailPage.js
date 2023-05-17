import { Container, Row } from "reactstrap";
import { selectSnackById } from "../features/Concession/concessionsSlice";
import { useParams } from "react-router-dom";



const ConcessionDetailPage = () => {
 const { snackId } = useParams()
 console.log(snackId)
 const snack = selectSnackById(snackId)
    console.log(snack)
    return (
        <Container>
            <h1> {snack.name}</h1>
            <Row>
                {/* <ConcessionsDetail /> */}
            </Row>
        </Container>
    )
}

export default ConcessionDetailPage;