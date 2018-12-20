import React from 'react'
import firebase from 'firebase'

class Info extends React.Component {
    state = {
        user: null,
        contact: [0,1,2]
    }

    componentWillMount(){
        this.setState({user: firebase.auth().currentUser}, function(){
            console.log(this.state.user.email)
        })
    }

    render(){
        return(
            <React.Fragment>
                <div class="row col-12 mr-auto ml-auto mt-4">
                    <div class="col-2">
                        <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <li class="nav-link pointer" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Contact Info</li>
                            <li class="nav-link pointer" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Payment Info</li>
                            <li class="nav-link pointer" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</li>
                        </div>
                    </div>
                    <div class="col-8">                       
                        <div class="tab-content" id="v-pills-tabContent">
                            <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                                <h4><u>Company Contact Info</u></h4>
                                {this.state.contact.map(
                                        contact => {                                 
                                            return(
                                                <React.Fragment>
                                                    <div class="form-row">
                                                        <div class="form-group col-md-3">
                                                            <label for="inputEmail4">Name</label>
                                                            <input type="text" class="form-control" id="inputEmail4" placeholder="Adam Smith"></input>
                                                        </div>
                                                        <div class="form-group col-md-3">
                                                            <label for="inputPassword4">Email</label>
                                                            <input type="email" class="form-control" id="inputPassword4" placeholder="adam.smith@biz.org"></input>
                                                        </div>
                                                        <div class="form-group col-md-3">
                                                            <label for="inputPassword4">Phone Number</label>
                                                            <input type="text" class="form-control" id="inputPassword4" placeholder="888-867-5309"></input>
                                                        </div>
                                                    </div>                                                        
                                                </React.Fragment>
                                            )
                                        }
                                    )}
                            </div>
                            <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                                <h4><u>Payment Information</u></h4>
                                
                            
                            </div>
                            <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...</div>
                        </div>
                    </div>
                </div>
            </React.Fragment>      
        )
    }
}

export default Info