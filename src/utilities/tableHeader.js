import React from 'react';
import EditDelete from '../components/common/EditDelete';

export const todoColumns = [
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'name',
  },
  {
    title: 'DateAdded',
    dataIndex: 'dateAdded',
    key: 'dateadd',
  },
  {
    title: 'Update/Delete',
    dataIndex: '',
    key: 'ud',
    render: () => (
     <div> 
      <button>Update</button>
      <button>Delete</button>
     </div> 
    ),
  },
];

export const userColumns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Action',
    dataIndex: '',
    key: 'x',
    render: (text, record) => (
      <div>
         <button>Update</button>
         <button>Delete</button>
      </div>
    ),
  },
];
