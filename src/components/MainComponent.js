import React, { Component } from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import StudentFbForm from './StudentFbFormComponent';

import { Switch, Route, Redirect } from 'react-router-dom';

import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import { FORM } from '../shared/form';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        comments: COMMENTS,
        promotions: PROMOTIONS,
        leaders: LEADERS,
        form: FORM
      };
  }

  render() {
    const HomePage = () => {
        return(
            <Home 
              dish={this.state.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
              leader={this.state.leaders.filter((leader) => leader.featured)[0]}
            />
        );
      }      

    const MenuPage = () => {
        return(
            <Menu dishes={this.state.dishes} />
        );
    };

    const DishWithId = ({match}) => {
        return(
            <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
                comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
        );
    };

    const StudentFbFormPage = () => {
        return(
            <StudentFbForm form={this.state.form} />
        );
    };

    return (
      <div>
        {/* <Header /> */}
        <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/menu' component={MenuPage} />
              <Route path='/menu/:dishId' component={DishWithId} />
              <Route exact path='/contactus' component={Contact} />} />
              <Route exact path='/studentfbform' component={StudentFbFormPage} />} />              
              <Redirect to="/home" />
        </Switch>
        {/* <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} /> */}
        {/* <Footer /> */}
      </div>
    );
  }
}

export default Main;