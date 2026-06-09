import { getUserSession } from "@/lib/core/session";
import CompanyProfilePage from "./CompanyProfilePage";
import { getRecruiterId } from "@/lib/api/company";
const CompanyPage = async () => {
  const user = await getUserSession();
  const recruiterCompany = await getRecruiterId(user?.id);
  //   console.log(company, "from company page");
  return (
    <div>
      <CompanyProfilePage
        recruiter={user}
        recruiterCompany={recruiterCompany}
      />
    </div>
  );
};

export default CompanyPage;
