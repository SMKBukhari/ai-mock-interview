import { isAuthenticatd } from "@/actions/auth.action";
import { redirect } from "next/navigation";

type AuthLayoutProps = {
  children: React.ReactNode;
};
const AuthLayout = async ({ children }: AuthLayoutProps) => {
  const isUserAuthenticated = await isAuthenticatd();

  if (isUserAuthenticated) {
    redirect("/");
  }
  return <div className='auth-layout'>{children}</div>;
};

export default AuthLayout;
