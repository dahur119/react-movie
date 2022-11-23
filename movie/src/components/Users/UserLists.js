import Card from '../UI/Card';
import classes from "./UsersList.module.css"


const UserLists = (props) =>{
    return <Card className={classes.users}>
          <ul>
            {props.users.map(user=>(
                <li>{user.name} {user.age}</li>
            ))}
            </ul>

    </Card>
  
}
export default UserLists;