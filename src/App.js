import React, { Component } from 'react';
import { Route, Link, BrowserRouter } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Dashboard/dashboard';
import Fanexperience from './Components/FanExperience/fanexperience';
import {API, graphqlOperation} from 'aws-amplify';

const listTodos = `query listTodos {
  listTodos{
    items{
      id
      name
      description
    }
  }
}`

const addTodo = `mutation createTodo($name:String! $description: String!) {
  createTodo(input:{
    name:$name
    description:$description
  }){
    id
    name
    description
  }
}`


class App extends Component {

  todoMutation = async () => {
    //change name and description to what you want to query to database
    const todoDetails = {
      name: document.getElementById("name").value,
      description: document.getElementById("description").value
    };
    
    const newEvent = await API.graphql(graphqlOperation(addTodo, todoDetails));
    alert(JSON.stringify(newEvent));
  }

  listQuery = async () => {
    console.log('listing todos');
    const allTodos = await API.graphql(graphqlOperation(listTodos));
    alert(JSON.stringify(allTodos));
  }

  state = {users: [] }
  async componentDidMount(){
    const allTodos = await API.graphql(graphqlOperation(listTodos));
    this.setState({
      users: allTodos.data.listTodos.items
    })

  }


  // render() {
  //   return (
  //     //Fan experience page. This is the first page that will load. For Dashboard access for now 
  //     //we will have to add /dashboardRAAMforVIPaccess to out http

  //     //Removing the extact will show both the fan page and dash page together
  //     //which we might need later to avoid multiple same implementations.
  //     //For development purpose I have added the exact.
  //     <BrowserRouter>
  //       <div>
  //         <Route path="/" component={Fanexperience} exact />
  //         <Route path="/dashboardRAAMforVIPaccess" component={Dashboard} />
  //       </div>
  //     </BrowserRouter>


  //   );
  // }


  //this a temporary render method just to query data from database.
  render() {
    return (
      <div className="App">
          
          <input id="name" placeholder="Name"/>
          <input id="description" placeholder="Description"/>
    
        <button onClick={this.listQuery}>GraphQL Query</button>
        <button onClick={this.todoMutation}>GraphQL Mutation</button>
     
        {
          this.state.users.map((user,index)=>(
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
               <tr key={index}>
                <td key={index}>{user.id}</td>
                <td key={index}>{user.name}</td>
                <td key={index}>{user.description}</td>
             </tr>
            </tbody>
           </table>
          ))

        }
     
      </div>
    );
  }
}

export default App;
