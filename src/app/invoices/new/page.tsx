"use client";

import Container from "@/components/Container";
import SubmitButton from "@/components/SubmitButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Form from "next/form";
// import { type SyntheticEvent, useState } from "react";

export default function Home() {
  return (
    <main className="h-full pt-8">
      <Container>
        {/* {error && (
              <p className="bg-red-100 text-sm text-red-800 text-center px-3 py-2 rounded-lg mb-6">
                { error }
              </p>
            )} */}
        <div className="flex justify-between mb-6">
          <h1 className="text-3xl font-semibold">Create Invoice</h1>
        </div>

        <Form
          action={() => {}}
          onSubmit={() => {}}
          className="grid gap-4 max-w-xs"
        >
          <div>
            <Label htmlFor="name" className="block font-semibold text-sm mb-2">
              Billing Name
            </Label>
            <Input id="name" name="name" type="text" />
          </div>
          <div>
            <Label htmlFor="email" className="block font-semibold text-sm mb-2">
              Billing Email
            </Label>
            <Input id="email" name="email" type="email" />
          </div>
          <div>
            <Label htmlFor="value" className="block font-semibold text-sm mb-2">
              Value
            </Label>
            <Input id="value" name="value" type="text" />
          </div>
          <div>
            <Label
              htmlFor="description"
              className="block font-semibold text-sm mb-2"
            >
              Description
            </Label>
            <Textarea id="description" name="description" />
          </div>
          <div>
            <SubmitButton />
          </div>
        </Form>
      </Container>
    </main>
  );
}
