"use client";

import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <Image
        src="/images/logo.svg"
        width={48}
        height={48}
        alt={`${APP_NAME} logo`}
        priority={true}
      />
      <div className="text-3xl font-bold mt-5">404 - Page Not Found</div>
      <p className="text-destructive">Could not find requested page</p>
      <Button
        variant="outline"
        className="mt-4 ml-2"
        onClick={() => (window.location.href = "/")}
      >
        Back to Home
      </Button>
    </div>
  );
};

export default NotFoundPage;
