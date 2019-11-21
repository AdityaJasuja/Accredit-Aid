import React from 'react'

function Invite(){
    return(
 <div>
     <form>
     
         To: <br></br>
        <input type="text"  value="daveanderson@wsu.edu; bakken@wsu.edu; zdang@wsu.edu" size ="60" ></input>
         <br></br>
         <br></br>
         <br></br>
         Message: 
         <br></br><textarea id="txt1" rows="4" cols="50" placeholder="Type Here..."></textarea>
         <br></br>
         <p id="para2">
            <input type="radio" value="Reminder" name="work" />
            <label>Reminder</label>
            <br></br>
            <br></br>
            <input type="radio" value="Invite" name="work" />
            <label>Invites</label>
        </p>
                 <button class="btn waves-effect waves-light" type="submit" name="action">Submit
                <i class="material-icons right">send</i>
                </button>

     </form>
 </div>
    )
}

export default Invite