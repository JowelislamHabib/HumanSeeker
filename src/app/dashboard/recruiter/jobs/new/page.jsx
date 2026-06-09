import { getLoggedInRecruiterCompany } from "@/lib/actions/company";
import CreateNewJobForm from "./CreateNewJobForm";

export default async function NewJobRoute() {
  const recruiterCompany = await getLoggedInRecruiterCompany();
  return <CreateNewJobForm recruiterCompany={recruiterCompany} />;
}
