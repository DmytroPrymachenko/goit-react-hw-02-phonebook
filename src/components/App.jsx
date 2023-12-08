import { nanoid } from "nanoid";
import Form from "./Form";



export const App = () => {

  //   createUser = (user) => {
  // const newUser = {
  //   ...user,
  //   id: nanoid(),

  // }
//     this.setState(prev => ({ users: [...prev.users, newUser]}))
// }

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
     
  <Form />


    </div>
  );
};
