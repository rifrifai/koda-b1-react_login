import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router"; 
import { loginSchema } from "../utils/loginSchema";

export default function Login() {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm({
		resolver: yupResolver(loginSchema),
		defaultValues: { email: "", password: "" },
	});

	function onSubmit(data) {
		console.log(data);
		if (data.email === "admin@gmail.com" && data.password === "admin123") {
			alert("Login berhasil");
		} else {
			alert("Email / Password salah!");
		}
	}

	return (
		<>
			<form
				onSubmit={handleSubmit(onSubmit)}
				noValidate
				className="form"
			>
				<h2 className="title-login-register">Login</h2>

				<div className="flex flex-col">
					<label htmlFor="email" className="label-input">
						Email:
					</label>
					<input
						type="email"
						id="email"
						placeholder="Masukkan email Anda..."
						{...register("email")}
						className={`input ${
							errors.email
								? "input-error"
								: "input-success"
						}`}
					/>
					{errors.email && (
						<p className="form-error">{errors.email.message}</p>
					)}
				</div>

				<div className="flex flex-col">
					<label htmlFor="password" className="label-input">
						Password:
					</label>
					<input
						type="password"
						id="password"
						placeholder="Masukkan password Anda..."
						{...register("password")}
						className={`input ${
							errors.password
								? "input-error"
								: "input-success"
						}`}
					/>
					{errors.password && (
						<p className="form-error">{errors.password.message}</p>
					)}
				</div>

				<button
					type="submit"
					disabled={isSubmitting}
					className="btn-login"
				>
					Login
				</button>

				<Link
					to="/register"
					className="btn-link"
				>
					Belum punya akun? Register
				</Link>
			</form>
		</>
	)
}