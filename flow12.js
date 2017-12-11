// 混合模式（局部并行，整体串行）
var LongTimeOperation = function(taskID) {
  var id = taskID;

  this.go = function(callback) {
    console.log('this is longTimeOperation #' + id);

    var delay = parseInt((Math.random() * 10000000) % 5000);

    setTimeout(function() {
      console.log('the task #' + id + ' cost ' + delay + ' ms.');
      callback();
    }, delay);
  }
}

var max = 3;
var total = 11;
var count = 0;
var pool = max;

function f2() {
  count++;
  pool--;
  console.log('this is f2, i am callback.\n');

  if(count < total) {
    var task = new LongTimeOperation(count);
    task.go(f2);
    pool++;
  } else {
    if(pool == 0 ) {
      end();
      console.timeEnd("time control");
    }
  }
}

function end() {
  console.log("the end task");
}

console.time("time control");
for (var i = 0; i < 3; i++, count++) {
  var task = new LongTimeOperation(count);
  task.go(f2);
}

// 输出：
// this is longTimeOperation #0
// this is longTimeOperation #1
// this is longTimeOperation #2
// the task #2 cost 547 ms.
// this is f2, i am callback.

// this is longTimeOperation #4
// the task #4 cost 1248 ms.
// this is f2, i am callback.

// this is longTimeOperation #5
// the task #5 cost 185 ms.
// this is f2, i am callback.

// this is longTimeOperation #6
// the task #1 cost 2653 ms.
// this is f2, i am callback.

// this is longTimeOperation #7
// the task #0 cost 3749 ms.
// this is f2, i am callback.

// this is longTimeOperation #8
// the task #8 cost 1460 ms.
// this is f2, i am callback.

// this is longTimeOperation #9
// the task #6 cost 4192 ms.
// this is f2, i am callback.

// this is longTimeOperation #10
// the task #9 cost 1125 ms.
// this is f2, i am callback.

// the task #7 cost 4381 ms.
// this is f2, i am callback.

// the task #10 cost 3028 ms.
// this is f2, i am callback.

// the end task
// time control: 9217.421ms
