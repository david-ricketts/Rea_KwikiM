import { Col, Row } from "reactstrap";
import ConcessionsCard from "./ConcessionsCard";
const ConcessionsList = (props) => {
    const {sections} = props
    return (
        <Row className="ms-auto">
            {sections.map((item) => {
            console.log(item)
                return (
                    <Col md='4' key={item.id}>
                        <ConcessionsCard item={item} />
                    </Col>
                )
            })}
        </Row>
    )
}


export default ConcessionsList;