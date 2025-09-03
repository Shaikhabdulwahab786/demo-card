import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function Custom404() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-honey">
      <div className="text-center max-w-md mx-auto p-8">
        <div className="text-8xl font-bold text-primary mb-6">404</div>
        <h1 className="text-2xl font-bold text-foreground mb-4">
          Page Not Found
        </h1>
        <p className="text-muted-foreground mb-8">
          Sorry, we couldn't find the page you're looking for. 
          Perhaps you'd like to go back to our homepage?
        </p>
        <Link href="/">
          <Button className="bg-gradient-warm hover:shadow-hover transition-all duration-300">
            <Home className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}