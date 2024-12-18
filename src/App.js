import { useState, useEffect } from 'react';
import { Route, Link, Routes, useNavigate, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import './App.css';
import Home from './views/home';
import Payment from './views/payment';
import PaymentAddon from './views/paymentAddon';
import Product from './views/product';
import Package from './views/package';
import Addons from './views/addons';

import Login from './views/Login';
import SignUp from "./views/SignUp";
import Managers from './views/owner/managers';
import PaymentHistory from './views/paymenthistory';
import Support from './views/support';
import Search from './views/search';
import ProfileDropdown from './components/profile-dropdown';
import Plans from './views/owner/plans';
import OwnerProduct from './views/owner/ownerproduct';
import OwneraAllProducts from './views/owner/owneraallproducts';
import AuthService from './views/auth.service';
import AdminDashboard from './views/admin/adminDashboard';
import ProductsPackage from './views/owner/productsPackage';
//Admin Products
import AdminProducts from './views/admin/products';
import AdminProductVersions from './views/admin/productVersions';
import AdminFormProduct from './views/admin/formProduct';
import AdminProductAddons from './views/admin/productAddons';
import AdminFormVersion from './views/admin/formVersion';
import AdminFormAddon from './views/admin/formAddon';

import AdminBusiness from './views/admin/createBusiness';
import AdminCreateBusiness from './views/admin/formVersion';
import AdminCreateCostumer from './views/admin/createCostumer';
import AdminCostumerBusiness from './views/admin/customerbusiness';
import AdminCostumerEdit from './views/admin/customeredit';
import AdminInbox from './views/admin/inbox';
import AdminManagerPackage from './views/admin/managerPackage';
import AdminModais from './views/admin/Modais';
import ManagerProduct from './views/admin/managerProduct';
import AdminProductAddonsVersions from './views/admin/productAddonsVersions';
import AdminCostumPlan from './views/admin/costumplan';
import AdminSalesSupport from './views/admin/salessupport';
import AdminManagerList from './views/admin/productManagerList';
import AdminProductBusinessList from './views/admin/productBusinessList';
import AdminPackage from './views/admin/package';
import AdminSalesList from './views/admin/saleslist';
import Managerallproducts from './views/admin/managerallproducts';
import CustomPlan from './views/customPlan';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [search, setSearch] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [isOwner, setIsOwner] = useState(false);

  const [currentUser, setCurrentUser] = useState(AuthService.getCurrentUser());

  useEffect(() => {
    if (currentUser) {
      if (currentUser.utypeid === 4) {
        setIsAdmin(true);
        setIsOwner(false);
      }
      if (currentUser.utypeid === 3) {
        setIsOwner(true);
        setIsAdmin(false);
      }
    }
  }, [currentUser]);

  const handleLogin = (userData) => {
    setCurrentUser(userData);
    navigate('/');
  };

  const handleLogout = () => {
    AuthService.logout();
    setCurrentUser(null);
    setIsOwner(false);
    setIsAdmin(false);
    navigate('/')
  };

  const searchSubmit = (event) => {
    event.preventDefault();
    const newPath = `/search/${search}`;
    if (location.pathname === newPath) {
      navigate(newPath, { replace: true });
    } else {
      navigate(newPath);
    }
  };

  return (
    <div className="App">
      {isAdmin ? (
        <nav className="navbar navbar-admin bg-white px-10vw py-0 regular-border">
          <Link to="/" className="navbar-brand">
            <img src={process.env.PUBLIC_URL + "/images/logicleap.png"} alt="Logo" height="40" />
          </Link>
          <span className="d-flex align-items-center h-100 mx-3">
            <Link to="/" className="nav-link">
              <p className="mb-0 text-medium">Dashboard</p>
            </Link>
            <Link to="/sales" className="nav-link ms-2">
              <p className="mb-0 text-medium">Sales</p>
            </Link>
            <Link to="/" className="nav-link ms-2">
              <p className="mb-0 text-medium">Customers</p>
            </Link>
            <Link to="/package" className="nav-link ms-2">
              <p className="mb-0 text-medium">Packages</p>
            </Link>
            <Link to="/products" className="nav-link ms-2">
              <p className="mb-0 text-medium">Products</p>
            </Link>
            <Link to="/costumplan" className="nav-link ms-2">
              <p className="mb-0 text-medium">Custom Plans</p>
            </Link>
            <Link to="/" className="nav-link ms-2">
              <p className="mb-0 text-medium">Support</p>
            </Link>
          </span>
          {currentUser ? <ProfileDropdown onLogout={handleLogout} /> : <ProfileDropdown />}
        </nav>
      ) : (
        <nav className="navbar bg-white px-10vw regular-border">
          <Link to="/" className="navbar-brand">
            <img src={process.env.PUBLIC_URL + "/images/logicleap.png"} alt="Logo" height="40" />
          </Link>
          <span className="d-flex align-items-center">
            {isOwner && (
              <form className="inline-form" onSubmit={searchSubmit}>
                <div className="input-group rounded-2">
                  <input
                    type="text"
                    className="form-control bg-transparent border-0"
                    placeholder="Search"
                    name="search"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                  />
                  <div className="input-group-btn">
                    <button className="btn btn-default" type="submit">
                      <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                  </div>
                </div>
              </form>
            )}
            {currentUser && (
              <button className="btn btn-default">
                <FontAwesomeIcon icon={faBell} />
              </button>
            )}

            {currentUser ? <ProfileDropdown onLogout={handleLogout} /> : <ProfileDropdown />}
          </span>
        </nav>
      )}

      <Routes>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<SignUp />} />
        {isAdmin ? (
          <>
            <Route path="/" element={<AdminDashboard />} />
            {/*Produtos*/}
            <Route path="/products" element={<AdminProducts />} />
            <Route path="/products/form/:productid?" element={<AdminFormProduct />} />
            <Route path="/products/versions/:productid" element={<AdminProductVersions />} />
            <Route path="/products/addons/:productid" element={<AdminProductAddons />} />
            <Route path="/addons/versions/:addonid" element={<AdminProductAddonsVersions />} />
            <Route path="/addons/form/:addonid?" element={<AdminFormAddon />} />
            <Route path="/versions/form/:isproduct/:id/:versionid?" element={<AdminFormVersion />} />
            {/*Utilizadores*/}
            <Route path="/business" element={<AdminBusiness />} />
            <Route path="/costumer/business" element={<AdminCostumerBusiness />} />
            <Route path="/costumer/edit" element={<AdminCostumerEdit />} />
            <Route path="/inbox" element={<AdminInbox />} />
            <Route path="/managerpackage" element={<AdminManagerPackage />} />
            <Route path="/modais" element={<AdminModais />} />
            <Route path="/createcostumer" element={<AdminCreateCostumer />} />
            <Route path="/createbusiness" element={<AdminCreateBusiness />} />
            <Route path="/costumplan" element={<AdminCostumPlan />} />
            <Route path="/salessupport" element={<AdminSalesSupport />} />
            <Route path="/managerlist" element={<AdminManagerList />} />
            <Route path="/productbusinesslist" element={<AdminProductBusinessList />} />
            <Route path="/package" element={<AdminPackage />} />
            <Route path='/sales' element={<AdminSalesList />} />
            <Route path="/managerProduct" element={<ManagerProduct />} />
            <Route path="/managerallproducts" element={<Managerallproducts />} />
          </>
        ) : (
          <>
            {/*Venda de produtos*/}
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/product/custom/:id" element={<CustomPlan />} />
            <Route path="/package/:id" element={<Package />} />
            <Route path="/search/:searchvalue" element={<Search />} />
            <Route path="/product/addons/:productid" element={<Addons />} />

            {/*Owner*/}
            <Route path='/owner/product' element={<OwneraAllProducts />} />
            <Route path="/owner/product/:productid" element={<OwnerProduct />} />
            <Route path="/payment/:price/:productid" element={<Payment />} />
            <Route path="/payment/addon/:addonid" element={<PaymentAddon />} />
            <Route path="/owner/history" element={<PaymentHistory />} />
            <Route path="/owner/managers" element={<Managers />} />
            <Route path="/owner/plans" element={<Plans />} />
            <Route path="/owner/productsPackage" element={<ProductsPackage />} />

            <Route path="/support" element={<Support />} />
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
