const adminMiddleware = (req, res, next) => {
    // Assuming user info is attached to req by previous middleware like authMiddleware
    if (req.user && req.user.role === 'admin') {
      next(); // User is admin, allow access
    } else {
      return res.status(403).json({ message: 'Access denied. Admins only.' });
    }
  };
  
  export default adminMiddleware;
  