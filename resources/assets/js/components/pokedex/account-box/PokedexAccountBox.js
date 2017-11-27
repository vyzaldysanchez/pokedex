import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
	Avatar,
	Button,
	Card,
	CardActions,
	CardTitle,
	CardText,
	Collapse,
	Divider,
	FontIcon,
	Grid
} from 'react-md';
import styles from './styles';
import { FIVE_COLUMNS, SIX_COLUMNS } from '@pokedex/assets/js/utils/ui-columns';

const PokedexAccountBox = props => {
	return (
		<Collapse collapsed={props.collapsed}>
			<div className="md-cell md-cell--3 md-paper--2" style={styles}>
				<Card>
					<Grid>
						<Avatar
							suffix="red"
							className="md-grid md-paper--2"
							style={{ width: 100, height: 100 }}
							icon={
								<FontIcon style={{ fontSize: 100 }}>
									face
								</FontIcon>
							}
						/>
					</Grid>
					<Divider />
					<CardText>
						<h4>{props.user.fullName}</h4>
						<small>@{props.user.username}</small>
					</CardText>
					<CardActions>
						<div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 no-side-padding">
							<Button
								raised
								primary
								className="center-block"
								iconEl={<FontIcon>settings</FontIcon>}
								children="Edit"
							/>
						</div>
						<div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 no-side-padding">
							<Button
								flat
								className="center-block"
								iconEl={<FontIcon>exit_to_app</FontIcon>}
								children="Logout"
							/>
						</div>
					</CardActions>
				</Card>
			</div>
		</Collapse>
	);
};

PokedexAccountBox.propTypes = {
    collapsed: PropTypes.bool,
    user: PropTypes.object
};

export default PokedexAccountBox;
