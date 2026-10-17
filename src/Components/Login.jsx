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
				className="max-w-sm mx-auto p-6 bg-white shadow-md rounded-lg flex flex-col gap-4 mt-10"
			>
				<h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Login</h2>

				<div className="flex flex-col">
					<label htmlFor="email" className="mb-1 text-sm font-medium text-gray-700">
						Email:
					</label>
					<input
						type="email"
						id="email"
						placeholder="Masukkan email Anda..."
						{...register("email")}
						className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
							errors.email
								? "border-red-500 focus:ring-red-500"
								: "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
						}`}
					/>
					{errors.email && (
						<p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
					)}
				</div>

				<div className="flex flex-col">
					<label htmlFor="password" className="mb-1 text-sm font-medium text-gray-700">
						Password:
					</label>
					<input
						type="password"
						id="password"
						placeholder="Masukkan password Anda..."
						{...register("password")}
						className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
							errors.password
								? "border-red-500 focus:ring-red-500"
								: "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
						}`}
					/>
					{errors.password && (
						<p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
					)}
				</div>

				<button
					type="submit"
					disabled={isSubmitting}
					className="w-full py-2 mt-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 font-semibold disabled:opacity-60"
				>
					Login
				</button>

				<Link
					to="/register"
					className="block w-full py-2 text-center text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 font-semibold"
				>
					Belum punya akun? Register
				</Link>
			</form>
		</>
	)
}