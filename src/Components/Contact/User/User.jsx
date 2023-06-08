import Card from 'react-bootstrap/Card';

const User = (props) => {
    return (
        <Card style={{ width: '18rem', margin: '15px', display: 'inline-block'}}>
            <Card.Body style={{background: "#010F18"}}>
              <Card.Title style={{color: '#E3E0E7'}}>{props.name}</Card.Title>
              <Card.Subtitle style={{color: '#e3e0e7bd'}} className="mb-2 text-muted">Order: {props.order}</Card.Subtitle>
              <Card.Text style={{color: '#e3e0e7bd'}}>
               I found a real friend in here. Thank you!
              </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default User