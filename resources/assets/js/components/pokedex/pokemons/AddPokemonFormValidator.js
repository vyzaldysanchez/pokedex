import {
	validations,
	baseValidationField,
	baseValidator
} from '@pokedex/assets/js/utils/base-validator';
import { POKEMON_POUNDS_MIN, POKEMON_AGE_MIN } from './AddPokemonForm';

export const validator = {
	...baseValidator,
	fields: {
		name: Object.assign({}, baseValidationField, {
			error: 'The pokemon name is required!'
		}),
		age: {
			...baseValidationField,
			error: 'The pokemon age is not valid!',
			validate(value) {
				this.displayError = Number.parseFloat(value) < POKEMON_AGE_MIN;
			}
		},
		pounds: {
			...baseValidationField,
			error: 'Must provide the correct pounds this pokemon has!',
			validate(value) {
				this.displayError =
					Number.parseFloat(value) <= POKEMON_POUNDS_MIN;
			}
		},
		description: Object.assign({}, baseValidationField, {
			error: 'The description is required!'
		}),
		typesIds: {
			...baseValidationField,
			error: 'Must select at least one type for this pokemon!',
			validate(ids) {
				this.displayError = !ids.length;
			}
		},
		public: {
			...baseValidationField,
			error: 'None',
			validate(ids) {
				this.displayError = false;
			}
		},
		captured: {
			...baseValidationField,
			error: 'None',
			validate(ids) {
				this.displayError = false;
			}
		},
		image: Object.assign({}, baseValidationField, {
			error: 'An image must be selected'
		})
	}
};
