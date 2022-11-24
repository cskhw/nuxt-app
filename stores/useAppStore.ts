import type { Post } from "@/types/stores/appStore";

export default defineStore("app", {
  state: () => ({
    posts: [
      {
        id: 1,
        author: "foo",
        title: "첫번째 게시글!",
        contents: "첫번째 게시글 내용!",
      },
      {
        id: 2,
        author: "foo",
        title: "세상에서 제일 귀여운 고양이",
        contents: "구라얌",
      },
    ] as Post[],
  }),
  getters: {
    // 포스트가 존재하면 첫번째 포스트 가져옴
    firstPost: (state): Post | boolean => {
      if (state.posts.length) return state.posts[0];
      else return false;
    },
  },
  actions: {
    // Posts 할당
    setPosts(posts: Post[]) {
      this.posts = posts;
    },
  },
});
