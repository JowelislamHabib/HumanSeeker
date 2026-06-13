import { getUserSession } from "@/lib/core/session";
import { redirect } from "next/navigation";

const ApplyPage = async ({ params }) => {
  const { id } = await params;
  const user = await getUserSession();
  //   console.log(user);

  if (!user) {
    redirect(`/login?redirect=/jobs/${id}/apply`);
  }

  return (
    <div>
      <h1>Apply For This Job</h1>
    </div>
  );
};

export default ApplyPage;
