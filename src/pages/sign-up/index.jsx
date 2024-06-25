import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import React, { useState } from 'react'
import { auth } from "@service"
import { SignUpModal } from '@modal';
const Index = () => {
	const [form, setForm] = useState({})
  const [open, setOpen] = useState(false);
	const handleChange = (e) => {
		const { value, name } = e.target
		setForm({ ...form, [name]: value })
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await auth.sign_up(form)
			if (response.status === 200) {
				setOpen(true)
				localStorage.setItem("email", form.email)
			}
		} catch (error) {
			console.log(error);
		}
	}
	return (
		<>
			<SignUpModal open={open} handleClose={()=>setOpen(false)}/>
			<div className="w-full h-screen flex items-center justify-center">
				<div className="w-full sm:w-[600px] p-5">
					<h1 className='text-center my-6 text-[50px]'>Register</h1>
					<form id="submit" onSubmit={handleSubmit}>
						<TextField fullWidth id="fullWidth" label="Email" variant="outlined" type="email" onChange={handleChange} name="email" required className="my-2" />
						<TextField fullWidth id="fullWidth" label="Fullname" variant="outlined" type="text" onChange={handleChange} name="full_name" required className="my-2" />
						<TextField fullWidth id="fullWidth" label="Password" variant="outlined" type="password" onChange={handleChange} name="password" required className="my-2" />
						<TextField fullWidth id="fullWidth" label="Phone number" variant="outlined" type="text" onChange={handleChange} name="phone_number" required className="my-2" />
						<Button variant="contained" disableElevation type="submit" form="submit" fullWidth>
							SignUp
						</Button>
					</form>
				</div>
			</div>
		</>
	)
}

export default Index
