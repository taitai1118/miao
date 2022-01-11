var taitai1118 = {
  chunk:function (array,num = 1) {
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
,
   difference : function (array,values) {
      let res = [],arr = [];
      for(let key in arguments) {
        if(key === '0'){
          continue;
        }
        arr.push(...arguments[key]);
      }
      for(let item of array){
        if(arr.includes(item)){
          continue;
        }else{
          res.push(item);
        }
      }
      return res
    }
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
//   flattenDeep : function (array){
//     let res = [];
//     for(let item of array){
//       if(Array.isArray(item)){
//         res = [...res,...flattenDeep(item)]
//       }else{
//        res.push(item);
//       }
//     }
//     return res
//   }
// ,
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
    function spread(array){
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
  ,

  join : function (array,separator = ',') {
    let res = ''
    for(let item of array) {
      if(item == array[array.length - 1]){
        res += item;
        break;
      }
      res += item + separator
    }
    return res;
  }
,
  last : function (array){
    var lenth = array == null ? 0 : array.length
    return lenth ? array[array.length - 1] : undefined;
   }
,

lastIndexOf :  function (array,value,fromIndex = array.length - 1){
  for(let i = fromIndex; i >= 0; i--){
    if(array[i] == value){
      return i;
    }
  }
  return -1;
 }


}
