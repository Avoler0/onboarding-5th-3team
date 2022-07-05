import axios from 'axios';

const http = axios.create({
  baseURL: 'http://localhost:4000/',
  headers: {
    'Content-type': 'application/json',
  },
});

class FeedDataService {
  getFeeds() {
    return http.get('http://localhost:4000/posts');
  }
  getFeed(id) {
    return http.get(`http://localhost:4000/posts/${id}`);
  }
  postFeed(data) {
    return http.post('http://localhost:4000/posts', data);
  }

  updateFeed(data) {
    return http.put(`http://localhost:4000/posts/${data.id}`, data);
  }
}

export default new FeedDataService();
