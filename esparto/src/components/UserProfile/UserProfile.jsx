import {React, ReactDOM} from "react";

var UserProfile = React.createClass({
	//Sahithi
    
    
    
    
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
	render: function() {
		return (
			<div className="Profile">
				<h1 className="Name">{this.props.person.name}</h1>
				<p className="Bio">{this.props.person.biography}</p>
				<div className="Quote">
					<blockquote>&ldquo; {this.props.quote.content} &rdquo;</blockquote>
					<div className="byline">&mdash; {this.props.quote.source}</div>
				</div>
				
			</div>
		);
	}
});

ReactDOM.render(<UserProfile/>,document.getElementById('app'));

export default UserProfile;