import * as yup from "yup"

export const loginSchema = yup.object({
	email: yup
		.string()
		.trim()
		.required("email wajib diisi!")
		.email("format email tidak valid"),

	password: yup
		.string()
		.required("password wajib diisi!")
		.min(8, "password minimal 8 karakter")
});