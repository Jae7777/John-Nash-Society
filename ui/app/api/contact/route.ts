// import { contactFormSchema } from '@/app/components/ContactForm';
import { db } from '@/db/drizzle';
import { contact } from '@/db/schema';
import { NextResponse } from 'next/server';
import { z } from 'zod';

export const contactFormSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long." }),
  lastName: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long." }),
  email: z.email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json({ message: 'Invalid input.', errors: result.error.flatten().fieldErrors }, { status: 400 });
    }
    
    const { firstName, lastName, email, phone } = result.data;

    await db.insert(contact).values({
      firstName,
      lastName,
      email,
      phone,
    });

    return NextResponse.json({ message: 'Form submitted successfully!' }, { status: 200 });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
