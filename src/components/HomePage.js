import React from 'react';
import { Link } from 'react-router-dom';

class HomePage extends React.Component{
    router(event){
        console.log('here')
        this.props.history.push(`/${event.target.id}`);
    }

    render(){
        return(
          <div class="w-75 text-center mr-auto ml-auto">
            <div class="card-body w-75 mr-auto ml-auto">
              <h4 class="card-title">Welcome to the PAG Vendor Portal</h4>
              <h6 class="card-text" style={{fontSize:18}}>Here you can view invoices on file, view payments, submit invoices, and find invoice information. Try selecting one of the options below or searching for an invoice or PO number in the search box above.</h6>
            </div>
            <div class="card-body col-10 mr-auto ml-auto">
              <div class="card-deck">
                  <Link to={`/invoices`} style={{textDecoration: 'none',color:'black'}} className="card hvr-fade pointer">
                      <div class="card-body">
                        <h5 class="card-title">Invoices</h5>
                        <p class="card-text">View invoice status, payment date, or update invoice information.</p>
                      </div>
                  </Link>

                <Link to={`/payments`} style={{textDecoration: 'none',color:'black'}} className="card hvr-fade pointer">
                    <div class="card-body">
                      <h5 class="card-title">Payment Information</h5>
                      <p class="card-text">View recent payments and remittance information.</p>
                    </div>
                </Link>

                <Link to={`/submit`} style={{textDecoration: 'none',color:'black'}} className="card hvr-fade pointer">
                    <div class="card-body">
                      <h5 class="card-title">Submit Invoices</h5>
                      <p class="card-text">Submit invoice copies, statements, or vendor documentation</p>
                    </div>
                </Link>
                <Link to={`/info`} style={{textDecoration: 'none',color:'black'}} className="card hvr-fade pointer">
                  <div class="card-body">
                    <h5 class="card-title">Update Information</h5>
                    <p class="card-text">Update address, contact, W9, or payment information</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        );
    }
}

export default HomePage;