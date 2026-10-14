// Функція fetchUser повертає проміс, який через axios отримує одного користувача з API по userId.

import axios from "axios";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const fetchUser = async (userId: number): Promise<User> => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
  );
  return response.data;
};

const getUserName = async (id: number) => {
  const user = await fetchUser(id);
  console.log(user.name);
};

getUserName(1);
