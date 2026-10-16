import { useRef, useState } from "react";

export default function Login() {
	const [username, setUsername] = useState("");
	const passwordRef = useRef(null);
	
	function handleSubmit(e) {
		e.preventDefault();
		console.log(username);
		console.log(passwordRef);
		if(username === "admin" && passwordRef.current.value === "admin123") {
			alert("Login berhasil");
		} else {
			alert("Username/ Password salah!")
		}
	}

	return (
		<>
			<form 
			action="#" 
			onSubmit={handleSubmit} 
			className="max-w-sm mx-auto p-6 bg-white shadow-md rounded-lg flex flex-col gap-4 mt-10"
			>
			<h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Login</h2>

			<div className="flex flex-col">
				<label htmlFor="name" className="mb-1 text-sm font-medium text-gray-700">
					Username: 
				</label>
				<input 
					type="text" 
					name="name" 
					id="name" 
					placeholder="Masukkan username Anda..." 
					onChange={(e) => setUsername(e.target.value)} 
					value={username} 
					className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
				/>
				<h1>{username}</h1>
			</div>

			<div className="flex flex-col">
				<label htmlFor="password" className="mb-1 text-sm font-medium text-gray-700">
					Password: 
				</label>
				<input 
					type="password" 
					name="password" 
					id="password" 
					placeholder="Masukkan password Anda..." 
					ref={passwordRef}
					className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
				/>
			</div>

			<button 
				type="submit" 
				className="w-full py-2 mt-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 font-semibold"
			>
				Send
			</button>
			</form>
		</>
	)
}