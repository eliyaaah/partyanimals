import React from 'react';

function Header(props)	{

	//const message = props.message ? props.message: "the default message"; //if props.message exists do the following after ? if not do after :

	// let message; does same as the line above

	// if(props.message)	{
	// 	message = props.message;
	// }	else {
	// 	message = "the default message";
	// }

	return (
		<header className="headerComponent">
			<h1>{props.title}</h1>
			<h2>{props.message ? props.message: "the default message"}</h2>
		</header>
	);
}

export default Header;