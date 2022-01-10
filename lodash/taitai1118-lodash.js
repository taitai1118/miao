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
}()
