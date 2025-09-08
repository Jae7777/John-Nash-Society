import { NextResponse } from 'next/server';
import { z } from 'zod';

const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json({ message: 'Invalid input.', errors: result.error.flatten().fieldErrors }, { status: 400 });
    }
    
    const { name, email, phone } = result.data;

    // You can add more complex logic here, like sending an email or saving to a database.
    console.log('Contact form submission received:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);

    return NextResponse.json({ message: 'Form submitted successfully!' }, { status: 200 });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
