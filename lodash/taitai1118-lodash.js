var taitai1118 = function() {
  function convertToFunction(predicate){
    let val = predicate
    if (typeof(val) == "object") {
       if(Array.isArray(val)){
         let obj = {}
         obj[val[0]] = val[1]
         val = obj
       }
       predicate = function(item){
         for(let key in val){
           if(val[key] != item[key]) return false
         }
         return true
       }
      } else {
        predicate = it => it[val]
      }
    return predicate
    }

  function  chunk(array, num = 1) {
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
    let res = [],
      s = [];
    if (len == num) {
      return array;
    }
    if (num == 0) {
      return [];
    }
    for (let i = 1; i <= len; i++) {
      s.push(array[i - 1]);
      if (i % num == 0) {
        res.push(s);
        s = [];
      }
    }
    if (len % num == 0) {
      return res;
    } else {
      res.push(s);
      return res;
    }
  }
  function  compact (array) {
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
  }

  function  concat(array) {
    let res = [];
    for (let key in arguments) {
      Array.isArray(arguments[key])
        ? res.push(...arguments[key])
        : res.push(arguments[key]);
    }
    return res;
  }
  function  difference(array, values) {
    let res = [],
      arr = [];
    for (let key in arguments) {
      if (key === "0") {
        continue;
      }
      arr.push(...arguments[key]);
    }
    for (let item of array) {
      if (arr.includes(item)) {
        continue;
      } else {
        res.push(item);
      }
    }
    return res;
  }
  function  drop(array) {
    if (arguments["1"] == 0) {
      return array;
    }
    if (!arguments["1"]) {
      array.shift(array[0]);
      return array;
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

  function dropRight(array) {
    let len = array.length;
    if (arguments["1"] == 0) {
      return array;
    }
    if (!arguments["1"]) {
      array.splice(array[(len - 1, 1)]);
      return array;
    }
    let n = arguments["1"];
    let con = 0;
    for (let i = 0; i < len; i++) {
      if (con == n) {
        break;
      }
      array.splice(len - 1 - i);
      con++;
    }
    return array;
  }
  // dropRightWhile :  function (array) {

  //    }

  //  function dropWhile(array) {

  //  }

  function  fill(array, value) {
    let start = arguments["2"];
    if (!start) {
      start = 0;
    }
    let len = arguments["3"];
    if (!len) {
      len = array.length;
    }
    for (let i = start; i < len; i++) {
      array[i] = value;
    }
    return array;
  }
  //  function findIndex(array){

  //  }

  function  flatten(array) {
    let res = [];
    for (let item of array) {
      if (Array.isArray(item)) {
        res.push(...item);
      } else {
        res.push(item);
      }
    }
    return res;
  }
  function  flattenDeep(array) {
    function flattenDeep(array) {
      let res = [];
      for (let item of array) {
        if (Array.isArray(item)) {
          res = [...res, ...flattenDeep(item)];
        } else {
          res.push(item);
        }
      }
      return res;
    }
    let res = [];
    for (let item of array) {
      if (Array.isArray(item)) {
        res = [...res, ...flattenDeep(item)];
      } else {
        res.push(item);
      }
    }
    return res;
  }
  function  flattenDepth(array, depth) {
    function spread(array) {
      let tmp = [];
      for (let item of array) {
        if (Array.isArray(item)) {
          tmp.push(...item);
        } else {
          tmp.push(item);
        }
      }
      return tmp;
    }
    if (!depth) {
      return array;
    }
    let res = [];
    for (let i = 0; i < depth; i++) {
      res = spread(array);
      array = res;
    }
    return res;
  }
  function  join(array, separator) {
    let res = "";
    for (let item of array) {
      if (item == array[array.length - 1]) {
        res += item;
        break;
      }
      res += item + "" + separator;
    }
    return res;
  }
  function  last(array) {
    var lenth = array == null ? 0 : array.length;
    return lenth ? array[array.length - 1] : undefined;
  }
  function lastIndexOf(array, value, fromIndex = array.length - 1) {
    for (let i = fromIndex; i >= 0; i--) {
      if (array[i] == value) {
        return i;
      }
    }
    return -1;
  }
  function  nth(array, n ) {
    if (n >= 0) {
      return array[n];
    } else {
      return array[array.length + n];
    }
  }
  function indexOf(array, value, fromIndex) {
     if(!fromIndex) fromIndex = 0
    for (let i = fromIndex; i < array.length; i++) {
      if (array[i] == value) {
        return i;
      }
    }
    return -1;
  }
  function  head(array) {
    var lenth = array == null ? 0 : array.length;
    return lenth ? array[0] : undefined;
  }
  function initial(array) {
    array.pop();
    return array;
  }
  function  reverse(array) {
    let len = array.length;
    for (let i = 0, j = len - 1; i < len; i++) {
      array.push(array[j]);

      j--;
    }
    array.splice(0, len);
    return array;
  }
  // function reverse(array) {
  //   let l = 0, r = array.length - 1;    // 左右指针遍历
  //   while (l < r) {
  //     [array[l], array[r]] = [array[r], array[l]]   // 左右指针交换值
  //     l++;
  //     r--;
  //   }
  //   return array
  // }

  function without (array, values) {
    let res = [];
    let flag = true;
    for (let i = 0; i < array.length; i++) {
      for (let key in arguments) {
        if (key === "0") {
          continue;
        }
        if (array[i] == arguments[key]) {
          flag = false;
          continue;
        }
      }
      if (flag == true) {
        res.push(array[i]);
      }
      flag = true;
    }
    return res;
  }
  function intersection(arrays) {
    let res = [];
    let flag = false;
    for (let i = 0; i < arguments["0"].length; i++) {
      for (let key in arguments) {
        if (key == 0) {
          continue;
        }
        for (let item of arguments[key]) {
          if (arguments["0"][i] == item) {
            flag = true;
            break;
          }
        }
        if (flag == false) {
          break;
        }
      }
      if (flag == true) {
        res.push(arguments["0"][i]);
        flag = false;
      }
    }
    return res;
  }
  function  fromPairs(pairs) {
    let obj = {};
    for (let i = 0; i < pairs.length; i++) {
      if (pairs[i].length != 0) {
        obj[pairs[i][0]] = pairs[i][1];
      }
    }
    return obj;
  }
  function pull(array, values) {
    for (let i = array.length - 1; i >= 0; i--) {
      for (let key in arguments) {
        if (key === "0") {
          continue;
        }
        if (array[i] == arguments[key]) {
          array.splice(i, 1);
        }
      }
    }
    return array;
  }
  function  pullAll(array, values) {
    let res = [],
      arr = [];
    for (let key in arguments) {
      if (key === "0") {
        continue;
      }
      arr.push(...arguments[key]);
    }
    for (let i = array.length - 1; i >= 0; i--) {
      if (arr.includes(array[i])) {
        array.splice(i, 1);
      }
    }
    return array;
  }
  function max(array) {
    if (!array) {
      return undefined;
    }
    let max = array[0];
    for (let item of array) {
      if (max < item) {
        max = item;
      }
    }
    return max;
  }
  function sum(array) {
    let sum = 0;
    for (let item of array) {
      sum += item;
    }
    return sum;
  }
  function repeat(string = "", n = 1) {
    res = "";
    for (i = 0; i < n; i++) {
      res += string;
    }
    return res;
  }
  function  uniq(array) {
    let res = [];
    for (let item of array) {
      if (res.includes(item)) {
        continue;
      } else {
        res.push(item);
      }
    }
    return res;
  }
  function  size(collection) {
    let con = 0;
    for (let key in collection) {
      con++;
    }
    return con;
  }
  function tail (array) {
    let res = [];
    for (let i = 1; i < array.length; i++) {
      res.push(array[i]);
    }
    return res;
  }
  function take(array, n = 1) {
    res = [];
    if (n > array.length) {
      n = array.length;
    }
    for (let i = 0; i < n; i++) {
      res.push(array[i]);
    }
    return res;
  }
  function takeRight(array, n = 1) {
    let res = [];
    if (n >= array.length) {
      return array;
    }
    if (n == 0) {
      return [];
    }
    for (let i = array.length - 1; i >= array.length - n; i--) {
      res.unshift(array[i]);
    }
    return res;
  }
  function range(start = 0, end, step) {
    if(!step) step = 1;
    if (start < 0) {
      if (!arguments["1"] || !arguments["2"]) {
        step = -1;
      }
    }
    if (!arguments["1"]) {
      end = start;
      start = 0;
    }
    if (end < start && !step) {
      return [];
    }
    let res = [];
    let con = 0;
    if (start > end) {
      for (i = start; i > end; i += step) {
        if (con == start - end) {
          break;
        }
        res.push(i);
      }
    } else {
      for (i = start; i < end; i += step) {
        if (con == end - start) {
          break;
        }
        res.push(i);
        con++;
      }
    }
    return res;
  }

  function  zip(arrays) {
    let res = [],
      len = 0;
    let arr = Array.from(arguments);
    for (let item of arr) {
      if (item.length > len) {
        len = item.length;
      }
    }
    for (let i = 0; i < len; i++) {
      let tmp = [];
      for (let item of arr) {
        tmp.push(item[i]);
      }
      res.push(tmp);
    }
    return res;
  }
  function sample(collection) {
    let arr = [];
    if (Array.isArray(collection)) {
      return collection[~~(Math.random() * collection.length)];
    } else if (typeof collection == "object") {
      for (let key in collection) {
        arr.push([key, collection[key]]);
      }
      return arr[~~(Math.random() * arr.length)][1];
    }
  }
  function isBoolean(value) {
    if(value == null){
      return false;
    }
   return typeof (value) == 'boolean' || typeof value == 'object'
  }

  function  union (arrays){
    let res = [];
    for(let item of arguments){
      for(let i = 0; i < item.length; i++){
        if(!res.includes(item[i])){
          res.push(item[i])
        }
      }
    }
    return res
  }

  function toArray (value){
    res = [];
    for(let key in value){
      res.push(value[key])
    }
    return res
  }

  function isNumber(value){
  return typeof value === 'number'
}

function parseInt(string,radix = 10){
  let n = 0;
    let sum = 0;
    if(!arguments['1']){
      return string * 1
    }
    let con = 0;
    if(!isNaN(string)){
      for(let i = string.length - 1; i >= 0; i--){
        n = string[i] * (radix ** con)
        sum += n
        con++
      }
    }else{
      function strToNum(str){
        if(Number.isNaN(Number(str))){
          return str.toLowerCase().charCodeAt() - 87;
        }else{
          return Number(str);
        }
      }
      let str = 0;
      for(let i = string.length - 1; i >= 0; i--){
        if(!isNaN(string[i])){
          str = string[i]
        }
        else(str = strToNum(string[i]))
        n = str * (radix ** con)
        sum += n
        con++
    }
    }
    return sum
    }

    function ceil (number,precision ){
      if(!precision)precision = 0
  let ride = 10 ** (-precision)
  let remain = number % ride
  return  remain ? number - remain + ride : number
}

function ceil(number,precision){
  if(!precision)precision = 0
  if(precision == 0){
     return ~~number == number ? ~~number : ~~number + 1
  }else if(precision < 0){
    return  (~~(number / 10 ** Math.abs(precision)) + 1 ) * 10 ** Math.abs(precision)
  }else{
    return  ~~(number * 10 ** precision + 1) / 10 ** precision
  }
}



// ceil: function (number,precision=0){
//   let index = (~~number).toString().length;
//   let con = number.toString().length - index - 1
//   let num = precision >0 ? number * 10 ** con : ~~number;
//   let sum = num;
//   let arr = [];
//   while(num){
//     let n= num % 10;
//     arr.unshift(n);
//     num = (num - n) / 10;
//   }
//   if(precision == 0){
//     if(number.toString().length > index){
//       return sum + 1
//     }
//       return sum
//   }
//   if(precision < 0){
//     return res = (~~(sum / 10 ** Math.abs(precision)) + 1 ) * 10 ** Math.abs(precision)
//   }else{
//     for(let i=0; i<arr.length; i ++){
//       if(i === (index + precision - 1) && arr[i + 1]){
//       arr[i]++
//       arr[i + 1] = 0
//       }
//    }
//   }
//   return Number(arr.join('')) / 10 ** con
// }
// ,
function map(collection,iteratee ) {
  let res = [];
  if(typeof iteratee == 'string'){
    for(let item of collection){
      if(iteratee.includes('.')){
        let obj = item, tmp;//取得数组里的每一个对象
        for (let str of iteratee) {
          if (str  !== '.') {
            tmp = obj[str];
            obj = tmp;
          }
        }
        res.push(tmp)
     }else{res.push((item[iteratee]))}
    }
  }else if(typeof iteratee == 'function'){
     for(let key in collection){
       res.push(iteratee(collection[key],Number(key),collection))
     }
  }
  return res
}



function dropRightWhile(array, predicate){
  let res = array
  if(typeof predicate !== 'function'){
    predicate =convertToFunction(predicate)
  }
  for(let i = array.length - 1; i >= 0; i--){
    let tmp = predicate(array[i],i,array)
    if(!tmp)return array
    array.pop()
  }
}

function dropWhile(array, predicate){
  let res = array
  if(typeof predicate !== 'function'){
    predicate =convertToFunction(predicate)
  }
  for(let i = array.length - 1; i >= 0; i--){
    if(!predicate(array[0],0,array)){return array}
    else{array.shift()}

  }
  return array
}

function pad(string = '',length = 0,chars = ' ') {
  if(string.length >= length){return string}
  while(string.length < length){
     string = string + chars
     if(string.length >= length)break
     string = chars + string
  }
 return string.length > length ? string = string.substring(0, length ) : string
}
  return {
    dropRightWhile: dropRightWhile,
    dropWhile: dropWhile,
    pad: pad,
    chunk: chunk,
    compact: compact,
    drop: drop,
    dropRight: dropRight,
    fill: fill,
    flatten: flatten,
    fromPairs: fromPairs,
    head: head,
    indexOf: indexOf,
    initial: initial,
    join: join,
    last: last,
    lastIndexOf: lastIndexOf,
    reverse: reverse,
    uniq: uniq,
    without: without,
    zip: zip,
    size: size,
    isBoolean: isBoolean,
    ceil: ceil,
    repeat: repeat,
    range: range,
    difference: difference,
    flattenDeep: flattenDeep,
    flattenDepth: flattenDepth,
    concat: concat,
    toArray: toArray,
    nth: nth,
    intersection: intersection,
    pull: pull,
    pullAll: pullAll,
    tail: tail,
    take: take,
    takeRight: takeRight,

  }
}()
