export default {
    name: 'socialMedia',
    title: 'Social Media',
    type: 'object',
    fields: [
        {
            name: 'icon',
            type: 'image',
            title: 'Icon',
            options:{
                hotspot: true
            }
        },
        {
            name: 'link',
            type: 'url',
            title: 'Link'
        }
    ]
}