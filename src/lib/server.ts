import { RESEND_API_KEY } from '$env/static/private';
import { PrismaClient } from '@prisma/client';
import { Resend } from 'resend';
import { Lucia } from 'lucia';
import { PrismaAdapter } from '@lucia-auth/adapter-prisma';
import { dev } from '$app/environment';

export const db = new PrismaClient();

export const resend = new Resend(RESEND_API_KEY);

export const lucia = new Lucia(new PrismaAdapter(db.session, db.user), {
	sessionCookie: {
		attributes: {
			secure: !dev
		}
	},
	getUserAttributes: (attributes) => ({
		nickname: attributes.nickname,
		username: attributes.username,
		email: attributes.email,
		createdAt: attributes.createdAt
	})
});

declare module 'lucia' {
	interface Register {
		Lucia: typeof lucia;
		DatabaseUserAttributes: {
			nickname: string;
			username: string;
			email: string;
			createdAt: Date;
		};
	}
}
