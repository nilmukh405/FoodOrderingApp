import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurants',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: rule=> rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
      validation: rule=> rule.max(200),
    }),
    defineField({
      name: 'image',
      type:'image',
      title :'Image of the restaurant',
    }),
    defineField({
        name: 'lat',
        type:'number',
        title :'Latitude of the restaurant',
    }),
    defineField({
        name: 'lng',
        type:'number',
        title :'Longitude of the restaurant',
    }),
    defineField({
        name: 'address',
        type:'string',
        title :'Address of the restaurant',
        validation: rule=> rule.required(),
    }),
    defineField({
        name: 'rating',
        type:'number',
        title :'Enter a number between 1 & 5',
        validation: rule=> rule.required().min(1).max(5).error('Please enter a value between 1 and %'),
    }),
    defineField({
        name: 'reviews',
        type:'string',
        title :'Reviews',
    }),
    defineField({
        name: 'type',
        title:'Category',
        validation: rule=> rule.required(),
        type:'reference',
        to: [{type: 'category'}]
    }),
    defineField({
        name: 'dish',
        type:'array',
        title:'Dishes',
        of: [{type: 'reference',to:[{type:'dish'}]}]
    }),
 ],
})
