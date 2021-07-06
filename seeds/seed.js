const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
const blogData = require('./blog-seeds.json');
const userData = require('./user-seeds.json');
const commentData = require('./comments-seeds.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Post.bulkCreate(blogData, {
    individualHooks: true,
    returning: true,
  });

  await Comment.bulkCreate(commentData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
