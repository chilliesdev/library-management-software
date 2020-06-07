import React from 'react';

const Dashboard = React.lazy(() => import('./views/Dashboard'));
const Users = React.lazy(() => import('./views/Users/Users'));
const User = React.lazy(() => import('./views/Users/User'));
const Library = React.lazy(() => import('./views/Library/Library'));
const Customers = React.lazy(() => import('./views/Customer/Customers'));
const Customer = React.lazy(() => import('./views/Customer/Customer'));
const Books = React.lazy(() => import('./views/Books/Books'));
const Book = React.lazy(() => import('./views/Books/Book'));
const Charts = React.lazy(() => import('./views/Charts'));
const About = React.lazy(() => import('./views/About/About'));

const routes = [ 
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },
  { path: '/library', exact: true, name: 'Libraries', component: Library },
  { path: '/customers', exact: true, name: 'Customers', component: Customers },
  { path: '/customers/:id', exact: true, name: 'Customer', component: Customer },
  { path: '/books', exact: true, name: 'Books', component: Books },
  { path: '/books/:id', exact: true, name: 'Book', component: Book },
  { path: '/about', exact: true, name: 'About', component: About },
  { path: '/statistics', exact: true, name: 'Statistcs', component: Charts },
];

export default routes;
