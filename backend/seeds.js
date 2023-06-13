import User from './models/userModel.js';

const seedProducts = async () => {
  try {
    await User.sync({ force: true }); // use { force: true } in development only
    await User.bulkCreate([
      { firstName: 'Product 1', lastName: 'This is a test product' },
      { firstName: 'Product 2',  lastName: 'This is another test product2'},
      { firstName: 'Product 3', lastName: 'This is yet another test product3' }
    ]);
    console.log('Seed data for products created successfully');
  } catch (error) {
    console.error('Error creating seed data for products:', error);
  }
};

export default seedProducts;


