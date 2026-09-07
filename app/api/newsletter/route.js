export async function POST(request) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email) {
      return Response.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // TODO: Integrate with email service (Mailchimp, Substack, Resend, etc)
    // For now, log to console (you can view in Vercel logs)
    console.log('📬 New Newsletter Signup:', {
      email,
      timestamp: new Date().toISOString(),
    });

    // Return success
    return Response.json(
      { success: true, message: 'You\'re subscribed! Check your email for a welcome message.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Newsletter signup error:', error);
    return Response.json(
      { error: 'Failed to subscribe' },
      { status: 500 }
    );
  }
}
