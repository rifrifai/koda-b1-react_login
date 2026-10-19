import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router";
import { registerSchema } from "../utils/registerSchema";

export default function Register() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting },
	} = useForm({
		resolver: yupResolver(registerSchema),
		defaultValues: { name: "", email: "", password: "", confirmPassword: "" },
	});

	function onSubmit(data) {
		const {  ...userData } = data;
		console.log(userData);
		alert("Register berhasil, silakan login");
		reset();
	}

	function inputClass(error) {
		return `w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
			error
				? "border-red-500 focus:ring-red-500"
				: "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
		}`;
	}

	return (
		<>
			<form
				onSubmit={handleSubmit(onSubmit)}
				noValidate
				className="form"
			>
				<h2 className="title-login-register">Register</h2>

				<div className="flex flex-col">
					<label htmlFor="name" className="label-input">
						Nama:
					</label>
					<input
						type="text"
						id="name"
						placeholder="Masukkan nama Anda..."
						{...register("name")}
						className={inputClass(errors.name)}
					/>
					{errors.name && <p className="form-error">{errors.name.message}</p>}
				</div>

				<div className="flex flex-col">
					<label htmlFor="email" className="label-input">
						Email:
					</label>
					<input
						type="email"
						id="email"
						placeholder="Masukkan email Anda..."
						{...register("email")}
						className={inputClass(errors.email)}
					/>
					{errors.email && <p className="form-error">{errors.email.message}</p>}
				</div>

				<div className="flex flex-col">
					<label htmlFor="password" className="label-input">
						Password:
					</label>
					<input
						type="password"
						id="password"
						placeholder="Minimal 8 karakter"
						{...register("password")}
						className={inputClass(errors.password)}
					/>
					{errors.password && <p className="form-error">{errors.password.message}</p>}
				</div>

				<div className="flex flex-col">
					<label htmlFor="confirmPassword" className="label-input">
						Konfirmasi Password:
					</label>
					<input
						type="password"
						id="confirmPassword"
						placeholder="Ulangi password Anda..."
						{...register("confirmPassword")}
						className={inputClass(errors.confirmPassword)}
					/>
					{errors.confirmPassword && (
						<p className="form-error">{errors.confirmPassword.message}</p>
					)}
				</div>

				<button
					type="submit"
					disabled={isSubmitting}
					className="btn-login"
				>
					Register
				</button>

				<Link
					to="/"
					className="btn-link"
				>
					Sudah punya akun? Login
				</Link>
			</form>
		</>
	);
}