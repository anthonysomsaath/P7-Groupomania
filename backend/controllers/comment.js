const models =require('../models/index.js');
const authUserId = require('../middleware/authUserId');
const Post = models.posts;
const User = models.users;
const Comment = models.comments;

exports.getAllComments = (req, res, next) => {
    models.comments.findAll({
        include:{
            model:Post,
            model:User
        },
         where: { postId: req.params.postId}
        })
    .then(comments => res.status(200).json(comments))
    .catch(error => res.status(500).json(error))
};

exports.createComment = (req, res, next) => {
    const comment = {
        userId: authUserId,
        postId: req.body.postId,
        comment: req.body.comment
    };
    Comment.create(comment)
        .then(() => res.status(201).json({ message: "commentaire crée!" }))
        .catch(error => res.status(400).json({ error }));
};

exports.deleteComment = (req, res, next) => {
    models.comments.findOne ({ 
        where: { id: req.params.id }})          
          models.comments.destroy({where:{id: req.params.id }})
            .then(() => res.status(200).json({ message: 'commentaire supprimé !'}))
            .catch(error => res.status(400).json({ error }));
    
};