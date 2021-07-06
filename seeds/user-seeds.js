const { User } = require('../models');

const userData = [
  {
    username: 'Travis',
    password: 'password123',
  },
  {
    username: 'Sarah',
    password: 'sarah123',
  },
  {
    username: 'Jazmine',
    password: 'jazmine123',
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
