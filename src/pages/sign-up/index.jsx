import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import React, { useState } from 'react'
import {auth} from "@service"
import VerifyModal from '../verify-modal';
const Index = () => {
	const [form, setForm] = useState({})
	const [modal, setModal] = useState(false)
	const handleChange = (e) => {
		const { value, name } = e.target
		setForm({ ...form, [name]: value })
	};
	const handleSubmit = async(e)=>{
		e.preventDefault();
		try {
			const response = await auth.sign_up(form)
			if (response.status === 200) {
				setModal(true)
				localStorage.setItem("email", form.email)
			}
		} catch (error) {
			console.log(error);
		}
	}
	const toggle =()=>{
		setModal(false)
	}
	return (
		<>
			{modal && <VerifyModal open={modal} toggle={toggle}/>}
			<div className="container">
				<div className="row">
					<div className="col-md-6 offset-3 my-3">
						<div className="card">
							<form id="submit" onSubmit={handleSubmit}>
								<div className="card-header">
									<h1 className="text-center">SignUp</h1>
								</div>
								<div className="card-body">
									<TextField fullWidth id="fullWidth" label="Email" variant="outlined" type="email" onChange={handleChange} name="email" required className="my-2" />
									<TextField fullWidth id="fullWidth" label="Fullname" variant="outlined" type="text" onChange={handleChange} name="full_name" required className="my-2" />
									<TextField fullWidth id="fullWidth" label="Password" variant="outlined" type="password" onChange={handleChange} name="password" required className="my-2" />
									<TextField fullWidth id="fullWidth" label="Phone number" variant="outlined" type="text" onChange={handleChange} name="phone_number" required className="my-2" />
								</div>
								<div className="card-footer">
									<Button variant="contained" disableElevation type="submit" form="submit">
										SignUp
									</Button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Index
