import * as yup from "yup"

export const registerSchema = yup.object({
	name: yup
		.string()
		.trim()
		.required("nama wajib diisi!")
		.min(3, "nama minimal 3 karakter"),
	email: yup
		.string()
		.trim()
		.required("email wajib diisi!")
		.email("format email tidak valid"),
	password: yup
		.string()
		.required("password wajib diisi!")
		.min(8, "password minimal 8 karakter"),
	confirmPassword: yup
		.string()
		.required("konfirmasi password wajib diisi!")
		.oneOf([yup.ref("password")], "konfirmasi password tidak sama"),
});