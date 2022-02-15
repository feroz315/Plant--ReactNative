import  { connect } from 'react-redux';
import HomeScreen from '../Screen/Home';
import  addtoCart  from '../Redux/Actions/Types'; 


const mapDispatchToProps = dispatch => ({
    addtoCartHandler:data=> dispatch (addtoCart(data))
})

export default connect(null, mapDispatchToProps)(HomeScreen);

