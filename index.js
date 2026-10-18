
async function fetchAndDisplayPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    
    displayPosts(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
}

fetchAndDisplayPosts();