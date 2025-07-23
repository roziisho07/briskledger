import { defineQuery, groq } from "next-sanity";

export const settingsQuery = defineQuery(`*[_type == "settings"][0]`);

const postFields = /* groq */ `
  _id,
  "status": select(_originalId in path("drafts.**") => "draft", "published"),
  "title": coalesce(title, "Untitled"),
  "slug": slug.current,
  excerpt,
  coverImage,
  "date": coalesce(date, _updatedAt),
  "author": author->{firstName, lastName, picture},
`;

const post2fields = /* groq */ `
  _id,
  "status": select(_originalId in path("drafts.**") => "draft", "published"),
  "title": coalesce(title, "Untitled"),
  "slug": slug.current,
  excerpt,
  coverImage,
  "date": coalesce(date, _updatedAt),
  "author": author->{firstName, lastName, picture},
`;

const linkReference = /* groq */ `
  _type == "link" => {
    "page": page->slug.current,
    "post": post->slug.current
  }
`;

const linkFields = /* groq */ `
  link {
      ...,
      ${linkReference}
      }
`;

export const getPageQuery = defineQuery(`
  *[_type == 'page' && slug.current == $slug][0]{
    _id,
    _type,
    name,
    slug,
    heading,
    subheading,
    "pageBuilder": pageBuilder[]{
      ...,
      _type == "callToAction" => {
        ${linkFields},
      },
      _type == "infoSection" => {
        content[]{
          ...,
          markDefs[]{
            ...,
            ${linkReference}
          }
        }
      },
    },
  }
`);

export const sitemapData = defineQuery(`
  *[_type == "page" || _type == "post" && defined(slug.current)] | order(_type asc) {
    "slug": slug.current,
    _type,
    _updatedAt,
  }
`);

export const allPostsQuery = defineQuery(`
  *[_type == "post" && defined(slug.current)] | order(date desc, _updatedAt desc) {
    ${postFields}
  }
`);

export const morePostsQuery = defineQuery(`
  *[_type == "post" && _id != $skip && defined(slug.current)] | order(date desc, _updatedAt desc) [0...$limit] {
    ${postFields}
  }
`);

export const postQuery = defineQuery(`
  *[_type == "post" && slug.current == $slug] [0] {
    content[]{
    ...,
    markDefs[]{
      ...,
      ${linkReference}
    }
  },
    ${postFields}
  }
`);

export const postPagesSlugs = defineQuery(`
  *[_type == "post" && defined(slug.current)]
  {"slug": slug.current}
`);

export const pagesSlugs = defineQuery(`
  *[_type == "page" && defined(slug.current)]
  {"slug": slug.current}
`);

export const reviewQuery = defineQuery(`*[_type == "googleReview"]{
  _id,
  author,
  rating,
  content,
  date,
  profilePhoto,
  isFeatured
}`);

export const citiesQuery = defineQuery(`*[_type == "city"] | order(name asc){
  _id,
  name,
  state
}`);

// queries/teamMembers.ts

export const teamMembersQuery = defineQuery(`
  *[_type == "teamMember"] | order(order asc) {
    _id,
    name,
    position,
    bio,
    image{
      asset->{
        _id,
        url
      },
      crop,
      hotspot
    },
    credentials,
    department,
    email,
    linkedin,
    order
  }
`);

// queries/serviceQuery.ts

export const allServicesQuery = defineQuery(`
  *[_type == "service"] | order(_createdAt desc) {
    _id,
    title,
    "slug": slug.current,
    description,
    benefits,
    image {
      asset->{
        _id,
        url,
        metadata {
          lqip
        }
      }
    },
    industry->{
      _id,
      title,
      description
    }
  }
`);
// lib/queries.ts or queries/serviceQuery.ts

export const servicesQuery =
  defineQuery(` *[_type == "servicespage" && slug.current == $slug][0]{
    _id,
    _type,
    _createdAt,
    _updatedAt,
    title,
    slug,
    excerpt,
    metaDescription,
    image,
    body,
    benefits
  }
`);
