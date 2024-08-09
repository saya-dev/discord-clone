import { RESEND_API_KEY } from '$env/static/private';
import { PrismaClient } from '@prisma/client';
import { Resend } from 'resend';

export const db = new PrismaClient();
export const resend = new Resend(RESEND_API_KEY);
