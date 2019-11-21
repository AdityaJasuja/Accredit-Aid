import React from "react"


function Coursematerials() {
    return(
		<div>
			
			<div id>
				<table className="striped">
                <tr>
						<td>
							<p id="para2">
							<input type="checkbox" />
							Mapping to Student Outcomes/ Performance Indicators
							</p>
						</td>
					</tr>
					<tr>
						<td>
							<p id="para2">
							<input type="checkbox" />
							Syllabus and Schedule
							</p>
						</td>
					</tr>
					<tr>
						<td>
							<p id="para2">
							<input type="checkbox" />
							Lecture Materials
							</p>
						</td>
					</tr>
					<tr>
						<td>
							<p id="para2">
							<input type="checkbox" />
							Reading Materials
							</p>
						</td>
					</tr>
					<tr>
						<td>
							<p id="para2">
							<input type="checkbox" id="myCheck" onClick={()=>{ 
								 var checkBox = document.getElementById("myCheck");
								 var text = document.getElementById("text");
								 if (checkBox.checked === true){
									text.style.display = "block";
								} else {
									text.style.display = "none";
								}
								}
							} />Course deliverable
							
							<p id="text">
							<table>
								<tr>
									<td>
										<p id="para2">
										<input type="checkbox" />
											Prompt
										</p>
									</td>
								</tr>
								<tr>
									<td>
										<p id="para2">
										<input type="checkbox" />
											Grading Rubric
										</p>
									</td>
								</tr>
								<tr>
									<td>
										<p id="para2">
										<input type="checkbox" />
											Mapping to Student outcome/performance indicator
										</p>
									</td>
								</tr>
							</table>
							</p>
							
							</p>
						</td>
					</tr>
                    <tr>
						<td>
							<p id="para2">
							<input type="checkbox" />
							List of Sample Course Deliverables that demonstrate attainment of student outcomes
							</p>
						</td>
					</tr>
					
				</table>
		
			
    		</div>
  
		</div>
    )
}

export default Coursematerials