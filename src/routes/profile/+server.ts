import { supabase } from "$lib/supabaseClient";
import type { RequestHandler } from "./$types";

export const POST: RequestHandler = async ({ request }) => {
  const { first, last, user_id } = await request.json();

  const { data, error } = await supabase
    .from("users")
    .insert({
      user_id: user_id,
      first_name: first,
      last_name: last,
    })
    .select();

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
