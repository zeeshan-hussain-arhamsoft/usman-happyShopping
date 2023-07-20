import React from 'react';
import { Container } from 'react-bootstrap';
function OrderNumDetailsBanner() {
	return (
		<div className='wrapper'>
			<div className='OrderNumDetailsBanner-heading'>
				<Container>
					<div className='order-details-num-heading-content'>
						<h5>My Orders</h5>
						<h5>Home / My Orders</h5>
					</div>
				</Container>
			</div>
		</div>
	);
}

export default OrderNumDetailsBanner;