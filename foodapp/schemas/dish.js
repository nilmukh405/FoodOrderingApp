import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Dishes',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Dish Name',
      type: 'string',
      validation: rule=> rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Dish Description',
      type: 'string',
      validation: rule=> rule.required()
    }),
    defineField({
      name: 'image',
      type:'image',
      title :'Image of the dish'
    }),
    defineField({
        name: 'price',
        type:'number',
        title :'Price of the dish'
      })
  ],
})
