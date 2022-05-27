const jwt = require('jsonwebtoken');
const {users} = require('../models/index.js');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');

dotenv.config();

exports.signup = (req, res, next) => {bcrypt.hash(req.body.password, 10)
    .then(hash => {
      models.users.create({
        firstName: req.body.firstName,
        lastName : req.body.lastName,
        email: req.body.email,
        admin: false,
        password: hash
      });
      user.save()
        .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
        .catch(error => res.status(400).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};

exports.login = (req, res, next) => { models.users.findOne({ email: req.body.email })
.then(users => {
  if (!users) {
    return res.status(401).json({ error: 'Utilisateur non trouvé !' });
  }
  bcrypt.compare(req.body.password, users.password)
    .then(valid => {
      if (!valid) {
        return res.status(401).json({ error: 'Mot de passe incorrect !' });
      }
      res.status(200).json({
        userId: users._id,
        admin: users.admin,
        token: jwt.sign(
          { userId: users._id },
          process.env.JWTPRIVATEKEY,
          { expiresIn: '24h' }
        )
      });
    })
    .catch(error => res.status(500).json({ error }));
})
.catch(error => res.status(500).json({ error }));

};

exports.deleteUser = (req, res, next) => {
  models.users.findOne({ where: { id: req.params.id }})  
    .then(() => {
        models.users.destroy({ where: { id: req.params.id }}) 
                  .then((user) => res.status(200).json(user)
                  ({ message: 'Compte supprimé' }))
                  .catch(error => res.status(400).json({ error }));
              })
          .catch (error => res.status(500).json({ error }));
};



exports.getOneUser = (req, res, next) => {
  models.users.findOne
  ({ where: { id: req.params.id }})
      .then((user) => res.status(200).json(user))
      .catch(error => res.status(404).json({ error }));
};

exports.getAllUsers = (req, res, next) => {
  models.users.findAll({attributes: ['id', 'email','firstName','lastName']}) 
      .then((users) => res.status(200).json(users))
      .catch(error => res.status(400).json({ error }));
};


exports.updateUser = (req, res, next) => {
try {
  models.users.update({
      email: req.body.email
  }, {
      where: {
          id: (req.params.id)
      }
  });

  return res.status(200).send({
      message: "email modifiée"
  })
} catch (err) {
  return res.status(500).json(err);
}
}
