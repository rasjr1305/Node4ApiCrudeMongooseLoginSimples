import mongoose from '../database/database.js'

const UserSchema = new mongoose.Schema(
    {
      name: { type: String, required: true },
      email: { type: String, unique: true,  required: true },
      password: { type: String, required: true, select: false },
      role: { type: String,  required: false }
    },
  );

  const User = mongoose.model('User', UserSchema);

export default User;