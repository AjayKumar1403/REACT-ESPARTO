import {React, ReactDOM} from "react";

var UserProfile = React.createClass({
	//Sahithi
    
    
    
    ,
	render: function() {
		return(
			<div className="App">
				<Image src={this.props.image} />
				<Profile person={this.props.person} quote={this.props.quote} />
			</div>
		);
	}
});

//Sailaja

var Profile = React.createClass({
	//Thella
});

ReactDOM.render(<UserProfile/>,document.getElementById('app'));

export default UserProfile;