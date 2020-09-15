// entry point file

import "./app";

interface User {
  name: string;
  age?: number;
}

function hello(user: User) {
  const username = user.name;
  console.log(username);
}
