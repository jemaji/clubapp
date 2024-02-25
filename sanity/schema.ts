import { type SchemaTypeDefinition } from 'sanity'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    {
      type: 'document',
      name: 'urlImage',
      fields: [
        {
          type: 'string',
          name: 'title',
          title: 'name',
        },
        {
          type: 'url',
          name: 'image',
          title: 'Image',
        },
      ],
    },
    {
      type: 'document',
      name: 'post',
      fields: [
        {
          type: 'string',
          name: 'title',
          title: 'Title',
        },
        {
          type: 'text',
          name: 'body',
          title: 'Body',
        },
        {
          type: 'urlImage',
          name: 'mainImage',
          title: 'Main image',
        },
      ],
    },
    {
      type: 'document',
      name: 'landingPage',
      fields: [
        {
          type: 'string',
          name: 'title',
          title: 'Title',
        },
        {
          type: 'text',
          name: 'body',
          title: 'Body',
        },
        {
          type: 'urlImage',
          name: 'mainImage',
          title: 'Main image',
        },
        {
          type: 'array',
          name: 'urlImages',
          title: 'Images',
          of: [
            {
              type: 'urlImage',
            },
          ],
        },
        {
          type: 'string',
          name: 'subtitle',
          title: 'Subtitle',
        },
      ],
    },
  ],
}
