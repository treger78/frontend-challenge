const API_KEY = '90c9bc4a-65e2-4466-aea1-a76407b1b92d';

export default async function fetchCats(page = 1, limit = 10) {
  const res = await fetch(`https://api.thecatapi.com/v1/images/search?limit=${limit}&mime_types=['true']&page=${page}`, {
    headers: {
      'x-api-key': API_KEY,
    }
  });
  
  return await res.json();
}
