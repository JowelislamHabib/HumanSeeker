import { getUserSession } from "@/lib/core/session";
import { redirect } from "next/navigation";

const ApplyPage = async () => {
  const user = await getUserSession();
  console.log(user);

  if (!user) {
    redirect("/login");
  }

  return (
    <div>
      <h1>Apply For This Job</h1>
    </div>
  );
};

export default ApplyPage;
