// Функція fetchPosts повинна отримати список постів з API за допомогою бібліотеки axios.

import axios from "axios";

// Завдання:

// Оголосіть інтерфейс Post для поста (перевірте, які властивості користувача містяться у відповіді бекенда).
// Типізуйте функцію fetchPosts, вказавши, що вона повертає проміс, який містить масив об'єктів типу Post.

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const fetchPosts = async (): Promise<Post[]> => {
  const response = await axios.get<Post[]>(
    "https://jsonplaceholder.typicode.com/posts",
  );
  return response.data;
};

console.log(fetchPosts());

// Оголосіть функцію logThreePosts, яка виведе в консоль дані перших 3 постів, виводячи їхні title та body.

const logThreePosts = async (): Promise<void> => {
  try {
    const posts = await fetchPosts();

    const firstThreePosts = posts.slice(0, 3);

    firstThreePosts.forEach((post) => {
      console.log({ title: post.title, body: post.body });
    });
  } catch (error) {
    console.error(error);
  }
};

logThreePosts();
