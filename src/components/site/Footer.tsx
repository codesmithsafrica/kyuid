import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="mt-16 border-t bg-background">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="size-8 rounded-lg bg-primary" />
              <span className="text-sm font-semibold tracking-tight">
                Kenya Youth Unity in Diversity
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Advocating for meaningful inclusion of Kenyan youth in decision-making across communities and institutions.
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold">Organization</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-foreground">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/join" className="hover:text-foreground">
                  Join Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold">Focus Areas</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Youth Leadership</li>
              <li>Policy & Advocacy</li>
              <li>Skills & Innovation</li>
              <li>Community Impact</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold">Get Involved</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/join" className="hover:text-foreground">
                  Membership
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-foreground">
                  Partnerships
                </Link>
              </li>
              <li>
                <a href="#newsletter" className="hover:text-foreground">
                  Newsletter
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />
        <div className="flex flex-col items-center justify-between gap-4 text-xs text-muted-foreground md:flex-row">
          <p>
            © {new Date().getFullYear()} Kenya Youth Unity in Diversity. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-foreground">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-foreground">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
