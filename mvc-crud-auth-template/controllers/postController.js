import { Post } from '../models/Post.js';

export const listPosts = async (req, res) => {
  const posts = await Post.findAll({ order: [['createdAt', 'DESC']] });
  res.render('posts/index', { posts, user: req.user });
};

export const showNew = (req, res) => res.render('posts/new');

export const createPost = async (req, res) => {
  const { title, body } = req.body;
  await Post.create({ title, body });
  res.redirect('/posts');
};

export const showPost = async (req, res) => {
  const post = await Post.findByPk(req.params.id);
  if (!post) return res.redirect('/posts');
  res.render('posts/show', { post });
};

export const showEdit = async (req, res) => {
  const post = await Post.findByPk(req.params.id);
  if (!post) return res.redirect('/posts');
  res.render('posts/edit', { post });
};

export const updatePost = async (req, res) => {
  const { title, body } = req.body;
  await Post.update({ title, body }, { where: { id: req.params.id } });
  res.redirect('/posts');
};

export const deletePost = async (req, res) => {
  await Post.destroy({ where: { id: req.params.id } });
  res.redirect('/posts');
};
