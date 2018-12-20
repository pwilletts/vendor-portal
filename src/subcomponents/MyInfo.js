import React from 'react'

class MyInfo extends React.Component{
    render() {
        return(
            <div class="tab-content" id="v-pills-tabContent">
                <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                    <h4><u>My Info</u></h4>
                    <form>
                        <div class="form-group row">
                            <label for="inputName3" class="col-sm-2 col-form-label">Name</label>
                            <div class="col-sm-4">
                                <input type="text" class="form-control" id="inputName3" placeholder="Name"></input>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                            <div class="col-sm-4">
                                <input type="email" class="form-control" id="inputEmail3" placeholder="Email"></input>
                            </div>
                        </div>   
                        <div class="form-group row">
                            <label for="inputNumber3" class="col-sm-2 col-form-label">Phone Number</label>
                            <div class="col-sm-2">
                                <input type="text" class="form-control" id="inputNumber3" placeholder="(123)-457-8901"></input>
                            </div>
                        </div>                                                           
                        <div class="form-group row">
                            <div class="col-sm-10">
                            <button type="submit" class="btn btn-primary">Save</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default MyInfo