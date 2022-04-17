function runProgram(input) {
    input = input.trim().split('\n');
    var n = +input[0];
    var line = 1;
    var arr = [];
    for (var i = 0; i < n; i++) {
      arr.push(input[line].trim());
      line++;
    }
    var max = -Infinity;
    var globalMax = -Infinity;
    var count = 0;
    var globalCount = 0;
  
    for (var j = 0; j < n; j++) { 
      count = 0; 
      for (var k = 0; k <arr[0].length; k++) { 
          // console.log(arr[j][k]);
          if (arr[j][k] == 'C') { 
              globalCount++;
              count++;
          } else {
              globalMax = Max(globalCount, globalMax); 
              max = Max(count, max); 
              count=0;
              globalCount=0;
          }
      }
       max = Max(count, max);
    }
    globalMax = Max(globalMax, globalCount);
    console.log(max);
    console.log(globalMax);
  }
  
  function Max(count, max) { //
      if(count>max){ //
          return count;
      }else{
          return max; //
      }
  }
  if (process.env.USER === '') {
    runProgram(``);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding('ascii');
    let read = '';
    process.stdin.on('data', function (input) {
      read += input;
    });
    process.stdin.on('end', function () {
      read = read.replace(/\n$/, '');
      read = read.replace(/\n$/, '');
      runProgram(read);
    });
    process.on('SIGINT', function () {
      read = read.replace(/\n$/, '');
      runProgram(read);
      process.exit(0);
    });
  }
  