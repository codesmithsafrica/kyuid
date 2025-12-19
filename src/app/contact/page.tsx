"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="container mx-auto max-w-2xl px-4 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
      <p className="mt-3 text-muted-foreground">
        Have a question or partnership idea? Send us a message.
      </p>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle className="text-base">Send a Message</CardTitle>
        </CardHeader>
        <CardContent>
          {sent ? (
            <div className="text-sm">Thanks for reaching out! We'll get back to you soon.</div>
          ) : (
            <form
              className="grid gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <div className="grid gap-2">
                <label className="text-sm">Name</label>
                <Input required placeholder="Jane Doe" />
              </div>
              <div className="grid gap-2">
                <label className="text-sm">Email</label>
                <Input required type="email" placeholder="jane@example.com" />
              </div>
              <div className="grid gap-2">
                <label className="text-sm">Message</label>
                <Textarea required rows={5} placeholder="How can we help?" />
              </div>
              <Button type="submit" className="mt-2">Send</Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
