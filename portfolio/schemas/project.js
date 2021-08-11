export default {
	name: 'project',
	title: 'Project',
	type: 'document',
	fields: [
		{
			name: 'projectTitle',
			type: 'string',
		},
		{
			name: 'codeRepo',
			type: 'string',
		},
		{
			name: 'date',
			type: 'datetime',
		},
		{
			name: 'place',
			type: 'string',
		},
		{
			name: 'description',
			type: 'text',
		},
		{
			name: 'mainImage',
			title: 'Main image',
			type: 'image',
			options: {
				hotspot: true,
			},
		},
		{
			name: 'projectType',
			title: 'Project Type',
			type: 'string',
			options: {
				list: [
					{ value: 'Personal Project', title: 'Personal Project' },
					{ value: 'Client Project', title: 'Client Project' },
					{ value: 'School Project', title: 'School Project' },
				],
			},
		},
		{
			name: 'websiteLink',
			type: 'url',
		},
		{
			name: 'githubLink',
			type: 'url',
		},
		{
			name: 'tags',
			type: 'array',
			of: [
				{
					type: 'string',
				},
			],
			options: {
				layout: 'tags',
			},
		},
	],
	orderings: [
		{
			name: 'dateDesc',
			type: 'datetime',
			by: [{ field: 'date', direction: 'desc' }],
		},
	],
};
