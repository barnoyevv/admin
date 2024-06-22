import { useState } from "react"
import { useNavigate } from "react-router-dom"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CustomizedSnackbars from "../../components/notification/notification";

const Index = () => {
	const [form, setForm] = useState({})
	const navigate = useNavigate();
	const [open, setOpen] = useState(false);
	const [type, setType] = useState(" ")

	const handleChange = (e) => {
		const { value, name } = e.target
		setForm({ ...form, [name]: value })
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		const { username, password } = form
		if (username === "admin" && password === "123") {
			setOpen(true)
			setType("success")
			setTimeout(() => {
				navigate("/main")
			}, 1500)
		} else {
			setOpen(true)
			setType("error")
		}
	}
	const moveRegister = () => {
		navigate("/sign-up")
	}
	return (
		<div className="login-page">
			<CustomizedSnackbars open={open} setOpen={setOpen} type={type} />
			<div className="row">
				<div className="col-md-6 offset-3 my-3">
				<div className="card">
				<form id="submit" onSubmit={handleSubmit}>
					<div className="card-header">
						<h1 className="text-center">Login</h1>
					</div>
					<div className="card-body">
						<TextField fullWidth id="fullWidth" label="Username" variant="outlined" type="text" onChange={handleChange} name="username" required className="my-2"/>
						<TextField fullWidth id="fullWidth" label="Password" variant="outlined" type="password" onChange={handleChange} name="password" required className="my-2"/>
					</div>
					<p onClick={moveRegister} className="text-decoration-underline text-primary mx-3">Register</p>
					<div className="card-footer">
						<Button variant="contained" disableElevation type="submit" form="submit">
							Log in
						</Button>
					</div>
				</form>
			</div>
				</div>
			</div>
		</div>
	)
}

export default Index
