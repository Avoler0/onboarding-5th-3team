import axios from 'axios';
import { getLoginUser, setLoginUser } from '../component/commons/utils/lib';

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

  async updateFeed(prevFeed, newComment) {
    const commentId =
      prevFeed.reply.sort((a, b) => b.id - a.id)[0]?.id + 1 ?? 1;
    const reply = [{ id: commentId, ...newComment }, ...prevFeed.reply];
    const data = {
      ...prevFeed,
      reply,
    };

    return http.put(`http://localhost:4000/posts/${data.id}`, data);
  }

  toggleLike(data) {
    const user = getLoginUser();
    const hasLike = !!user.like[data.id];
    let like = data.like;

    if (hasLike) {
      like = like - 1;
      delete user.like[data.id];
    } else {
      like = like + 1;
      user.like[data.id] = data.id;
    }

    const newData = { ...data, like };
    setLoginUser({ ...user });
    return http.put(`http://localhost:4000/posts/${data.id}`, newData);
  }
}

export default new FeedDataService();
