// schemas/review.ts
import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'googleReview',
  title: 'Google Review',
  type: 'document',
//   icon: () => '⭐', // Optional emoji icon
  fields: [
    defineField({
      name: 'author',
      title: 'Author Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
      validation: (Rule) => Rule.required().min(1).max(5).error('Rating must be between 1 and 5'),
      options: {
        list: [
          {title: '⭐ (1)', value: 1},
          {title: '⭐⭐ (2)', value: 2},
          {title: '⭐⭐⭐ (3)', value: 3},
          {title: '⭐⭐⭐⭐ (4)', value: 4},
          {title: '⭐⭐⭐⭐⭐ (5)', value: 5},
        ],
        layout: 'radio', // Visual rating selector
      },
    }),
    defineField({
      name: 'content',
      title: 'Review Text',
      type: 'text',
      rows: 4, // Larger input area
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Review Date',
      type: 'date',
      options: {
        dateFormat: 'MMMM D, YYYY',
      },
      initialValue: () => new Date().toISOString().split('T')[0], // Default: today
    }),
    defineField({
      name: 'profilePhoto',
      title: 'Author Photo',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'isFeatured',
      title: 'Featured Review?',
      type: 'boolean',
      description: 'Show this review prominently on the homepage',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'author',
      subtitle: 'content',
      media: 'profilePhoto',
      rating: 'rating',
    },
    prepare({title, subtitle, media, rating}) {
      return {
        title: `${title} (${'⭐'.repeat(rating)})`,
        subtitle: subtitle.slice(0, 50) + '...',
        media,
      }
    },
  },
})
