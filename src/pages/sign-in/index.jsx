import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import React, { useState } from 'react'
import { auth } from "@service"
import { SignUpModal } from '@modal';
const Index = () => {
	const [form, setForm] = useState({})
	const handleChange = (e) => {
		const { value, name } = e.target
		setForm({ ...form, [name]: value })
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await auth.sign_in(form)
			if (response.status === 200) {
				localStorage.setItem("access_token", response?.data?.access_token)
			}
		} catch (error) {
			console.log(error);
		}
	}
	return (
		<>
			<div className="w-full h-screen flex items-center justify-center">
				<div className="w-full sm:w-[600px] p-5">
					<h1 className='text-center my-6 text-[50px]'>Login</h1>
					<form id="submit" onSubmit={handleSubmit}>
						<TextField fullWidth id="fullWidth" label="Email" variant="outlined" type="email" onChange={handleChange} name="email" required className="my-2" />
						<TextField fullWidth id="fullWidth" label="Password" variant="outlined" type="password" onChange={handleChange} name="password" required className="my-2" />
						<Button variant="contained" disableElevation type="submit" form="submit" fullWidth>
							SignIn
						</Button>
					</form>
				</div>
			</div>
		</>
	)
}

export default Index
