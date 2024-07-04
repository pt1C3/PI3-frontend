import BillingTable from "../../components/billing-table-salessupport.js";
import "./salessupport.css";
import { Helmet } from 'react-helmet';

export default function salessupport() {

  return (
    <div className="wrapper background-color d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <Helmet>
        <title>Sales - Support</title>
      </Helmet>
      <BillingTable title="Product Name" status="Pending" replydate="2023-03-12" billingAmount="€19.99" paymentDate="2023-03-12" startDate="2023-03-12" action="view" />
    </div>
  );
}
