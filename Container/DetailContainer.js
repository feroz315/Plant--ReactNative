import  { connect } from 'react-redux';
import DetailsScreen from '../Screen/Details';
import  addtoCart  from '../Redux/Actions/Types'; 


const mapDispatchToProps = dispatch => ({
    
    addtoCartHandler: data => dispatch (addtoCart(data))

    
})

export default connect(null, mapDispatchToProps)(DetailsScreen);

