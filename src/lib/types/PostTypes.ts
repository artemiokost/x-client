interface PostContent {
  id?: string | null
  title?: string | null,
  text?: string | null,
  uri?: string | null
}

interface PostState extends FetchState {
  content: PostContent
}

interface PostPageState extends FetchState {
  content: Page<PostContent>
}
