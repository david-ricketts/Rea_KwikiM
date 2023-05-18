import { Container } from "reactstrap"

const ConcessionDetail = ({snack}) => {
    const {image, name, description } = snack
    console.log(image)
    return(
        <Container>
            <img src={image} />
            <p>{description}</p>
        </Container>
    )
}

export default ConcessionDetail;