import {
    Card,
    CardTitle,
    CardText, 
    CardBody,
    Button,
    CardImg,
    CardSubtitle,
    Row,
    Col
} from 'reactstrap'

function Footer(args) {
  return(
<Row>
  <Col xl="3">
  
    
      <Card>
        <CardImg
          alt="Card image cap"
          src="https://picsum.photos/318/180"
          top
          width="100%"
        />
        <CardBody>
          <CardTitle tag="h5">
            Card title
          </CardTitle>
          <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
          >
            Card subtitle
          </CardSubtitle>
          <CardText>
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
          </CardText>
          <Button>
            Button
          </Button>
        </CardBody>
      </Card>
  </Col>
  <Col xl="3">
      <Card>
        <CardImg
          alt="Card image cap"
          src="https://picsum.photos/318/180"
          top
          width="100%"
        />
        <CardBody>
          <CardTitle tag="h5">
            Card title
          </CardTitle>
          <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
          >
            Card subtitle
          </CardSubtitle>
          <CardText>
            This card has supporting text below as a natural lead-in to additional content.
          </CardText>
          <Button>
            Button
          </Button>
        </CardBody>
      </Card>
  </Col>
  <Col xl="3">
  
      <Card>
        <CardImg
          alt="Card image cap"
          src="https://picsum.photos/318/180"
          top
          width="100%"
        />
        <CardBody>
          <CardTitle tag="h5">
            Card title
          </CardTitle>
          <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
          >
            Card subtitle
          </CardSubtitle>
          <CardText>
            This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
          </CardText>
          <Button>
            Button
          </Button>
        </CardBody>
      </Card>
  </Col>
</Row>

  ) }

export default Footer;