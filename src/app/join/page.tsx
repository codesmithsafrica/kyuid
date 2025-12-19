"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function JoinPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="container mx-auto max-w-2xl px-4 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Join Us</h1>
      <p className="mt-3 text-muted-foreground">
        Become a member or volunteer and help shape youth-inclusive decisions across Kenya.
      </p>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle className="text-base">Membership Form</CardTitle>
        </CardHeader>
        <CardContent>
          {submitted ? (
            <div className="text-sm">Thank you! We will contact you soon.</div>
          ) : (
            <form
              className="grid gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <div className="grid gap-2">
                <label className="text-sm">Full Name</label>
                <Input required placeholder="Jane Doe" />
              </div>
              <div className="grid gap-2">
                <label className="text-sm">Email</label>
                <Input required type="email" placeholder="jane@example.com" />
              </div>
              <div className="grid gap-2">
                <label className="text-sm">County</label>
                <Input required placeholder="e.g., Nairobi" />
              </div>
              <div className="grid gap-2">
                <label className="text-sm">How would you like to contribute?</label>
                <Textarea rows={4} placeholder="Tell us about your interests..." />
              </div>
              <Button type="submit" className="mt-2">Submit</Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
