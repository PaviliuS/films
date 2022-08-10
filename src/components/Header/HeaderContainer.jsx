import React from "react";
import Header from "./Header";
import { connect } from "react-redux";

const HeaderContainer = (props) => {
    return (
       <Header {...props} ></Header>
    );
}

const mapStateToProps = (state) => {
    return {
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);