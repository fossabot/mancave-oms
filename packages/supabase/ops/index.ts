/**
 * Contains helper functions for interacting with supabase-js
 * Make sure to call inside of route handlers or "use server"
 */

import { cookies } from "next/headers";
import { SupabaseClient } from "@supabase/supabase-js";

import { serverClient } from "../";

export const getCurrentUserRole = async (
  id: string | number,
  supabase: SupabaseClient,
): Promise<any> => {
  if (!supabase) {
    const cookieStore = cookies();
    supabase = serverClient(cookieStore);
  }

  const { data, error } = await supabase
    .from("profiles")
    .select("roles (type)")
    .eq("id", id)
    .single();

  return { data, error };
};
