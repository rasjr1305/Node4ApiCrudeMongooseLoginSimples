import AuthService from '../services/AuthService.js'

async function isLoggedIn(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: 'missing auth token' });
  }
  
  try {
    
    const decoded = await AuthService.validateToken(authHeader);
    return next();
  } catch (err) {
    return res.status(401).json({ message: 'jwt malformed' });
  }
}

export default isLoggedIn;