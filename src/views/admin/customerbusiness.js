import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import countries from 'i18n-iso-countries';
import 'i18n-iso-countries/langs/pt.json';

export default function Costumers() {
  const [formData, setFormData] = useState({
    business: {
      name: "",
      website: ""
    }
  });
  const [isOwner, setisOwner] = useState(false);
  const [countryList, setCountryList] = useState({});

  useEffect(() => {
    // Register the Portuguese locale
    countries.registerLocale(require('i18n-iso-countries/langs/pt.json'));

    // Get the country names in Portuguese
    const countryNames = countries.getNames('pt', { select: 'official' });

    // Set the country names to state
    setCountryList(countryNames);
  }, []);

  return (
    <div className="wrapper d-flex flex-column align-items-center justify-content-center">
      <Helmet>
        <title>Sign up - LogicLeap</title>
      </Helmet>
      
      {/* Primeiro Container */}
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <h3 className='text-bold mb-0'>António Mendes</h3>
                <p className="text-left text-secondary">Role</p>
                <form>
                  <div className="row g-3">
                    <div className="col-sm-6">
                      <label htmlFor="businessName" className="form-label">Empresa</label>
                      <input type="text" className="form-control" id="businessName" placeholder="Nome da Empresa" />
                    </div>
                    <div className="col-sm-6">
                      <label htmlFor="businessWebsite" className="form-label">Website</label>
                      <input type="text" className="form-control" id="businessWebsite" placeholder="empresa.pt" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Segundo Container */}
      <div className="container my-1">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <p className="text-left text-secondary">Gestão</p>
                <form>
                  <div className="row g-3">
                    <div className="col-sm-6">
                      <label htmlFor="newBusinessName" className="form-label">Empresa</label>
                      <input type="text" className="form-control" id="newBusinessName" placeholder="Nome da Empresa" />
                    </div>
                    <div className="col-sm-6">
                      <label htmlFor="newBusinessWebsite" className="form-label">Website</label>
                      <input type="text" className="form-control" id="newBusinessWebsite" placeholder="empresa.pt" />
                    </div>
                  </div>
                  <div className="form-check mt-3">
                    <input className="form-check-input" type="checkbox" id="revokePermissions" />
                    <label className="form-check-label" htmlFor="revokePermissions">
                      Revogar Permissões da Gestão desse produto
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-primary my-3 w-50">
                Save
          </button>
        </div>
      </div>
    </div>
  );
};
