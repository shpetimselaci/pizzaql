import React from 'react';
import styled from 'styled-components';
import {FastField} from 'formik';
import {Label} from '@blueprintjs/core';
import PropTypes from 'prop-types';

const now = new Date();

const firstHour = () => {
	if (now.getHours() === 23) {
		if (now.getMinutes() <= 9) {
			return `00:0${now.getMinutes()}`;
		}

		return `00:${now.getMinutes()}`;
	}

	if (now.getMinutes() <= 9) {
		return `${now.getHours() + 1}:0${now.getMinutes()}`;
	}

	return `${now.getHours() + 1}:${now.getMinutes()}`;
};

const secondHour = () => {
	if (now.getHours() === 22) {
		if (now.getMinutes() <= 9) {
			return `00:0${now.getMinutes()}`;
		}

		return `00:${now.getMinutes()}`;
	}

	if (now.getHours() === 23) {
		if (now.getMinutes() <= 9) {
			return `01:0${now.getMinutes()}`;
		}

		return `01:${now.getMinutes()}`;
	}

	if (now.getMinutes() <= 9) {
		return `${now.getHours() + 2}:0${now.getMinutes()}`;
	}

	return (now.getHours() + 2) + ':' + now.getMinutes();
};

const Wrapper = ({className}) => (
	<Label className={className}>
    Delivery time:
		<div className="bp3-select">
			<FastField name="time" component="select" placeholder="Time">
				<option value="">Select</option>
				<option value="ASAP">As fast as possible</option>
				<option>{firstHour()}</option>
				<option>{secondHour()}</option>
			</FastField>
		</div>
	</Label>
);

const TimeSelect = styled(Wrapper)`
    width: 200px;
`;

TimeSelect.propTypes = {
	className: PropTypes.string
};

export default TimeSelect;
