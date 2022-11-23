import { Component } from 'react';
import classes from './User.module.css';


class User extends Component {
  render(){
    return <li className={classes.user}>{this.props.name}</li>;
  }
}
// const U ser = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
