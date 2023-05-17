import { Link } from 'react-router-dom';
import {Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';



const ConcessionsCard = ({item}) => {
    const {id, image, name} = item;

    return (
        <Link to={`${id}`}>
            <Card>
                <CardImg
                    width='100%'
                    src={image}
                    alt={name}
                />
                <CardImgOverlay>
                    <CardTitle>{name}</CardTitle>
                </CardImgOverlay>
            </Card>
        </Link>

    )
}

export default ConcessionsCard;