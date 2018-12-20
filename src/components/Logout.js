import React from 'react'
import firebase from 'firebase'

class Logout extends React.Component {
    logout(){
        firebase.auth().signOut()
    }

    componentWillMount(){
        this.logout()
    }

    render(){
        return(
            <div>
                You have been logged out.
            </div>
        )
    }
}

export default Logout