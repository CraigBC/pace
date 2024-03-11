export interface IArticle {
  html: string;
}

export const Article = (props: IArticle) => (
  <article className="flow" dangerouslySetInnerHTML={{ __html: props.html }} />
);

export default Article;
