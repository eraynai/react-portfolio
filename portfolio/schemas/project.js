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
						value: 'School Project - Solo Developer',
						title: 'School Project - Solo Developer',
					},
					{
						value: 'School Project - Team Project',
						title: 'School Project - Team Project',
					},
					{
						value: 'Client Project - Team Project',
						title: 'Client Project - Team Project',
					},
					{
						value: 'Client Project - Solo Developer',
						title: 'Client Project - Solo Developer',
					},
					{
						value: 'Personal Project - Solo Developer',
						title: 'Personal Project - Solo Developer',
					},
					{
						value: 'Personal Project - Team Project',
						title: 'Personal Project - Team Project',
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
