import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.common.white,
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
		backgroundColor: theme.palette.common.white,
		color: theme.palette.text.primary,
	},
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	'&:nth-of-type(odd)': {
		backgroundColor: theme.palette.action.hover,
	},
	'&:last-child td, &:last-child th': {
		border: 0,
	},
}));

const rows = [
	{ id: 1, name: 'John Doe', service: 'Service A', price: '$100', amount: 1, status: 'Pending', date: '2024-01-01', action: 'Edit' },
	{ id: 2, name: 'Jane Smith', service: 'Service B', price: '$200', amount: 2, status: 'Completed', date: '2024-02-01', action: 'Edit' },
];

export default function Index() {
	return (
		<>
		<div className='w-full flex justify-between mb-3'>
		<TextField id="fullWidth" label="Search" variant="outlined" />
		<Button variant="contained">Buyurtma qo'shish</Button>
		</div>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 700 }} aria-label="customized table">
					<TableHead>
						<TableRow>
							<StyledTableCell>#</StyledTableCell>
							<StyledTableCell align="right">Mijoz Ismi</StyledTableCell>
							<StyledTableCell align="right">Xizmat nomi</StyledTableCell>
							<StyledTableCell align="right">Price</StyledTableCell>
							<StyledTableCell align="right">Amount</StyledTableCell>
							<StyledTableCell align="right">Status</StyledTableCell>
							<StyledTableCell align="right">Date</StyledTableCell>
							<StyledTableCell align="right">Action</StyledTableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<StyledTableRow key={row.id}>
								<StyledTableCell component="th" scope="row">
									{row.id}
								</StyledTableCell>
								<StyledTableCell align="right">{row.name}</StyledTableCell>
								<StyledTableCell align="right">{row.service}</StyledTableCell>
								<StyledTableCell align="right">{row.price}</StyledTableCell>
								<StyledTableCell align="right">{row.amount}</StyledTableCell>
								<StyledTableCell align="right">{row.status}</StyledTableCell>
								<StyledTableCell align="right">{row.date}</StyledTableCell>
								<StyledTableCell align="right">{row.action}</StyledTableCell>
							</StyledTableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
}
