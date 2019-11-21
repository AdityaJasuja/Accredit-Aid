import React from 'react'
import ReactTooltip from 'react-tooltip'
import ques from './ques.png'

class NumericInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        num1: 1,
        num2: 1,
        num3: 1,
        num4:0,
        result: 3
      };
      this._changeNum1 = this._changeNum1.bind(this);
      this._changeNum2 = this._changeNum2.bind(this);
      this._changeNum3 = this._changeNum3.bind(this);
      this._changeNum4 = this._changeNum4.bind(this);
    }
    
    _changeNum1(e) {
      if (e.target.validity.valid) {
        var newNum1 = +(e.target.value)
        this.setState({
            num1: newNum1,
            result: newNum1 + this.state.num2 + this.state.num3+  this.state.num4
          }); 
      }
    }
    
      _changeNum2(e) {
      if (e.target.validity.valid) {
        var newNum2 = +(e.target.value)
        this.setState({
            num2: newNum2,
            result: this.state.num1 + newNum2 + this.state.num3+  this.state.num4
          }); 
      }
    }
    _changeNum3(e) {
        if (e.target.validity.valid) {
          var newNum3 = +(e.target.value)
          this.setState({
              num3: newNum3,
              result: newNum3 + this.state.num2 + this.state.num1 +  this.state.num4
            }); 
        }
      }
      _changeNum4(e) {
        if (e.target.validity.valid) {
          var newNum4 = +(e.target.value)
          this.setState({
              num4: newNum4,
              result: newNum4 + this.state.num2 + this.state.num1 +this.state.num3
            }); 
        }
      }


    
    
    render() {
      return (
        <div>
              <table>
              <tr>
              <td>
             
              <p>Total Number of work samples needed Per Deliverable: {this.state.result} <span data-tip="info"> <img src={ques} alt="ques.png.jpg" height ="20" width = "20"></img> </span> <ReactTooltip /></p>
            
              </td> 
                 </tr>

                  <tr>
                      <td>
            <p>No of Low Samples Needed :</p>
            <input type="number" value={this.state.num1} onChange={this._changeNum1} step="any"  min="1" max="20"/>
            </td>
            </tr>
            <tr>
                <td>
            <p>No of Med Samples Needed :</p>
            <input type="number" value={this.state.num2} onChange={this._changeNum2} step="any" min="1" max="20"/>
            </td>
          </tr>
          <tr>
          <td>
            <p> No of High Samples Needed :</p>
            <input type="number" value={this.state.num3} onChange={this._changeNum3} step="any" min="1" max="20" />
          </td></tr>
          <tr>
              <td>
            <p>No of Random Samples Needed:</p>
            <input type="number" value={this.state.num4} onChange={this._changeNum4} step="any" min="0" max="20"  />
          </td>
          </tr>
         
          </table>
        </div>
      )
    }  
  }  

  export default NumericInput