import React from 'react'
import { Form } from 'react-bootstrap'

function DisplaySizeProps(Props) {
	return (
		<li className='display-size-li'>
			<Form className='display-size-check-form'>
				<Form.Check aria-label="option 1" label={Props.displaySize} />
			</Form>
		</li>
	)
}

export default DisplaySizeProps