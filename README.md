Lequire
=======

Better alternative for requiring local Node.js modules

## How to use
Require `foobar.js` file in current directory:

	var lequire = require('lequire'),
		foobar = lequire('./foobar');

Require `foobar.js` file that located in `fubar/baz/`:

	var lequire = require('lequire'),
		foobar = lequire('fubar/baz/foobar');