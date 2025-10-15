import bcrypt from 'bcrypt';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { User } from '../models/User.js';

// Config Passport Local
passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await User.findOne({ where: { username } });
      if (!user) return done(null, false, { message: 'Usuario no encontrado' });
      const ok = await bcrypt.compare(password, user.passwordHash);
      if (!ok) return done(null, false, { message: 'Contraseña incorrecta' });
      return done(null, user);
    } catch (e) {
      return done(e);
    }
  })
);

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findByPk(id);
    done(null, user);
  } catch (e) {
    done(e);
  }
});

// Controladores
export const getLogin = (req, res) =>
  res.render('login', { message: req.flash('error') });

export const postLogin = passport.authenticate('local', {
  successRedirect: '/posts',
  failureRedirect: '/login',
  failureFlash: true
});

export const getRegister = (req, res) => res.render('register', { message: null });

export const postRegister = async (req, res) => {
  const { username, password } = req.body;
  const exists = await User.findOne({ where: { username } });
  if (exists) return res.render('register', { message: 'Usuario ya existe' });
  const passwordHash = await bcrypt.hash(password, 10);
  await User.create({ username, passwordHash });
  res.redirect('/login');
};

export const logout = (req, res, next) => {
  req.logout(err => {
    if (err) return next(err);
    res.redirect('/login');
  });
};

export default passport;
