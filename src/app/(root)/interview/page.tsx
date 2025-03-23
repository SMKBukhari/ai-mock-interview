import { getCurrentUser } from "@/actions/auth.action";
import Agent from "@/components/global/Agent";

const Page = async () => {
  const user = await getCurrentUser();

  return (
    <>
      <h3>Interview generation</h3>

      <Agent
        userName={user?.name || "User"}
        userId={user?.id}
        type='generate'
      />
    </>
  );
};

export default Page;
