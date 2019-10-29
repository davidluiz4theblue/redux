let initialState = [
  {
    id: 1,
    name: 'Angular',
    price: '400',
    status: true,
  },
  {
    id: 2,
    name: 'React JS',
    price: '700',
    status: true,
  },
  {
    id: 3,
    name: 'Vue JS',
    price: '200',
    status: false,
  },
];

const products = (state = initialState, action) => {
  switch (action.type) {
    default:
      return [...state];
  }
};

export default products;
