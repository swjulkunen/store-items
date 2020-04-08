import React from 'react';
import {Button} from 'semantic-ui-react';


const List = ({ id, items, price, deleteList  }) => (
        <div key={id}>
         <h3>{items}</h3>
         <h3>{price}</h3>
         <Button color="red" onClick={() => deleteList(id)}>
                 Delete
         </Button>
        </div>

)

export default List;