import User from '../models/User.js';

class UserController {
  static async create(req, res) {
    const { name, email, password } = req.body; // const name = req.body.name , etc
    try {
      const createdUser = await User.create({ name, email, password }); 

      return res.status(201).json({ user: createdUser.toJSON() });
    } catch (err) {
      return res.status(400).json({ message: 'Invalid entries. Try again.' });
    }
  }

  static async find(_req, res) {
    const user = await User.find({});

    return res.status(200).json(user);
  }

  static async findOne(req, res) {
    const { id } = req.params;
    try {
      const user = await User.findById(id);
      if (!user) {
        return res.status(404).json({ message: 'user not found' });
      }

     return res.status(200).json(user);
    } catch (err) {
      return res.status(500).json({ message: 'internal server error' });
    }
  }

  static async updateOne(req, res) {
    const { id } = req.params;
    const { name, email, password } = req.body;
    try {
      const user = await User.findById(id);
      if (!user) {
        return res.status(404).json({ message: 'user not found' });
      }
      user.name = name;
      user.email = email;
      user.password = password;
      await user.save();

      return res.status(200).json(user);
    } catch (err) {
      return res.status(500).json(err);
    }
  }

  static async deleteOne(req, res) {
    const { id } = req.params;

    try {
      const user = await User.findById(id);//await User.findOne({ _id: id });
      if (!user) {
        return res.status(404).json({ message: 'user not found' });
      }
      await user.remove();

      return res.status(200).json(user);
    } catch (err) {
      return res.status(500).json(err);
    }
  }
}

export default UserController;