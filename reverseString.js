//reverse a string input

function revString(string){

var i=0
let rev=[]
for (var j=string.length-1;j>=i;j--){

	let revStr=string[j]
	rev.push(revStr)
}

return rev.join('')

}