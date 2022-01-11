var taitai1118 = {
  chunk:function (array,num = 1) {     //将数组中的元素分成长度为num的组，若不能均分，最后的组都是剩余元素
    var result = []
    while (num) {
      result.push(array.splice(0,num))
      if (array.length == 0) {
        break
      }
    }
    return result
  },

  compact : function(array) {
    let res = [];
    let i = 0;
    while (i < array.length) {
      if (Boolean(array[i]) == false) {
        i++;
        continue;
      }
      res.push(array[i]);
      i++;
    }
    return res;
  },

  concat:function (array) {
    let res = [];
    for (let key in arguments) {
      Array.isArray(arguments[key])
        ? res.push(...arguments[key])
        : res.push(arguments[key]);
    }
    return res;
  }

  // function difference(array) {
  //   let res = [];
  //   if (!arguments["1"]) {
  //     return array;
  //   }
  //   let arr = arguments["1"];
  //   for (let i = 0; i < array.length; i++) {
  //     if (!arr.includes(array[i])) {
  //       res.push(array[i]);
  //     }
  //   }
  //   return res;
  // }
,
drop : function  (array) {
  if(arguments["1"] == 0){
    return array
  }
  if(!arguments["1"]){
     array.shift(array[0])
     return array
  }
  let n = arguments["1"];
  let con = 0;
  for (let i = array.length - 1; i >= 0; i--) {
    if (con == n) {
      break;
    }
    array.shift(array.length - i);
    con++;
  }
  return array;
}

,

dropRight : function (array){
    let len = array.length
    if(arguments["1"] == 0){
      return array
    }
    if(!arguments["1"]){
      array.splice(array[len - 1,1])
      return array
    }
    let n = arguments["1"];
    let con = 0;
    for (let i = 0; i < len; i++){
      if (con == n) {
        break;
      }
      array.splice(len - 1 - i,);
      con++;
    }
    return array;
  }
,
// dropRightWhile :  function (array) {

//    }

  //  function dropWhile(array) {

  //  }

  fill : function (array,value) {
    let start = arguments["2"]
    if(!start){
      start = 0;
    }
    let len = arguments["3"];
    if(!len){
      len = array.length
    }
    for(let i = start; i < len; i++) {
      array[i] = value;
    }
    return array;
   }
,
  //  function findIndex(array){

  //  }

  flatten :  function (array){
    let res = [];
    for(let item of array){
      if(Array.isArray(item)){
        res.push(...item);
      }else{
        res.push(item);
      }
    }
    return res;
  }
  ,
  flattenDeep : function (array){
    let res = [];
    for(let item of array){
      if(Array.isArray(item)){
        res = [...res,...flattenDeep(item)]
      }else{
       res.push(item);
      }
    }
    return res
  }
,
spread : function (array){
    let tmp = []
    for(let item of array){
      if(Array.isArray(item)){
        tmp.push(...item)
      }else{
        tmp.push(item);
      }
    }
    return tmp;
  }
,
flattenDepth : function (array,depth){

  if(!depth){
    return array
  }
  let res = [];
  for(let i = 0; i < depth; i++){
    res = spread(array);
    array = res;
  }
  return res
  }
}
