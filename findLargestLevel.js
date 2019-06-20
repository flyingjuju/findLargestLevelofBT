const findLargestLevel = function(node) {
  // your code here
  var tempArr = [];
 //
  var recursion = function(node,level) {
  	var sum = 0;
  	for(var i=0; i<=level; i++){
  		sum += node.value;
		  tempArr.push(sum);
		  if(node.left || node.right){
			 level ++;
		  }

  		if(node.left){
			 sum += node.left.value;
  		}
  		if(node.right){
			 sum += node.right.value;
  		}	
  	}
  	tempArr.push(sum);
  }	
	recursion(node,0)
	return tempArr;
};