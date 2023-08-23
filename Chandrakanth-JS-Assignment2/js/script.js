
function arrConcat(arr1, arr2) { //program - 1
    return arr1 + "," + arr2;
  }
  
  function arrIndexOf(arr1, value) { //program - 2
    for (var i = 0; i < arr1.length; i++) {
      if (arr1[i] === value) {
        return i;
      }
    }
    return -1;
  }
  
  
  function arrjoin(arr1) {//program - 3
    var s = "";
    for (var i = 0; i < arr1.length; i++) {
      s += arr1[i];
    }
    return s;
  }
  
  
  function arrLastIndexOf(arr1, value) {//program - 4
    for (var i = arr1.length - 1; i >= 0; i--) {
      if (arr1[i] === value) {
        return i;
      }
    }
    return -1;
  }
  
  
  function arrPush(arr1,value){ //program - 5
    arr1[arr1.length]=value;// adding element at the end of the array 
    return arr1.length;
  }
  
  
  function arrPop(arr1){//program - 6
    if (arr1.length === 0) {
      return undefined; 
    }
    var lastelement = arr1[arr1.length-1];
    arr1.length = arr1.length-1;
    return lastelement;
  }
  
  
  function arrShift(arr1){//program - 7
    if (arr1.length === 0) {
      return undefined; 
    }
    deleted_element = arr1[0];
    for(var i=0;i<arr1.length;i++){
      arr1[i]=arr1[i+1];
    }
    arr1.length = arr1.length-1;
    return deleted_element;
  }
  
  //program - 8
  function arrUnShift(arr1,value){
    for(var i=arr1.length-1;i>=0;i--){
      arr1[i+1]=arr1[i];
    }
    arr1[0]=value;
    return arr1.length;
  }
  
  
  function arrSort(arr2){//program - 9
    for (var i=0;i<arr2.length;i++){
      for(var j=0;j<arr2.length-i-1;j++){
        if(arr2[j]>arr2[j+1]){
          temp=arr2[j];
          arr2[j]=arr2[j+1];
          arr2[j+1]=temp;
        }
      }
    }
    return arr2;
  }
  
  var arr1 = [10,11,12,13,14];
  var arr2 = [88,12,2,333,24,22];
  document.write("Concatenated Array : ", arrConcat(arr1, arr2) + "</br>");
  document.write("First index of given value : ",arrIndexOf(arr1,) + "</br>");
  document.write("Joined string : ", arrjoin(arr1) + "</br>");
  document.write("Last index of the given value : ",arrLastIndexOf(arr1, 5) + "</br>");
  document.write("Length of  resultant array after the push operation : ",arrPush(arr1, 25) + "</br>");
  document.write("deleted_element of the array after the pop operation : ",arrPop(arr1) + "</br>");
  document.write("deleted_element at first position of the array after the pop operation : ",arrShift(arr1) + "</br>");
  document.write("Length of the Resultant array after the adding  element at first position : ",arrUnShift(arr1,200) + "</br>");
  document.write("Sorted array : ",arrSort(arr2));