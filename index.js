var Fs = require('fs');

//Directory Name Default
var thisDir =  __dirname;

function changeName (dir, currentStr, newStr) {
	Fs.readdir(dir, function (error, data){
		if (error) {
			console.log(error);
		} else {
			for (var i = 0; i < data.length; i++) {
				var oldPath = data[i];
				var newPath = oldPath.replace(currentStr, newStr); //Add name variable here

				Fs.rename(oldPath, newPath, function (error) {
					if (error) {
						console.log(error);
					} else {
						console.log('Complete!');
					}
				});
			}
			console.log('All file names have been changed!');
		}
	});
}
//Pass in Directory, Current part of title you want to change, what you want to change it too
changeName(thisDir, 'Current String', 'New String');

//notes:
//Add reg ex to change file names based on meta chars.
