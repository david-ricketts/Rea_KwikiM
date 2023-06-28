import { Container } from "reactstrap"

const ConcessionDetail = ({snack}) => {
    const {image, name, description } = snack
    console.log(image)
    return(
        <Container>
            <img width={800} src={image} alt={name} className="mx-auto"/>
            <p>{description}</p>
        </Container>
    )
}

export default ConcessionDetail;