import React, { Component } from 'react';
import StoreList from './components/items/StoreList';
import ListForm from './components/items/ListForm';
import { Button, Icon} from 'semantic-ui-react';

class App extends Component {
state = { groceries: [
  {id:1, items: 'banana', price: '5'},
  {id:2, items: 'pizza' , price: '10'},
  {id:3, items: 'cereal', price: '7'},

],
showForm: true 

}

toggleForm = () => this.setState({ showForm: !this.state.showForm})

deleteList = (id) => {
const groceries = this.state.groceries.filter( list => {
  if (list.id !== id)
  return list
})
this.setState({ groceries })
}

getId = () => {
   return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
};

addList = (incomingList) => {
let newList= { id: this.getId(), ...incomingList }
this.setState({ groceries: [  newList, ...this.state.groceries]})
}
  render() {
    const { groceries, showForm } = this.state
    return(
      
      <div>
        <h1>Grocery Store List </h1>
        <Button onClick={this.toggleForm}>
          Show Form Click <Icon name= 'angle double down' />
        </Button>
        {
            showForm ? <ListForm addList={this.addList} /> : null  
        }

        <StoreList groceries={groceries} deleteList = {this.deleteList}/>
      </div>
    )

  }
}

export default App;
