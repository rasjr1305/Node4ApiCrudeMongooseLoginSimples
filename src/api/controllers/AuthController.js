import AuthService from '../services/AuthService.js';
import User from '../models/User.js';

class AuthController {
  static async login(req, res) {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(401).json({ message: 'All fields must be filled' });
    }

    const admin = await User
      .findOne({ email: email, role: 'admin' })
      .select('email password');

    if (!admin || password !== admin.password) {
      return res.status(401).json({ message: 'Incorrect username or password' });
    }

    const token = await AuthService.generateToken(admin);

    return res.json({ token });
  }
}

export default AuthController;