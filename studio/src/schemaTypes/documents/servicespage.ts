// schemas/service.ts
import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'servicespage',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.max(160),
    }),
    defineField({
      name: 'image',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(), // Optional but recommended
    }),
    defineField({
      name: 'alt',
      title: 'alt',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'body',
      title: 'Body Content',
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule) => Rule.required(), // Optional
    }),
    defineField({
      name: 'benefits',
      title: 'Key Benefits',
      type: 'array',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.max(10), // Optional: limit benefit list
    }),
  ],
})
