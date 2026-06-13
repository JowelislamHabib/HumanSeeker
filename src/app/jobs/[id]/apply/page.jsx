import ApplyNotAllowed from "@/components/jobs/ApplyNotAllowed";
import { getJobById } from "@/lib/api/job";
import { getUserSession } from "@/lib/core/session";
import { redirect } from "next/navigation";
import JobApply from "./JobApply";

const ApplyPage = async ({ params }) => {
  const { id } = await params;
  const user = await getUserSession();
  //   console.log(user);

  if (!user) {
    redirect(`/login?redirect=/jobs/${id}/apply`);
  }
  if (user.role !== "freelancer") {
    return <ApplyNotAllowed />;
  }
  const job = await getJobById(id);
  return (
    <div>
      <JobApply applicant={user} job={job} />
    </div>
  );
};

export default ApplyPage;
