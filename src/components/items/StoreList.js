import React from 'react';
import List from './List';
 
const StoreList = ({groceries, deleteList}) => (
    groceries.map( list => <List key={list.id}  {...list} deleteList = {deleteList} />)
    )
     


export default StoreList;