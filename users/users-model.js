module.exports = {
    find,
    findById,
    findUserPosts,
    add
}

const db = require('../data/db-config.js');

function find() {
    return db('users')
}

function findById(id) {
    return db('users').where({ id }).first()
}

function findUserPosts(userId) {
    return db('posts as p')
    .join('users as u', 'u.id', 'p.user_id') // doesn't specify specify columns so it gets all info including username
    .select('p.id', 'p.contents as Wisdom', 'u.username as Philosopher')
    .where({ user_id: userId })
}

function add(userData) {
    return db('users').insert(userData, 'id');
}