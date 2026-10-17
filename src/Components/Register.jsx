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
				className="max-w-sm mx-auto p-6 bg-white shadow-md rounded-lg flex flex-col gap-4 mt-10"
			>
				<h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Register</h2>

				<div className="flex flex-col">
					<label htmlFor="name" className="mb-1 text-sm font-medium text-gray-700">
						Nama:
					</label>
					<input
						type="text"
						id="name"
						placeholder="Masukkan nama Anda..."
						{...register("name")}
						className={inputClass(errors.name)}
					/>
					{errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
				</div>

				<div className="flex flex-col">
					<label htmlFor="email" className="mb-1 text-sm font-medium text-gray-700">
						Email:
					</label>
					<input
						type="email"
						id="email"
						placeholder="Masukkan email Anda..."
						{...register("email")}
						className={inputClass(errors.email)}
					/>
					{errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
				</div>

				<div className="flex flex-col">
					<label htmlFor="password" className="mb-1 text-sm font-medium text-gray-700">
						Password:
					</label>
					<input
						type="password"
						id="password"
						placeholder="Minimal 8 karakter"
						{...register("password")}
						className={inputClass(errors.password)}
					/>
					{errors.password && <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>}
				</div>

				<div className="flex flex-col">
					<label htmlFor="confirmPassword" className="mb-1 text-sm font-medium text-gray-700">
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
						<p className="mt-1 text-sm text-red-600">{errors.confirmPassword.message}</p>
					)}
				</div>

				<button
					type="submit"
					disabled={isSubmitting}
					className="w-full py-2 mt-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 font-semibold disabled:opacity-60"
				>
					Register
				</button>

				<Link
					to="/"
					className="block w-full py-2 text-center text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 font-semibold"
				>
					Sudah punya akun? Login
				</Link>
			</form>
		</>
	);
}