import { User } from '../../../db/models';

const userQueries = {
  users: async (_, args) => {
    const users = await User.find();

    return users;
  },
  user: async (_, { id }) => {
    const user = await User.findById(id);

    return user;
  },
};

export default userQueries;