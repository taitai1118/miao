var taitai1118 = {
  chunk:function (array,num = 1) {
  //   var result = []
  //   while (num) {
  //     result.push(array.splice(0,num))
  //     if (array.length == 0) {
  //       break
  //     }
  //   }
  //   return result
  // },
  // // function chunk(array, size = 1) {
    let len = array.length;
    let res = [],s = []
    if (len == num) {
      return array;
    }
    if(num == 0){
      return []
    }
    for (let i = 1; i <= len; i++) {
      s.push(array[i - 1]);
      if (i % num == 0) {
        res.push(s);
        s = [];
      }
    }
    if(len % num == 0) {
      return res;
    }else{
      res.push(s);
      return res;
    }
  }
,

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
  flattenDeep : function (array){
    function  flattenDeep(array){
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
      res += item + '' + separator
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
,
   nth : function (array,n = 0){
      if(n >= 0){
      return array[n];
      }else{
        return array[array.length + n]
      }
    }
,
   indexOf : function (array,value,fromIndex = 0){
     for(let i = fromIndex;i < array.length;i++){
       if(array[i] == value){
         return i;
       }
     }
     return -1;
   }
,
    head : function (array){
      var lenth = array == null ? 0 : array.length
    return lenth ? array[0] : undefined;
    }
,
  initial : function (array){
    array.pop();
    return array;
  }
,
reverse : function (array) {
  let len = array.length;
  for(let i = 0,j = len - 1; i < len; i++){
    array.push(array[j]);

    j--
  }
  array.splice(0,len)
  return array;
}
,
// function reverse(array) {
//   let l = 0, r = array.length - 1;    // 左右指针遍历
//   while (l < r) {
//     [array[l], array[r]] = [array[r], array[l]]   // 左右指针交换值
//     l++;
//     r--;
//   }
//   return array
// }

without : function (array,values) {
    let res = [];
    let flag = true;
    for(let i = 0; i  < array.length; i++){
      for(let key in arguments) {
        if(key === '0'){
          continue;
        }
        if(array[i] == arguments[key]){
          flag = false;
          continue;
        }
      }
      if(flag == true){
        res.push(array[i]);
      }
      flag = true
    }
    return res
  }
,

intersection :  function (arrays){
  let res = [];
  let flag = false
  for(let i = 0; i < arguments['0'].length; i++){
    for(let key in arguments) {
      if(key == 0){
        continue;
      }
      for(let item of arguments[key]){
        if(arguments['0'][i] == item ){
          flag = true;
            break;
        }
      }
      if(flag == false){
        break;
      }
    }
    if(flag == true){
      res.push(arguments['0'][i])
      flag = false;
    }
  }
  return res
}
,

fromPairs : function (pairs) {
  let obj = {};
  for(let i = 0; i < pairs.length; i++){
    if(pairs[i].length != 0){
      obj[pairs[i][0]] = pairs[i][1]
    }
  }
  return obj;
}
,
pull : function(array,values){
  for(let i = array.length - 1; i >= 0;i--){
    for(let key in arguments) {
      if(key === '0'){
        continue;
      }
      if(array[i] == arguments[key]){
        array.splice(i, 1);
      }
    }
  }
  return array
  }
,

pullAll : function (array,values){
  let res = [],arr = [];
  for(let key in arguments) {
    if(key === '0'){
      continue;
    }
    arr.push(...arguments[key]);
  }
  for(let i = array.length - 1 ; i >= 0; i--){
    if(arr.includes(array[i])){
      array.splice(i,1)
    }
  }
  return array
}
,

max : function(array){
  if(!array){
    return undefined;
  }
  let max = array[0]
for(let item of array){
   if(max < item){
     max = item
   }
}
return max;
}
,
sum : function(array){
  let sum = 0 ;
  for(let item of array){
    sum += item;
  }
  return sum;
  }
,

repeat : function (string = '', n = 1){
  res = ''
   for(i = 0;i < n;i++){
    res += string
   }
   return res
  }
  ,

  uniq : function (array){
    let res = [];
    for(let item of array){
      if(res.includes(item)){
        continue;
      }else{
        res.push(item);
      }
    }
    return res;
   }
,

size :  function (collection){
  let con = 0;
  for(let key in collection){
    con++
  }
  return con
}
,

tail : function (array){
  let res = [];
  for(let i = 1;i < array.length ; i++){
    res.push(array[i])
  }
  return res
}
,

take : function (array,n = 1){
  res = [];
  if(n > array.length){
    n = array.length;
  }
   for(let i = 0; i < n;i ++){
     res.push(array[i])
   }
   return res
}
,

takeRight : function (array,n = 1){
  let res = [];
   if(n >= array.length){
     return array;
   }
   if(n == 0){
     return [];
   }
    for(let i = array.length - 1;i >= array.length - n;i--){
       res.unshift(array[i])
    }
    return res
 }
,

range : function(start = 0, end,step = 1) {
  if(start < 0){
    if(!arguments['1'] || !arguments['2'] ){
      step = -1;
    }
  }
  if(!arguments['1']){
   end = start;start = 0;
 }
 if(end <start && !step){
   return [];
 }
  let res = [];
  if(start > end){
    for(i = start; i > end; i+=step) {
      res.push(i)
    }
  }else{
    for(i = start; i < end; i+=step) {
      res.push(i)
    }
  }
  return res
  }
,









}
