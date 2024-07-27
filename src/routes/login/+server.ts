import { supabase } from "$lib/supabaseClient";
import type { RequestHandler } from "@sveltejs/kit";

export const POST: RequestHandler = async ({ request }) => {
  const { email, password } = await request.json();

  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (error) {
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 400 },
    );
  } else {
    return new Response(JSON.stringify({ success: true, data: data }), {
      status: 200,
    });
  }
};
