function displayPosts(posts) {
  const ul = document.getElementById('post-list');

  if (!ul) {
    console.error('Target element with id "post-list" was not found in the DOM.');
    return;
  }

  ul.innerHTML = '';

  posts.forEach((post) => {
    const li = document.createElement('li');

    const h1 = document.createElement('h1');
    h1.textContent = post.title;

    const p = document.createElement('p');
    p.textContent = post.body;

    li.appendChild(h1);
    li.appendChild(p);

    ul.appendChild(li);
  });
}

async function fetchAndDisplayPosts() {
  const API_URL = 'https://jsonplaceholder.typicode.com/posts';

  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const posts = await response.json();
    displayPosts(posts);
  } catch (error) {
    console.error('Error fetching posts:', error.message);
  }
}

fetchAndDisplayPosts();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { displayPosts, fetchAndDisplayPosts };
}