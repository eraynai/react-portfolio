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
			name: 'order',
			title: 'Order',
			type: 'number',
			hidden: true,
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
					{
						value: 'Solo Developer',
						title: 'Solo Developer',
					},
					{
						value: 'Team Project',
						title: 'Team Project',
					},
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
};
