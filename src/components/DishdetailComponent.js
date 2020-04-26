import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
  renderDish(dish) {
    if (dish != null)
      return (
        <div className="col-12 col-md-5 m-1">
          <Card>
            <CardImg top width="100%" src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
      );
    else return <div></div>;
  }

  renderComments(comments) {
    if (comments != null) {
      const commentlist = comments.map((data) => (
        <li key={data.id}>
          <p>{data.comment}</p>
          <p>
            --{data.author},{' '}
            <span>
              {new Intl.DateTimeFormat('en-US', {
                year: 'numeric',
                month: 'short',
                day: '2-digit',
              }).format(new Date(Date.parse(data.date)))}
            </span>
          </p>
        </li>
      ));
      return (
        <div className="col-12 col-md-5 m-1">
          <h4> Comments </h4>
          <ul className="list-unstyled">{commentlist}</ul>
        </div>
      );
    } else return <div></div>;
  }

  render() {
    const dish = this.props.dish;
    if (dish == null) {
      return <div></div>;
    }
    return (
      <div className="container">
        <div className="row">
          {this.renderDish(dish)}
          {this.renderComments(dish.comments)}
        </div>
      </div>
    );
  }
}

export default DishDetail;
