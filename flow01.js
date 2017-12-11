// 单线程异步执行(并发流程控制1)
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

function f2() {
  console.log('this is f2, i am callback.\n');
}

for(var i=0; i<5; i++) {
  var task = new LongTimeOperation(i);
  task.go(f2);
  end();
}

function end() {
  console.log("this is end task");
}

// 输出：
// this is longTimeOperation #0
// this is end task
// this is longTimeOperation #1
// this is end task
// this is longTimeOperation #2
// this is end task
// this is longTimeOperation #3
// this is end task
// this is longTimeOperation #4
// this is end task
// the task #4 cost 1053 ms.
// this is f2, i am callback.

// the task #1 cost 1912 ms.
// this is f2, i am callback.

// the task #3 cost 2437 ms.
// this is f2, i am callback.

// the task #0 cost 3195 ms.
// this is f2, i am callback.

// the task #2 cost 4446 ms.
// this is f2, i am callback.