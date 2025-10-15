import express from 'express';
import session from 'express-session';
import flash from 'connect-flash';
import methodOverride from 'method-override';
import path from 'path';
import { fileURLToPath } from 'url';
import expressLayouts from 'express-ejs-layouts';

import { connectDB, sequelize } from './config/db.js';
import passport from './controllers/authController.js';
import authRoutes from './routes/authRoutes.js';
import postRoutes from './routes/postRoutes.js';
import { User } from './models/User.js';
import { Post } from './models/Post.js';

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);
app.set('layout', 'layout');
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(session({ secret: 'supersecret', resave: false, saveUninitialized: false }));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.get('/', (req, res) => res.render('home', { user: req.user }));
app.use('/', authRoutes);
app.use('/posts', postRoutes);

const PORT = process.env.PORT || 3000;
(async () => {
  await connectDB();
  await sequelize.sync();
  app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
})();
