"use client";

import * as z from "zod";
import { RegisterSchema } from "@/schemas";

import Link from "next/link";
import { Card } from "../ui/card";
import { Header } from "../ui/header";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { FormError } from "../ui/form-error";
import { FormSuccess } from "../ui/form-success";
import { useState, useTransition } from "react";
import { signup } from "@/actions/signup";
import { Social } from "./Social";

export const SignupForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  const {
    register,
    formState: { errors },
  } = form;

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      signup(values).then((data) => {
        setError(data?.error);
        setSuccess(data?.success);
      });
    });
  };
  return (
    <Card>
      <Header title={"Sign Up Form!"} label={"time to sign up!"} />
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full">
        <div className="space-y-4">
          <div className="gap-y-2">
            <Label>First Name</Label>
            <Input
              placeholder="John"
              type="text"
              disabled={isPending}
              {...register("firstName")}
            />
          </div>
          <div className="gap-y-2">
            <Label>Last Name</Label>
            <Input
              placeholder="Smith"
              type="text"
              disabled={isPending}
              {...register("lastName")}
            />
          </div>
          <div className="gap-y-2">
            <Label>Email</Label>
            <Input
              placeholder="john.smith@example.com"
              type="email"
              disabled={isPending}
              {...register("email")}
            />
          </div>
          <div className="gap-y-2">
            <Label>Password</Label>
            <Input
              placeholder="******"
              type="password"
              disabled={isPending}
              {...register("password")}
            />
          </div>
        </div>
        <Button type="submit" disabled={isPending}>
          <p>Submit</p>
        </Button>
      </form>

      <Social />
      <Link href="/login">
        <p className="text-sm">Already have an account?</p>
      </Link>
    </Card>
  );
};
