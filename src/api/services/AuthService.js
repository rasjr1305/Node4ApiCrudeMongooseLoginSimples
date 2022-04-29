import jsonwebtoken from 'jsonwebtoken';
import {promisify} from 'util'; 
import config from '../config/config.js';

class AuthService {
  static async generateToken(admin) {
    return jsonwebtoken.sign({ email: admin.email, password: admin.password }, config.JWT_TOKEN);
  }

  static async validateToken(authHeader) {
    return promisify(jsonwebtoken.verify)(authHeader, config.JWT_TOKEN);
  }
}

export default AuthService;