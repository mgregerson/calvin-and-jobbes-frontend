import { useParams } from "react-router-dom";

function CompanyDetail() {
  const { handle } = useParams();
  return "CompanyDetail Company: " + handle;
}

export default CompanyDetail;
