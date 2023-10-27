import React from 'react';
import { connect } from 'react-redux';
import buyCookieActionCreator from '../actions/buyCookieActionCreator';


function CookieContainer(props) {
  return ( 

    <div className='container m-5 p-5 text-center'>
      <h1>Cookie Redux Demo</h1>
      <h4 className='m-5'>Number of Cookies in the Store:{props.numOfCookiesProps}</h4>
      <button type='button' className='btn btn-success' onClick={props.buyCookieProps}>Buy a Cookie</button>
    </div>
   );
}

// for linking this component to the redux
// 1. create 2 functions - mapStateToProps and mapDispatchToProps

const mapStateToProps = (state) =>{
  return {
    numOfCookiesProps: state.numOfCookies
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    buyCookieProps: ()=>dispatch(buyCookieActionCreator())
  }
}

// 2. create a HOC - Higher Order Component by using the connect function of react-redux library
// this will attach the 2 props(numOfCookiesProps, buyCookieProps) to this component and gives us a HOC 
//export default CookiesContainer;

// export default CookieContainer;

export default connect(mapStateToProps, mapDispatchToProps)(CookieContainer);

// 3. we need to provide the redux store to the root component which is App.js 
// so in App.js file, wrap the JSX with  <Provider> and specify the store