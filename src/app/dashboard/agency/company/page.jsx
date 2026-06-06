import { getUserSession } from "@/lib/core/session";
import CompanyProfilePage from "./CompanyProfilePage";
const CompanyPage = () => {
  const user = getUserSession();
  console.log(user, "from company page");
  return (
    <div>
      <CompanyProfilePage />
    </div>
  );
};

export default CompanyPage;
