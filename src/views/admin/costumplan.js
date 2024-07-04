import BillingTable from "../../components/billing-table-costumplan.js";
import "./costumplan.css";
import { Helmet } from 'react-helmet';

export default function costumplan() {

  return (
    <div className="wrapper background-color d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <Helmet>
        <title>Sales - Costum Plans</title>
      </Helmet>
      <BillingTable title="Product Name" status="Pending" replydate="2023-03-12" billingAmount="€19.99" paymentDate="2023-03-12" startDate="2023-03-12" action="view" />
    </div>
  );
}
