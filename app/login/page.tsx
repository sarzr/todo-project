import LoginForm from "@/components/auth/login-form";
import Image from "next/image";
import React from "react";

const LoginPage = () => {
  return (
    <div className="bg-purpleLight">
      <div className="max-w-[1300px] grid md:grid-cols-2 items-center gap-8 m-auto min-h-screen">
        <LoginForm />

        <div className="max-md:order-1 lg:min-w-[450px] w-full">
          <Image
            src="/8810413.jpg"
            className="lg:w-11/12 w-full object-cover"
            alt="login-image"
            width={500}
            height={500}

          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
