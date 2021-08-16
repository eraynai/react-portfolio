import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import sanityClient from '../../client';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 600,
	},
	media: {
		height: 0,
		paddingTop: '56.25%', // 16:9
	},
	expand: {
		transform: 'rotate(0deg)',
		marginLeft: 'auto',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest,
		}),
	},
	expandOpen: {
		transform: 'rotate(180deg)',
	},
	avatar: {
		backgroundColor: red[500],
	},
}));

export default function RecipeReviewCard() {
	const classes = useStyles();
	const [expanded, setExpanded] = useState(false);
	const [projectData, setProjectData] = useState(null);
	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == 'project'] | order(order asc){
			projectTitle,
			codeRepo,
			date,
			place,
			description,
			websiteLink,
			githubLink,
			tags,
			technologies,
			projectType, 
			mainImage{
				asset->{
					_id,
					url
				},
				alt
			}
		}`
			)
			.then((data) => setProjectData(data))
			.catch(console.error);
	}, []);

	return (
		<React.Fragment>
			{projectData &&
				projectData.map((project, index) => (
					<Card className={classes.root}>
						<CardHeader title={project.projectTitle} />
						<CardMedia
							className={classes.media}
							image={project.mainImage.asset.url}
						/>
						<CardContent>
							<Typography variant='body2' color='textSecondary' component='p'>
								{project.description}
							</Typography>
						</CardContent>
						<CardActions>
							<Button size='small' color='primary'>
								Share
							</Button>
							<Button size='small' color='primary'>
								Learn More
							</Button>
						</CardActions>

						<CardActions disableSpacing>
							<CardContent>
								<Typography variant='body2' color='textSecondary' component='p'>
									Click to Learn More
								</Typography>
							</CardContent>
							<IconButton
								className={clsx(classes.expand, {
									[classes.expandOpen]: expanded,
								})}
								onClick={handleExpandClick}
								aria-expanded={expanded}
								aria-label='show more'
							>
								<ExpandMoreIcon />
							</IconButton>
						</CardActions>
						<Collapse in={expanded} timeout='auto' unmountOnExit>
							<CardContent>
								<Typography paragraph>
									<strong>Technologies Used:</strong>
								</Typography>
								<Typography paragraph>
									{project.tags.map((tag) => (
										<li>{tag}</li>
									))}
								</Typography>
							</CardContent>
						</Collapse>
					</Card>
				))}
		</React.Fragment>
	);
}
