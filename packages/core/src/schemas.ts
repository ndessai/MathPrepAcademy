import { z } from "zod";

import { DIFFICULTIES, TOPIC_IDS } from "./taxonomy";
import { CHOICE_COUNT } from "./types";

export const questionSchema = z
  .object({
    id: z.string().min(1),
    topic: z.enum(TOPIC_IDS),
    difficulty: z.enum(DIFFICULTIES),
    stem: z.string().min(1),
    choices: z.array(z.string().min(1)).length(CHOICE_COUNT),
    answerIndex: z
      .number()
      .int()
      .min(0)
      .max(CHOICE_COUNT - 1),
    explanation: z.string().min(1),
    source: z.string().min(1),
  })
  .refine((q) => new Set(q.choices).size === q.choices.length, {
    message: "choices must be distinct",
  });

export const assessmentSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
  kind: z.enum(["mock", "diagnostic", "topic-quiz"]),
  examType: z.enum(["amc8", "amc10", "amc12"]),
  timeLimitMinutes: z.number().int().positive(),
  questionIds: z.array(z.string().min(1)).min(1),
});

export const startAttemptSchema = z.object({
  assessmentId: z.string().min(1),
  studentName: z.string().trim().min(1).max(40),
});

export const submitAttemptSchema = z.object({
  responses: z.record(
    z.string().min(1),
    z.union([
      z
        .number()
        .int()
        .min(0)
        .max(CHOICE_COUNT - 1),
      z.null(),
    ]),
  ),
});

export const googleLoginSchema = z.object({
  credential: z.string().min(1),
});

export const devLoginSchema = z.object({
  name: z.string().trim().min(1).max(60),
  email: z.email().trim().toLowerCase().max(120),
});

export type StartAttemptBody = z.infer<typeof startAttemptSchema>;
export type SubmitAttemptBody = z.infer<typeof submitAttemptSchema>;
export type GoogleLoginBody = z.infer<typeof googleLoginSchema>;
export type DevLoginBody = z.infer<typeof devLoginSchema>;
