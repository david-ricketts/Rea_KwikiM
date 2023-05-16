import { Col, Row } from "reactstrap";


const ConcessionsList = (props) => {
    const { section } = props;
    console.log({section})

    return (
        <Row className="ms-auto">
            {section.map((item) => {
                return (
                    <Col md='4' key={item.id}>
                        <ConsessionCard item={item} />
                    </Col>
                )
            })}
        </Row>
    )
}


export default ConcessionsList;