import React from 'react';
import MyComponent from './src/components/MyComponent';

window.addEventListener('DOMContentLoaded', function() {
	//Append the component to the container
	React.render(<MyComponent/>, document.getElementById('container'));
});
