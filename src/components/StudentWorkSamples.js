import React from "react";
import NumericInput from './Counter.js'


const styling = {
    marginleft:'100',
  };
function StudentWorkSamples() {
    return(
        <div>
        
            <div id="Group_62" style={styling}>
                  <form action="" >
                          <table>
                              <tr>
                              <td>
             <p>                  
            Are Student Work Samples needed for each course deliverable?
             </p>
            </td>
                <td>
                    <p id="para2">
                    <input type="radio" value="yes" name="work" />
                    <label>yes</label>
                    <input type="radio" value="no" name="work" />
                    <label>no</label>
                    </p>
                </td>
                                
                            </tr>

                            <NumericInput />
                            
                        
                         </table>

                </form>
            </div>
            
        </div>
    )
}

export default StudentWorkSamples