export function ensureAuth(req, res, next) {
  if (req.isAuthenticated()) return next();
  req.flash('error', 'Debes iniciar sesión');
  return res.redirect('/login');
}
