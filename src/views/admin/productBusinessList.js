import BillingTable from "../../components/billing-table-businessList.js";
import "./productBusinessList.css";
import { Helmet } from 'react-helmet';

export default function productBusinessList() {

  return (
    <div className="wrapper background-color d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <Helmet>
        <title>Costumers - Businesses</title>
      </Helmet>
      <BillingTable title="Product Name" status="Pending" versions="1.0.1" billingDate="2023-03-12" billingAmount="€19.99" paymentDate="2023-03-12 11:45 AM" startDate="2023-03-12" action="Pay" />
    </div>
  );
}
