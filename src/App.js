import React from "react";
import "./App.css";
import {connect} from "react-redux";
import {changeFam, changeIm, changeOt} from './ActionCreators'
import {bindActionCreators} from 'redux';

class App extends React.Component {
  render() {
    const { fam, im, ot, changeFam, changeIm, changeOt } = this.props
    return (
      <div className="App">
        <h1>{fam + " " + im + " " + ot}</h1>
        <p>
          <label htmlFor="fam">Фамилия</label>
          <br />
          <input type="text" id="fam" placeholder="Иванов" onChange={(e) => changeFam(e.target.value)}/>
        </p>
        <p>
          <label htmlFor="im">Имя</label>
          <br />
          <input type="text" id="im" placeholder="Иван" onChange={(e) => changeIm(e.target.value)}/>
        </p>
        <p>
          <label htmlFor="ot">Отчество</label>
          <br />
          <input type="text" id="ot" placeholder="Иванович" onChange={(e) => changeOt(e.target.value)}/>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state)=>{
  return {
    fam: state.famReducer.fam,
    im: state.imReducer.im,
    ot: state.otReducer.ot
  }
}

const putActionProps = (dispatch) => {
  return bindActionCreators({
    changeFam,
    changeIm,
    changeOt,
  }, dispatch)
}

export default connect(mapStateToProps, putActionProps)(App);

/*
const connect = (mapStateToProps,putActionProps) => return (Component) => {return <Component {...mapStateToProps} {...putActionProps}/>}
*/ 