import { supabase } from "@/lib/supabase";

export interface WaitlistData {
  email: string;
  role: string;
  message?: string;
}

export interface FeedbackData {
  role: string;
  feedback: string;
}

export async function submitWaitlist(
  data: WaitlistData
): Promise<{ success: boolean; message: string }> {
  try {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return { success: false, message: "Please enter a valid email." };
    }

    const { error } = await supabase.from("waitlist").insert([data]);

    if (error) {
      console.error(error);
      return { success: false, message: "Failed to join waitlist." };
    }

    return {
      success: true,
      message: "You're on the list 🚀",
    };
  } catch {
    return {
      success: false,
      message: "Something went wrong.",
    };
  }
}

export async function submitFeedback(
  data: FeedbackData
): Promise<{ success: boolean; message: string }> {
  try {
    if (!data.feedback.trim()) {
      return { success: false, message: "Please enter feedback." };
    }

    const { error } = await supabase.from("feedback").insert([data]);

    if (error) {
      console.error(error);
      return { success: false, message: "Failed to send feedback." };
    }

    return {
      success: true,
      message: "Thanks for your feedback!",
    };
  } catch {
    return {
      success: false,
      message: "Something went wrong.",
    };
  }
}