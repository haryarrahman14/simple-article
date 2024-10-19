export interface TextElement {
  type: "element" | "text";
  tagname?: string;
  parameters?: {
    xmlns?: string;
    "xmlns:xlink"?: string;
    align?: string;
    ref?: string;
  };
  children?: TextElementChild[];
  content?: string;
}

export interface TextElementChild {
  type: any;
  tagname?: string;
  children?: TextElementChild[];
  content?: string;
  parameters?: any;
  alt?: string;
}

export interface Contributor {
  canonicalURL: string;
  id: string;
  names: {
    first: string;
    full: string;
    last: string;
  };
  role: string;
}

export interface Location {
  canonicalURL: string;
  id: string;
  title: string;
}

export interface MediaEmbedded {
  alt?: string;
  byLine: {
    json: TextElement;
  };
  canonicalURL: string;
  caption?: string;
  dates: {
    displayPublished: string;
    published: string;
    updated: string;
  };
  docType: string;
  id: string;
  media: {
    image: {
      primary: {
        complete: {
          cropHeight: number;
          cropWidth: number;
          height: number;
          ratio?: string;
          url: string;
          width: number;
          x?: number;
          y?: number;
        }[];
      };
    };
  };
  source: string;
  sourceURL: string;
  title: string;
  titleAlt?: {
    lg: string;
    md: string;
    sm: string;
  };
  viewType: string;
  externalembed?: any;
}

export interface Article {
  embedded: {
    contributors: Contributor[];
    locations: Location[];
    mediaEmbedded: MediaEmbedded[];
    mediaFeatured: MediaEmbedded[];
    subjects: Location[];
  };
  canonicalURL: string;
  dates: {
    displayPublished: string;
    displayUpdated: string;
    published: string;
    updated: string;
  };
  docType: string;
  embeddedMedia: MediaEmbedded[];
  featuredMedia: MediaEmbedded[];
  id: string;
  keywords: string[];
  source: string;
  sourceURL: string;
  synopsis: string;
  synopsisAlt: {
    lg: string;
    sm: string;
  };
  text: {
    json: TextElement;
  };
  title: string;
  titleAlt: {
    lg: string;
    md: string;
    sm: string;
  };
}
