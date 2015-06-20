
function numoftimes(arrayOfNums,key){
	var c=0;
	for(i=0;i<arrayOfNums.length;i++){
		if(arrayOfNums[i]==key){
			c=c+1;
		}
	}
	return c;
}

exports.Sum = function(num1, num2){
	return num1+num2;
}

exports.SumOfArray = function(arrayOfNums){
	var sum=0;
	for(i=0;i<arrayOfNums.length;i++){
		sum=sum+arrayOfNums[i];
	}
	return sum;
}

// Sum only the unique numbers in the array.
// Ex: If array is [2,3,3,2], the sum is 2+3=5

exports.SumOfUniqueNumbers = function(arrayOfNums){
	var sum=0;
	//console.log(arrayOfNums);
	//onsole.log("l"+arrayOfNums.length);
	var found_array=[]
	for(i=0;i<1000;i++){
		found_array[i]=0;
	}
	i=0;
	for(i=0;i<arrayOfNums.length;i++){
		//console.log("i"+i);
		//console.log(numoftimes(arrayOfNums,arrayOfNums[i]));
		if(found_array[arrayOfNums[i]]==0){
			sum=sum+arrayOfNums[i];
			found_array[arrayOfNums[i]]+=1;
		}
		
	}
	//console.log("sum:"+sum);
	return sum;

}

exports.ReverseString = function(str){
	var b=str.split("").reverse().join("");
	return b;
}


exports.ReverseArrayOfStrings = function(arrayOfStrings){
	
	for(i=0;i<arrayOfStrings.length;i++){
		var b=arrayOfStrings[i].split("").reverse().join("");
		arrayOfStrings[i]=b;
	}
	return arrayOfStrings;
}