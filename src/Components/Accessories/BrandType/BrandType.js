import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Filters from '../Filters/Filters';
import AccessoriesContent from '../AccessoriesContent/AccessoriesContent';
	function BrandType() {
	return (
		<div className='wrapper'>
			<section id='brand-type'>
				<Container>
					<Row>
						<Col lg={3}>
							<Filters/>
						</Col>
						<Col lg={9}>
							<AccessoriesContent/>
						</Col>
					</Row>
				</Container>
			</section>
		</div>
	);
}
export default BrandType;
//      