var taitai1118 = function () {
  function chunk(array, size = 1) {
    let len = array.length;
    let res = [],s = [];
    let i = 1
    if(len == size){
      return [array]
    }
    for(; i <= len; i++) {
      s.push(array[i - 1]);
      if(i % size == 0){
      res.push(s)
      s = [];
      }
    }
    while(i <= len){
      i++;
      s.push(array[i]);
    }
      res.push(s);
      return res
  }

  function compact(array){
    let res = [];
    let i = 0
    while(i < array.length){

      if(array[i] == false || array[i] == null || array[i] == 0 || array[i] == "" || array[i] == null || array[i] == undefined || array[i] == null || array[i] == NaN ){
        i++
        continue;
      }
      res.push(array[i])
      i++
    }
    return res
  }

  
}()
