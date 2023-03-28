import {
    Card,
    CardHeader,
    CardBody,
    CardText, 
    CardGroup,
    Row  
} from 'reactstrap'

function Footer(args) {
return(
    <div className='row'>
        <CardGroup>
            
            <Card
                className="my-2"
                style={{
                    width: '18rem'
            }}
            >
                <CardHeader className="text-center" tag='h5'>
                    Hours
                </CardHeader>
                <CardBody>
                    <CardText>
                        Mon-Thur: 6-11<br />
                        Fri-Sat: 5-12 <br />
                        Sun:     8-10 
                    </CardText>
                </CardBody>
            </Card>
            <Card
            className="my-2"
            style={{
                width: '18rem'
            }}
            >
                <CardHeader className="text-center" tag="h5">
                    Locacations
                </CardHeader>
                <CardBody>
                    <CardText>
                        <p>
                            123 Main Street <br />
                            Pleasentville, USA, 10000 <br /> 
                        </p>    
                        <p>
                            123 Main Street <br />
                            Pleasentville, USA, 10000 <br /> 
                        </p>    
                    </CardText>
                </CardBody>
            </Card>
            <Card
            className="my-2"
            style={{
                width: '18rem'
            }}
            >
                <CardHeader className="text-center" tag="h5">
                        Contact
                </CardHeader>
                <CardBody>
                    <CardText>
                    <p>
                        Main Office: (100) 555-1234 <br />
                    </p>    

                    <p>
                        office@KwikiMart.com
                    </p>
                    </CardText>
                </CardBody>
            </Card>
        </CardGroup>
    </div>
 

 )}

export default Footer;