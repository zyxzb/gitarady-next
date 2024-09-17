export type ImageType = {
  url: string;
};

export type PostType = {
  id: string;
  title: string;
  slug: string;
  image: ImageType;
  paragraphShort: string;
  _firstPublishedAt: Date;
  date?: string | Date;
};

export type SeoTags = {
  title: string;
  description: string;
};

export type ArticleType = {
  id: string;
  title: string;
  subtitle: string;
  paragraphShort: string;
  subtitleH3: string;
  content: string;
  date: string;
  slug: string;
  image: ImageType;
  seoTags: SeoTags;
};

export type ArticleCardType = {
  id: string | number;
  title: string;
  slug: string;
  image: string;
  paragraphShort: string;
  date: string;
};
