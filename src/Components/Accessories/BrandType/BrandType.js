import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Filters from '../Filters/Filters';
import AccessoriesContent from '../AccessoriesContent/AccessoriesContent';
function BrandType() {
	return (
		<section id='brand-type'>
			<Container>
				<Row>
					<Col lg={3}>
						<Filters />
					</Col>
					<Col lg={9}>
						<AccessoriesContent />
					</Col>
				</Row>
			</Container>
		</section>	
	);
}
export default BrandType;
//      