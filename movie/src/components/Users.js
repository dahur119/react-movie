import {Component } from 'react';
import User from './User';

import classes from './Users.module.css';


const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
];

class Users extends Component {
  constructor () {
    super()
    this.state ={
      showUsers:true,
      
      
      
    };
  }

  toggleUserHandler(){
    this.setState((curState) =>{
      return {showUsers: !curState.showUsers}
    } )
  }

  render(){
    const usersList = (
      <ul>
        {DUMMY_USERS.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (  
      
      <div className={classes.users}>
        <button onClick={this.toggleUserHandler.bind(this)}>
          {this.state.showUsers ? 'Hide' : 'Show'} Users
        </button>
        {this.state.showUsers &&  usersList}
      </div>
    );
   }
 
}


// class Users extends Component {
//   super();
  

// }

// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

  // const usersList = (
  //   <ul>
  //     {DUMMY_USERS.map((user) => (
  //       <User key={user.id} name={user.name} />
  //     ))}
  //   </ul>
  // );

 
// };

export default Users;
