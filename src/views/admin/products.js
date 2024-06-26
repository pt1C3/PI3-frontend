
import BillingTable from "../components/billing-table.js";
import "./login.css";
import { Helmet } from 'react-helmet';

export default function Products() {

  return (
    <div className="wrapper background-color d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <Helmet>
        <title>Payment history - CreatiVortex</title>
      </Helmet>
      <BillingTable title="Product Name" type="Software" status="Pending" maxUsers="-" billingDate="2023-03-12" billingAmount="€19.99" paymentDate="2023-03-12 11:45 AM" startDate="2023-03-12" action="Pay" />
    </div>
  );
}
