import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderCard({item}) {

  return(
      <Card>
          <CardImg src={item.image} alt={item.name} />
          <CardBody>
          <CardTitle>{item.name}</CardTitle>
          {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
          <CardText>{item.description}</CardText>
          </CardBody>
      </Card>
  );

}

// banner component
function BannerFeedbackForm() {

  return(
        <Card>
        <Link to="/studentfbform">
          <div>Submit Feedback</div>
        </Link>
        </Card>
  );
}

function Home(props) {
  return(
      <div className="container">
          <div className="row align-items-start">
              <div className="col-12 col-md m-1">
                  <RenderCard item={props.dish} />
              </div>
              <div className="col-12 col-md m-1">
                  <RenderCard item={props.promotion} />
              </div>
              <div className="col-12 col-md m-1">
                  <RenderCard item={props.leader} />
              </div>
              <BannerFeedbackForm />
          </div>
      </div>
  );
}

export default Home;