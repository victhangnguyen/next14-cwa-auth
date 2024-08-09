"use server";
import * as z from "zod";
//! schemas
import { RegisterSchema } from "@/schemas";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  console.log("[useServer] actions/register.ts->values: ", values, "\n");
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      success: false,
      message: validatedFields.error.issues[0].message,
    };
  }
  return {
    success: true,
    message: "Register successful - Email sent",
  };
};
