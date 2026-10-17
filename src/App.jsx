import { BrowserRouter, Route, Routes } from "react-router"
import Login from "./Components/Login"
import Register from "./Components/Register"

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/register" element={<Register />} />
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
