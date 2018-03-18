import React from 'react' 
import {connect} from 'react-redux'
import ListingDetails from '../components/listingDetails'
import {Container} from 'semantic-ui-react';

class MainDisplay extends React.Component {
    
    
    render(){

    if(this.props.selectedPerson.firstName !== '') {
        return  <ListingDetails  selectedPerson={this.props.selectedPerson} />
    }
    else if(this.props.queryBy === 'updateListing'){
        return (
            <h1> Select a listing to update</h1>
        )
    }
        return (
            <Container  >
                <h1 style={{fontSize: '4em', textAlign: 'center'}}>Welcome to MTL Anash!</h1>
            </Container>
        )   
        }
}







const mapStateToProps = state => (
    {selectedPerson: state.selectedPerson, queryBy: state.queryBy}
)

export default connect(mapStateToProps)(MainDisplay)