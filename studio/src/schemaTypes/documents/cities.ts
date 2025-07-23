import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'city',
  title: 'Service City',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'City Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'state',
      title: 'State (Optional)',
      type: 'string',
    }),
  ],
})
