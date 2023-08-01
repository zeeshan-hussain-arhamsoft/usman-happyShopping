import React from 'react'
import { useState } from 'react';
import { Container, Tab, Tabs } from 'react-bootstrap';
import "./MoreInfoAddToCart.css";
function MoreInfoAddToCart() {
	const [key, setKey] = useState('home');
	return (
		<section id='more-info-add-to-cart'>
			<Container>
				<Tabs
					id="controlled-tab-example"
					activeKey={key}
					onSelect={(k) => setKey(k)}
					className=""
				>
					<Tab eventKey="home" title="Description">
						Sed a magna semper, porta purus eu, ullamcorper ligula. Nam sit amet consectetur sapien. Etiam dui ipsum, viverra vel turpis ut, dignissim elementum mauris. Sed dapibus auctor scelerisque. Aenean at leo tellus. Morbi eu leo sapien. Fusce libero dolor, venenatis eget enim sed, commodo efficitur arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce justo ipsum, placerat vitae erat ac, porttitor tincidunt lacus. In fermentum nulla nec fermentum tempus.
					</Tab>
					<Tab eventKey="profile" title="Additional Information">
						Sed a magna semper, porta purus eu, ullamcorper ligula. Nam sit amet consectetur sapien. Etiam dui ipsum, viverra vel turpis ut, dignissim elementum mauris. Sed dapibus auctor scelerisque. Aenean at leo tellus. Morbi eu leo sapien. Fusce libero dolor, venenatis eget enim sed, commodo efficitur arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce justo ipsum, placerat vitae erat ac, porttitor tincidunt lacus. In fermentum nulla nec fermentum tempus.
					</Tab>
					<Tab eventKey="contact" title="Reviews">
						Sed a magna semper, porta purus eu, ullamcorper ligula. Nam sit amet consectetur sapien. Etiam dui ipsum, viverra vel turpis ut, dignissim elementum mauris. Sed dapibus auctor scelerisque. Aenean at leo tellus. Morbi eu leo sapien. Fusce libero dolor, venenatis eget enim sed, commodo efficitur arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce justo ipsum, placerat vitae erat ac, porttitor tincidunt lacus. In fermentum nulla nec fermentum tempus.
					</Tab>
				</Tabs>
			</Container>
		</section>
	)
}

export default MoreInfoAddToCart