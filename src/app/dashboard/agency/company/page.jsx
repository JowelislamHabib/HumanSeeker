import { getUserSession } from "@/lib/core/session";
import CompanyProfilePage from "./CompanyProfilePage";
import { getAgencyId } from "@/lib/api/company";
const CompanyPage = async () => {
  const user = await getUserSession();
  const companies = await getAgencyId(user?.id);
  //   console.log(company, "from company page");
  return (
    <div>
      <CompanyProfilePage agency={user} companies={companies} />
    </div>
  );
};

export default CompanyPage;
