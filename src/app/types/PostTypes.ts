interface PostContent {
  title?: string;
}

interface PostState extends FetchState {
  content: PostContent;
}

interface PostPageState extends FetchState {
  content: Page<PostContent>;
}
