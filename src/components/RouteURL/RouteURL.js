import React from 'react';
// 404
import ErrorPage from './../Sections/404/ErrorPage';

// COMPONENT
import Table from './../Sections/TableProduct/Table';

// Action
import ActionPage from './../Sections/ActionPage/ActionPage';

const routesUrl = [
  {
    path: '/',
    exact: true,
    main: () => <Table />,
  },
  {
    path: '/product-list',
    exact: true,
    main: () => <Table />,
  },
  {
    path: '/product/addproduct',
    exact: false,
    main: ({ history }) => <ActionPage history={history} />,
  },
  {
    path: '/products/:id/edit',
    exact: false,
    main: ({ match, history }) => (
      <ActionPage match={match} history={history} />
    ),
  },
  {
    path: '',
    exact: false,
    main: () => <ErrorPage />,
  },
];

export default routesUrl;
