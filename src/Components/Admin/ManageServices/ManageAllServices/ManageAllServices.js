import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import Navbar from '../../../Shared/Navbar/Navbar';

const ManageAllServices = (props) => {
    const { _id, name } = props.pd;
    console.log(_id)

    const [del, setDel] = useState()
    const deleteProduct = (_id) => {
        console.log(_id)
        fetch(`http://localhost:5000/delete/` + _id, {
            method: 'DELETE',

        })
            .then(res => res.json())
            .then(data => setDel(data))
    }
    return (
        <div className="row ">
          
            <div className='col-md-6'>
                <Table className='table'>
                    <thead >
                        <tr className='col-md-3'>
                            <th className='col-md-3'>{name}</th>
                           
                            <th><button>Add</button>
                                <button onClick={() => deleteProduct(_id)}>Delete</button>
                            </th>
                        </tr>
                    </thead>
                </Table>
            </div>

        </div>
    );
};

export default ManageAllServices;