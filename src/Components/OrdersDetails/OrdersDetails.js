import React from 'react';
import { Container, Table } from 'react-bootstrap';
import { Images } from '../../Assets/Assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import "./OrdersDetails.css";
import { Link } from 'react-router-dom';
function OrdersDetails() {
	return (
		<div className='wrapper'>
			<div className='order-details-heading'>
				<Container>
					<div className='order-details-heading-content'>
						<h5>My Orders</h5>
						<h5>Home / My Orders</h5>
					</div>
				</Container>
			</div>
			<Container>
				<Table className='order-details-table' responsive>
					<tbody className='table-body'>
						<tr className='table-row'>
							<td className='order-num'><Link to='/OrderNumDetails' className='order-num-anc'>#234123</Link> </td>
							<td>
								<div className='table-mac'>
									<img src={Images.Mac} alt='' />
								</div>
							</td>
							<td className='orders-table-date'>25/06/2021</td>
							<td className='orders-table-content'>Bruce Nelson</td>
							<td className='orders-table-content'>New York,USA</td>
							<td className='orders-table-status'>Completed</td>
						</tr>
						<tr >
							<td colSpan={6}></td>
						</tr>
						<tr className='table-row'>
							<td className='order-num'><Link to='/' className='order-num-anc'>#234123</Link> </td>
							<td>
								<div className='table-mac'>
									<img src={Images.Mac} alt='' />
								</div>
							</td>
							<td className='orders-table-date'>25/06/2021</td>
							<td className='orders-table-content'>Bruce Nelson</td>
							<td className='orders-table-content'>Lisbon,Myanmar/Burma</td>
							<td className='orders-table-status-cancel'>Cancelled</td>
						</tr>
						<tr>
							<td colSpan={6}></td>
						</tr>
						<tr className='table-row'>
							<td className='order-num'><Link to='/' className='order-num-anc'>#234123</Link> </td>
							<td>
								<div className='table-mac'>
									<img src={Images.Mac} alt='' />
								</div>
							</td>
							<td className='orders-table-date'>25/06/2021</td>
							<td className='orders-table-content'>Bruce Nelson</td>
							<td className='orders-table-content'>Lisbon,Myanmar/Burma</td>
							<td className='orders-table-status'>Completed</td>
						</tr>
						<tr>
							<td colSpan={6}></td>
						</tr>
						<tr className='table-row'>
							<td className='order-num'><Link to='/' className='order-num-anc'>#234123</Link> </td>
							<td>
								<div className='table-mac'>
									<img src={Images.Mac} alt='' />
								</div>
							</td>
							<td className='orders-table-date'>25/06/2021</td>
							<td className='orders-table-content'>Bruce Nelson</td>
							<td className='orders-table-content'>Lisbon,Myanmar/Burma</td>
							<td className='orders-table-status'>Completed</td>
						</tr>
						<tr>
							<td colSpan={6}></td>
						</tr>
						<tr className='table-row'>
							<td className='order-num'><Link to='/' className='order-num-anc'>#234123</Link> </td>
							<td>
								<div className='table-mac'>
									<img src={Images.Mac} alt='' />
								</div>
							</td>
							<td className='orders-table-date'>25/06/2021</td>
							<td className='orders-table-content'>Bruce Nelson</td>
							<td className='orders-table-content'>Lisbon,Myanmar/Burma</td>
							<td className='orders-table-status'>Completed</td>
						</tr>
						<tr>
							<td colSpan={6}></td>
						</tr>
						<tr className='table-row'>
							<td className='order-num'><Link to='/' className='order-num-anc'>#234123</Link> </td>
							<td>
								<div className='table-mac'>
									<img src={Images.Mac} alt='' />
								</div>
							</td>
							<td className='orders-table-date'>25/06/2021</td>
							<td className='orders-table-content'>Bruce Nelson</td>
							<td className='orders-table-content'>Lisbon,Myanmar/Burma</td>
							<td className='orders-table-status'>Completed</td>
						</tr>
						<tr>
							<td colSpan={6}></td>
						</tr>
						<tr className='table-row'>
							<td className='order-num'><Link to='/' className='order-num-anc'>#234123</Link> </td>
							<td>
								<div className='table-mac'>
									<img src={Images.Mac} alt='' />
								</div>
							</td>
							<td className='orders-table-date'>25/06/2021</td>
							<td className='orders-table-content'>Bruce Nelson</td>
							<td className='orders-table-content'>Lisbon,Myanmar/Burma</td>
							<td className='orders-table-status'>Completed</td>
						</tr>

					</tbody>
				</Table>
				<div className='pagination'>
					<ul className='pagination-ul'>
						<li className='pagination-li'>
							<span>1</span>
						</li>
						<li className='pagination-li'>
							<span>2</span>
						</li>
						<li className='pagination-li'>
							<span>3</span>
						</li>
						<li className='pagination-li'>
							<span>4</span>
						</li>
						<li className='pagination-li'>
							<span>5...</span>
						</li>
						<li className='pagination-li'>
							<span>12</span>
						</li>
						<li className='pagination-li'>
							<span>13</span>
						</li>
						<li className='pagination-li'>
							<span>14</span>
						</li>
						<li className='pagination-li'>
							<span>15</span>
						</li>
						<li className='pagination-li'>
							<FontAwesomeIcon icon={faArrowRight} />
						</li>
					</ul>
				</div>
			</Container>
		</div>
	);
}

export default OrdersDetails;