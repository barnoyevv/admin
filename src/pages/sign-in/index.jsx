import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import React, { useState } from 'react'
import { auth } from "@service"
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
const Index = () => {
	const [form, setForm] = useState({})
	const navigate = useNavigate()
	const handleChange = (e) => {
		const { value, name } = e.target
		setForm({ ...form, [name]: value })
	};
	const Validation = Yup.object().shape({
		email: Yup.string().email('Invalid email').required('Required'),
		password: Yup.string()
			.min(2, 'Too Short!')
			.max(50, 'Too Long!')
			.required('Required'),
	});
	const moveRegister = () => {
		navigate("/sign-up")
	}
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
					<Formik
						initialValues={{
							email: '',
							password: ''
						}}
						validationSchema={Validation}
						onSubmit={values => {
							// same shape as initial values
							console.log(values);
						}}
					>
						{({ errors, touched }) => (
							<Form id="submit" onSubmit={handleSubmit} className='flex flex-col gap-2'>
								<TextField fullWidth id="fullWidth" label="Email" variant="outlined" type="email" onChange={handleChange} name="email" required />
								{errors.email && touched.email ? <div>{errors.email}</div> : null}
								<TextField fullWidth id="fullWidth" label="Password" variant="outlined" type="password" onChange={handleChange} name="password" required />
								{errors.password && touched.password ? (
									<div>{errors.password}</div>
								) : null}
								<p className="cursor-pointer text-blue-600" onClick={moveRegister}>Register?</p>
								<Button variant="contained" disableElevation type="submit" form="submit" fullWidth>
									Sign In
								</Button>
							</Form>
						)}
					</Formik>
				</div>
			</div>
		</>
	)
}

export default Index
