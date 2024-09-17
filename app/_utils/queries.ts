import { performRequest } from '../_lib/datocms';
import { ArticleType } from '../_types';

export const All_BLOG_POSTS_QUERY = `
  query {
    allArticles (orderBy:date_DESC) {
      id
      title
      slug
      image {
        url
      }
      paragraphShort
      _status
      _firstPublishedAt
    }
    _allArticlesMeta {
      count
    }
}`;

export const getData = async (slug: string) => {
  const BLOG_POSTS_QUERY = `query MyQuery {
    article(filter: {slug: {eq: "${slug}"}}) {
        id
        title
        subtitle
        paragraphShort
        subtitleH3
        content
        date
        slug
        image { 
          url
        }
        seoTags {
          description
          title
        }
    }
  }`;

  const data = performRequest<{
    article: ArticleType;
  }>(BLOG_POSTS_QUERY);
  return data;
};
