import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
	Avatar,
	Button,
	Card,
	CardActions,
	CardTitle,
	CardText,
	Cell,
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
						<h4>Full name</h4>
						<small>@username</small>
					</CardText>
					<CardActions>
						<Cell size={FIVE_COLUMNS}>
							<Button
								raised
								primary
								iconEl={<FontIcon>settings</FontIcon>}
								children="Edit"
							/>
						</Cell>
						<Cell size={SIX_COLUMNS}>
							<Button
								flat
								iconEl={<FontIcon>exit_to_app</FontIcon>}
								children="Logout"
							/>
						</Cell>
					</CardActions>
				</Card>
			</div>
		</Collapse>
	);
};

PokedexAccountBox.propTypes = {
	collapsed: PropTypes.bool
};

export default PokedexAccountBox;
