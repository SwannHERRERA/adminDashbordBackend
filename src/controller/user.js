const User = require('../models/user')
exports.addUser = (req, res, next) => {
  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    role: req.body.role
  })
  user
    .save()
    .then((result) => {
      console.log('Created user')
      res.redirect('/user/list')
    })
    .catch((err) => {
      console.error(err)
    })
}

exports.getEditUser = (req, res, next) => {
  const userId = req.query.userId
  User.findById(userId)
    .then((user) => {
      if (!user) {
        throw new Error('No user')
      }
      return user
    })
    .catch((err) => console.log(err))
}

exports.postEditUser = (req, res, next) => {
  const userId = req.body.userId
  const firstName = req.body.firstName
  const lastName = req.body.lastName
  const email = req.body.email
  const role = req.body.role

  User.findById(userId)
    .then((user) => {
      if (user.userId.toString() !== req.user._id.toString()) {
        return res.redirect('/')
      }
      user.firstName = firstName
      user.lastName = lastName
      user.email = email
      user.role = role
      return user.save().then((result) => {
        console.log('UPDATED USER!')
        res.redirect('/user/list')
      })
    })
    .catch((err) => console.log(err))
}

exports.getUsers = (req, res, next) => {
  User.find()
    .then((users) => {
      console.log(users)
      res.render('admin/user', {
        users: users,
        pageTitle: 'User List',
        path: '/user/list'
      })
    })
    .catch((err) => console.error(err))
}

exports.deleteUser = (req, res, next) => {
  const userId = req.body.userId
  User.deleteOne({ _id: userId, userId: req.user._id })
    .then(() => {
      console.log('DESTROYED user')
      res.redirect('/user/list')
    })
    .catch((err) => console.error(err))
}
