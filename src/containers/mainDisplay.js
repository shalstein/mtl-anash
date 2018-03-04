import React from 'react' 
import {connect} from 'react-redux'
import ListingDetails from '../components/listingDetails'

class MainDisplay extends React.Component {
    
    
    render(){

    if(this.props.selectedPerson.firstName !== '') {
        return  <ListingDetails selectedPerson={this.props.selectedPerson} />
    }
        return <h1 style={{fontSize: '4em' }}>Welcome to MTL Anash!</h1>
        }
}







const mapStateToProps = state => (
    {selectedPerson: state.selectedPerson}
)

export default connect(mapStateToProps)(MainDisplay)