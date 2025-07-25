/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type CallToAction = {
  _type: "callToAction";
  heading?: string;
  text?: string;
  buttonText?: string;
  link?: Link;
};

export type Link = {
  _type: "link";
  linkType?: "href" | "page" | "post";
  href?: string;
  page?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "page";
  };
  post?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "post";
  };
  openInNewTab?: boolean;
};

export type InfoSection = {
  _type: "infoSection";
  heading?: string;
  subheading?: string;
  content?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      linkType?: "href" | "page" | "post";
      href?: string;
      page?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "page";
      };
      post?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "post";
      };
      openInNewTab?: boolean;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
};

export type BlockContent = Array<{
  children?: Array<{
    marks?: Array<string>;
    text?: string;
    _type: "span";
    _key: string;
  }>;
  style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
  listItem?: "bullet" | "number";
  markDefs?: Array<{
    linkType?: "href" | "page" | "post";
    href?: string;
    page?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "page";
    };
    post?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "post";
    };
    openInNewTab?: boolean;
    _type: "link";
    _key: string;
  }>;
  level?: number;
  _type: "block";
  _key: string;
}>;

export type Servicespage = {
  _id: string;
  _type: "servicespage";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  excerpt?: string;
  metaDescription?: string;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    media?: unknown;
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  alt?: string;
  body?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
  benefits?: Array<string>;
};

export type Service = {
  _id: string;
  _type: "service";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  description?: string;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    media?: unknown;
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  benefits?: Array<string>;
};

export type TeamMember = {
  _id: string;
  _type: "teamMember";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  position?: string;
  bio?: string;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    media?: unknown;
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  credentials?: Array<string>;
  department?: "leadership" | "accounting" | "tax" | "advisory";
  email?: string;
  linkedin?: string;
  order?: number;
};

export type City = {
  _id: string;
  _type: "city";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  state?: string;
};

export type GoogleReview = {
  _id: string;
  _type: "googleReview";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  author?: string;
  rating?: 1 | 2 | 3 | 4 | 5;
  content?: string;
  date?: string;
  profilePhoto?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    media?: unknown;
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  isFeatured?: boolean;
};

export type Settings = {
  _id: string;
  _type: "settings";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  description?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal";
    listItem?: never;
    markDefs?: Array<{
      linkType?: "href" | "page" | "post";
      href?: string;
      page?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "page";
      };
      post?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "post";
      };
      openInNewTab?: boolean;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
  ogImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    media?: unknown;
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    metadataBase?: string;
    _type: "image";
  };
};

export type Page = {
  _id: string;
  _type: "page";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  slug?: Slug;
  heading?: string;
  subheading?: string;
  pageBuilder?: Array<{
    _key: string;
  } & CallToAction | {
    _key: string;
  } & InfoSection>;
};

export type Post = {
  _id: string;
  _type: "post";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  content?: BlockContent;
  excerpt?: string;
  coverImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    media?: unknown;
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  };
  date?: string;
  author?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "person";
  };
};

export type Person = {
  _id: string;
  _type: "person";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  firstName?: string;
  lastName?: string;
  picture?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    media?: unknown;
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  };
};

export type SanityAssistInstructionTask = {
  _type: "sanity.assist.instructionTask";
  path?: string;
  instructionKey?: string;
  started?: string;
  updated?: string;
  info?: string;
};

export type SanityAssistTaskStatus = {
  _type: "sanity.assist.task.status";
  tasks?: Array<{
    _key: string;
  } & SanityAssistInstructionTask>;
};

export type SanityAssistSchemaTypeAnnotations = {
  _type: "sanity.assist.schemaType.annotations";
  title?: string;
  fields?: Array<{
    _key: string;
  } & SanityAssistSchemaTypeField>;
};

export type SanityAssistOutputType = {
  _type: "sanity.assist.output.type";
  type?: string;
};

export type SanityAssistOutputField = {
  _type: "sanity.assist.output.field";
  path?: string;
};

export type SanityAssistInstructionContext = {
  _type: "sanity.assist.instruction.context";
  reference?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "assist.instruction.context";
  };
};

export type AssistInstructionContext = {
  _id: string;
  _type: "assist.instruction.context";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  context?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal";
    listItem?: never;
    markDefs?: null;
    level?: number;
    _type: "block";
    _key: string;
  }>;
};

export type SanityAssistInstructionUserInput = {
  _type: "sanity.assist.instruction.userInput";
  message?: string;
  description?: string;
};

export type SanityAssistInstructionPrompt = Array<{
  children?: Array<{
    marks?: Array<string>;
    text?: string;
    _type: "span";
    _key: string;
  } | {
    _key: string;
  } & SanityAssistInstructionFieldRef | {
    _key: string;
  } & SanityAssistInstructionContext | {
    _key: string;
  } & SanityAssistInstructionUserInput>;
  style?: "normal";
  listItem?: never;
  markDefs?: null;
  level?: number;
  _type: "block";
  _key: string;
}>;

export type SanityAssistInstructionFieldRef = {
  _type: "sanity.assist.instruction.fieldRef";
  path?: string;
};

export type SanityAssistInstruction = {
  _type: "sanity.assist.instruction";
  prompt?: SanityAssistInstructionPrompt;
  icon?: string;
  title?: string;
  userId?: string;
  createdById?: string;
  output?: Array<{
    _key: string;
  } & SanityAssistOutputField | {
    _key: string;
  } & SanityAssistOutputType>;
};

export type SanityAssistSchemaTypeField = {
  _type: "sanity.assist.schemaType.field";
  path?: string;
  instructions?: Array<{
    _key: string;
  } & SanityAssistInstruction>;
};

export type SanityImagePaletteSwatch = {
  _type: "sanity.imagePaletteSwatch";
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: "sanity.imagePalette";
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: "sanity.imageDimensions";
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type SanityImageHotspot = {
  _type: "sanity.imageHotspot";
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageCrop = {
  _type: "sanity.imageCrop";
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityFileAsset = {
  _id: string;
  _type: "sanity.fileAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type SanityImageAsset = {
  _id: string;
  _type: "sanity.imageAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityImageMetadata = {
  _type: "sanity.imageMetadata";
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type Geopoint = {
  _type: "geopoint";
  lat?: number;
  lng?: number;
  alt?: number;
};

export type Slug = {
  _type: "slug";
  current?: string;
  source?: string;
};

export type SanityAssetSourceData = {
  _type: "sanity.assetSourceData";
  name?: string;
  id?: string;
  url?: string;
};

export type AllSanitySchemaTypes = CallToAction | Link | InfoSection | BlockContent | Servicespage | Service | TeamMember | City | GoogleReview | Settings | Page | Post | Person | SanityAssistInstructionTask | SanityAssistTaskStatus | SanityAssistSchemaTypeAnnotations | SanityAssistOutputType | SanityAssistOutputField | SanityAssistInstructionContext | AssistInstructionContext | SanityAssistInstructionUserInput | SanityAssistInstructionPrompt | SanityAssistInstructionFieldRef | SanityAssistInstruction | SanityAssistSchemaTypeField | SanityImagePaletteSwatch | SanityImagePalette | SanityImageDimensions | SanityImageHotspot | SanityImageCrop | SanityFileAsset | SanityImageAsset | SanityImageMetadata | Geopoint | Slug | SanityAssetSourceData;
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: ./sanity/lib/queries.ts
// Variable: settingsQuery
// Query: *[_type == "settings"][0]
export type SettingsQueryResult = {
  _id: string;
  _type: "settings";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  description?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal";
    listItem?: never;
    markDefs?: Array<{
      linkType?: "href" | "page" | "post";
      href?: string;
      page?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "page";
      };
      post?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "post";
      };
      openInNewTab?: boolean;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
  ogImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    media?: unknown;
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    metadataBase?: string;
    _type: "image";
  };
} | null;
// Variable: getPageQuery
// Query: *[_type == 'page' && slug.current == $slug][0]{    _id,    _type,    name,    slug,    heading,    subheading,    "pageBuilder": pageBuilder[]{      ...,      _type == "callToAction" => {          link {      ...,        _type == "link" => {    "page": page->slug.current,    "post": post->slug.current  }      },      },      _type == "infoSection" => {        content[]{          ...,          markDefs[]{            ...,              _type == "link" => {    "page": page->slug.current,    "post": post->slug.current  }          }        }      },    },  }
export type GetPageQueryResult = {
  _id: string;
  _type: "page";
  name: string | null;
  slug: Slug | null;
  heading: string | null;
  subheading: string | null;
  pageBuilder: Array<{
    _key: string;
    _type: "callToAction";
    heading?: string;
    text?: string;
    buttonText?: string;
    link: {
      _type: "link";
      linkType?: "href" | "page" | "post";
      href?: string;
      page: string | null;
      post: string | null;
      openInNewTab?: boolean;
    } | null;
  } | {
    _key: string;
    _type: "infoSection";
    heading?: string;
    subheading?: string;
    content: Array<{
      children?: Array<{
        marks?: Array<string>;
        text?: string;
        _type: "span";
        _key: string;
      }>;
      style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "normal";
      listItem?: "bullet" | "number";
      markDefs: Array<{
        linkType?: "href" | "page" | "post";
        href?: string;
        page: string | null;
        post: string | null;
        openInNewTab?: boolean;
        _type: "link";
        _key: string;
      }> | null;
      level?: number;
      _type: "block";
      _key: string;
    }> | null;
  }> | null;
} | null;
// Variable: sitemapData
// Query: *[_type == "page" || _type == "post" && defined(slug.current)] | order(_type asc) {    "slug": slug.current,    _type,    _updatedAt,  }
export type SitemapDataResult = Array<{
  slug: string | null;
  _type: "page";
  _updatedAt: string;
} | {
  slug: string | null;
  _type: "post";
  _updatedAt: string;
}>;
// Variable: allPostsQuery
// Query: *[_type == "post" && defined(slug.current)] | order(date desc, _updatedAt desc) {      _id,  "status": select(_originalId in path("drafts.**") => "draft", "published"),  "title": coalesce(title, "Untitled"),  "slug": slug.current,  excerpt,  coverImage,  "date": coalesce(date, _updatedAt),  "author": author->{firstName, lastName, picture},  }
export type AllPostsQueryResult = Array<{
  _id: string;
  status: "draft" | "published";
  title: string | "Untitled";
  slug: string | null;
  excerpt: string | null;
  coverImage: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    media?: unknown;
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  } | null;
  date: string;
  author: {
    firstName: string | null;
    lastName: string | null;
    picture: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      media?: unknown;
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      alt?: string;
      _type: "image";
    } | null;
  } | null;
}>;
// Variable: morePostsQuery
// Query: *[_type == "post" && _id != $skip && defined(slug.current)] | order(date desc, _updatedAt desc) [0...$limit] {      _id,  "status": select(_originalId in path("drafts.**") => "draft", "published"),  "title": coalesce(title, "Untitled"),  "slug": slug.current,  excerpt,  coverImage,  "date": coalesce(date, _updatedAt),  "author": author->{firstName, lastName, picture},  }
export type MorePostsQueryResult = Array<{
  _id: string;
  status: "draft" | "published";
  title: string | "Untitled";
  slug: string | null;
  excerpt: string | null;
  coverImage: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    media?: unknown;
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  } | null;
  date: string;
  author: {
    firstName: string | null;
    lastName: string | null;
    picture: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      media?: unknown;
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      alt?: string;
      _type: "image";
    } | null;
  } | null;
}>;
// Variable: postQuery
// Query: *[_type == "post" && slug.current == $slug] [0] {    content[]{    ...,    markDefs[]{      ...,        _type == "link" => {    "page": page->slug.current,    "post": post->slug.current  }    }  },      _id,  "status": select(_originalId in path("drafts.**") => "draft", "published"),  "title": coalesce(title, "Untitled"),  "slug": slug.current,  excerpt,  coverImage,  "date": coalesce(date, _updatedAt),  "author": author->{firstName, lastName, picture},  }
export type PostQueryResult = {
  content: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "normal";
    listItem?: "bullet" | "number";
    markDefs: Array<{
      linkType?: "href" | "page" | "post";
      href?: string;
      page: string | null;
      post: string | null;
      openInNewTab?: boolean;
      _type: "link";
      _key: string;
    }> | null;
    level?: number;
    _type: "block";
    _key: string;
  }> | null;
  _id: string;
  status: "draft" | "published";
  title: string | "Untitled";
  slug: string | null;
  excerpt: string | null;
  coverImage: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    media?: unknown;
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  } | null;
  date: string;
  author: {
    firstName: string | null;
    lastName: string | null;
    picture: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      media?: unknown;
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      alt?: string;
      _type: "image";
    } | null;
  } | null;
} | null;
// Variable: postPagesSlugs
// Query: *[_type == "post" && defined(slug.current)]  {"slug": slug.current}
export type PostPagesSlugsResult = Array<{
  slug: string | null;
}>;
// Variable: pagesSlugs
// Query: *[_type == "page" && defined(slug.current)]  {"slug": slug.current}
export type PagesSlugsResult = Array<{
  slug: string | null;
}>;
// Variable: reviewQuery
// Query: *[_type == "googleReview"]{  _id,  author,  rating,  content,  date,  profilePhoto,  isFeatured}
export type ReviewQueryResult = Array<{
  _id: string;
  author: string | null;
  rating: 1 | 2 | 3 | 4 | 5 | null;
  content: string | null;
  date: string | null;
  profilePhoto: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    media?: unknown;
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  } | null;
  isFeatured: boolean | null;
}>;
// Variable: citiesQuery
// Query: *[_type == "city"] | order(name asc){  _id,  name,  state}
export type CitiesQueryResult = Array<{
  _id: string;
  name: string | null;
  state: string | null;
}>;
// Variable: teamMembersQuery
// Query: *[_type == "teamMember"] | order(order asc) {    _id,    name,    position,    bio,    image{      asset->{        _id,        url      },      crop,      hotspot    },    credentials,    department,    email,    linkedin,    order  }
export type TeamMembersQueryResult = Array<{
  _id: string;
  name: string | null;
  position: string | null;
  bio: string | null;
  image: {
    asset: {
      _id: string;
      url: string | null;
    } | null;
    crop: SanityImageCrop | null;
    hotspot: SanityImageHotspot | null;
  } | null;
  credentials: Array<string> | null;
  department: "accounting" | "advisory" | "leadership" | "tax" | null;
  email: string | null;
  linkedin: string | null;
  order: number | null;
}>;
// Variable: allServicesQuery
// Query: *[_type == "service"] | order(_createdAt desc) {    _id,    title,    "slug": slug.current,    description,    benefits,    image {      asset->{        _id,        url,        metadata {          lqip        }      }    },    industry->{      _id,      title,      description    }  }
export type AllServicesQueryResult = Array<{
  _id: string;
  title: string | null;
  slug: string | null;
  description: string | null;
  benefits: Array<string> | null;
  image: {
    asset: {
      _id: string;
      url: string | null;
      metadata: {
        lqip: string | null;
      } | null;
    } | null;
  } | null;
  industry: null;
}>;
// Variable: servicesQuery
// Query: *[_type == "servicespage" && slug.current == $slug][0]{    _id,    _type,    _createdAt,    _updatedAt,    title,    slug,    excerpt,    metaDescription,    image,    body,    benefits  }
export type ServicesQueryResult = {
  _id: string;
  _type: "servicespage";
  _createdAt: string;
  _updatedAt: string;
  title: string | null;
  slug: Slug | null;
  excerpt: string | null;
  metaDescription: string | null;
  image: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    media?: unknown;
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  } | null;
  body: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "normal";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }> | null;
  benefits: Array<string> | null;
} | null;

// Query TypeMap
import "@sanity/client";
declare module "@sanity/client" {
  interface SanityQueries {
    "*[_type == \"settings\"][0]": SettingsQueryResult;
    "\n  *[_type == 'page' && slug.current == $slug][0]{\n    _id,\n    _type,\n    name,\n    slug,\n    heading,\n    subheading,\n    \"pageBuilder\": pageBuilder[]{\n      ...,\n      _type == \"callToAction\" => {\n        \n  link {\n      ...,\n      \n  _type == \"link\" => {\n    \"page\": page->slug.current,\n    \"post\": post->slug.current\n  }\n\n      }\n,\n      },\n      _type == \"infoSection\" => {\n        content[]{\n          ...,\n          markDefs[]{\n            ...,\n            \n  _type == \"link\" => {\n    \"page\": page->slug.current,\n    \"post\": post->slug.current\n  }\n\n          }\n        }\n      },\n    },\n  }\n": GetPageQueryResult;
    "\n  *[_type == \"page\" || _type == \"post\" && defined(slug.current)] | order(_type asc) {\n    \"slug\": slug.current,\n    _type,\n    _updatedAt,\n  }\n": SitemapDataResult;
    "\n  *[_type == \"post\" && defined(slug.current)] | order(date desc, _updatedAt desc) {\n    \n  _id,\n  \"status\": select(_originalId in path(\"drafts.**\") => \"draft\", \"published\"),\n  \"title\": coalesce(title, \"Untitled\"),\n  \"slug\": slug.current,\n  excerpt,\n  coverImage,\n  \"date\": coalesce(date, _updatedAt),\n  \"author\": author->{firstName, lastName, picture},\n\n  }\n": AllPostsQueryResult;
    "\n  *[_type == \"post\" && _id != $skip && defined(slug.current)] | order(date desc, _updatedAt desc) [0...$limit] {\n    \n  _id,\n  \"status\": select(_originalId in path(\"drafts.**\") => \"draft\", \"published\"),\n  \"title\": coalesce(title, \"Untitled\"),\n  \"slug\": slug.current,\n  excerpt,\n  coverImage,\n  \"date\": coalesce(date, _updatedAt),\n  \"author\": author->{firstName, lastName, picture},\n\n  }\n": MorePostsQueryResult;
    "\n  *[_type == \"post\" && slug.current == $slug] [0] {\n    content[]{\n    ...,\n    markDefs[]{\n      ...,\n      \n  _type == \"link\" => {\n    \"page\": page->slug.current,\n    \"post\": post->slug.current\n  }\n\n    }\n  },\n    \n  _id,\n  \"status\": select(_originalId in path(\"drafts.**\") => \"draft\", \"published\"),\n  \"title\": coalesce(title, \"Untitled\"),\n  \"slug\": slug.current,\n  excerpt,\n  coverImage,\n  \"date\": coalesce(date, _updatedAt),\n  \"author\": author->{firstName, lastName, picture},\n\n  }\n": PostQueryResult;
    "\n  *[_type == \"post\" && defined(slug.current)]\n  {\"slug\": slug.current}\n": PostPagesSlugsResult;
    "\n  *[_type == \"page\" && defined(slug.current)]\n  {\"slug\": slug.current}\n": PagesSlugsResult;
    "*[_type == \"googleReview\"]{\n  _id,\n  author,\n  rating,\n  content,\n  date,\n  profilePhoto,\n  isFeatured\n}": ReviewQueryResult;
    "*[_type == \"city\"] | order(name asc){\n  _id,\n  name,\n  state\n}": CitiesQueryResult;
    "\n  *[_type == \"teamMember\"] | order(order asc) {\n    _id,\n    name,\n    position,\n    bio,\n    image{\n      asset->{\n        _id,\n        url\n      },\n      crop,\n      hotspot\n    },\n    credentials,\n    department,\n    email,\n    linkedin,\n    order\n  }\n": TeamMembersQueryResult;
    "\n  *[_type == \"service\"] | order(_createdAt desc) {\n    _id,\n    title,\n    \"slug\": slug.current,\n    description,\n    benefits,\n    image {\n      asset->{\n        _id,\n        url,\n        metadata {\n          lqip\n        }\n      }\n    },\n    industry->{\n      _id,\n      title,\n      description\n    }\n  }\n": AllServicesQueryResult;
    " *[_type == \"servicespage\" && slug.current == $slug][0]{\n    _id,\n    _type,\n    _createdAt,\n    _updatedAt,\n    title,\n    slug,\n    excerpt,\n    metaDescription,\n    image,\n    body,\n    benefits\n  }\n": ServicesQueryResult;
  }
}
