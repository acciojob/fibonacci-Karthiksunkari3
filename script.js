function fibonacci(num) {
// your code here
	let n1=0,n2=1,n3,;
	console.log(n1+" "+n2);
	if(let i=0;i<num;++i){
      n3=n1+n2;
		console.log(" "+n3);
		n1=n2;
		n2=n3;
	}
}

module.exports = fibonacci;
