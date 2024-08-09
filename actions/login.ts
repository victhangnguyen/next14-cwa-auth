"use server";
import * as z from "zod";
//! schemas
import { LoginSchema } from "@/schemas";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  console.log("[useServer] actions/login.ts->values: ", values, "\n");
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      success: false,
      message: validatedFields.error.issues[0].message,
    };
  }
  return {
    success: true,
    message: "Login successful",
  };
};
