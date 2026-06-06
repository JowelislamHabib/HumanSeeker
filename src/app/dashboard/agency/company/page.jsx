import { getUserSession } from "@/lib/core/session";
import CompanyProfilePage from "./CompanyProfilePage";
const CompanyPage = async () => {
  const user = await getUserSession();
  console.log(user, "from company page");
  return (
    <div>
      <CompanyProfilePage agency={user} />
    </div>
  );
};

export default CompanyPage;
