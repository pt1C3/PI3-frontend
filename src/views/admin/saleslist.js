import BillingTable from "../../components/billing-table-saleslist.js";
import "./saleslist.css";
import { Helmet } from 'react-helmet';

export default function saleslist() {

  return (
    <div className="wrapper background-color d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <Helmet>
        <title>Sales List</title>
      </Helmet>
      <BillingTable title="Product Name" status="Pending" replydate="2023-03-12" billingAmount="€19.99" paymentDate="2023-03-12" startDate="2023-03-12" actions="view" />
    </div>
  );
}
