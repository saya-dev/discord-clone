import * as v from 'valibot';
import * as m from '$paraglide/messages';

export const Login = v.object({
	email: v.pipe(
		v.string(),
		v.email(m.field_email_error_invalid),
		v.minLength(8, m.field_email_error_min),
		v.maxLength(64, m.field_email_error_max)
	),
	password: v.pipe(
		v.string(),
		v.minLength(8, m.field_password_error_min),
		v.maxLength(64, m.field_password_error_max)
	)
});

export const Register = v.pipe(
	v.object({
		...Login.entries,
		nickname: v.pipe(
			v.string(),
			v.minLength(3, m.field_nickname_error_min),
			v.maxLength(32, m.field_nickname_error_max)
		),
		username: v.pipe(
			v.string(),
			v.minLength(3, m.field_username_error_min),
			v.maxLength(32, m.field_username_error_max),
			v.check((username) => /^[a-z0-9_.]+$/.test(username), m.field_username_error_invalid)
		),
		confirmPassword: Login.entries.password
	}),
	v.forward(
		v.partialCheck(
			[['password'], ['confirmPassword']],
			({ password, confirmPassword }) => password === confirmPassword
		),
		['confirmPassword']
	)
);
