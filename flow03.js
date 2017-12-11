// 单线程异步执行(并发流程控制3)
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

var count = 0;

function f2() {
  count++;
  console.log('this is f2, i am callback.\n');
  if(count == 5) {
    end();
  }
}

for(var i=0; i<5; i++) {
  var task = new LongTimeOperation(i);
  task.go(f2);
}

function end() {
  console.log("this is end task");
}

// 输出：
// this is longTimeOperation #0
// this is longTimeOperation #1
// this is longTimeOperation #2
// this is longTimeOperation #3
// this is longTimeOperation #4
// the task #4 cost 183 ms.
// this is f2, i am callback.

// the task #0 cost 551 ms.
// this is f2, i am callback.

// the task #2 cost 781 ms.
// this is f2, i am callback.

// the task #1 cost 3114 ms.
// this is f2, i am callback.

// the task #3 cost 3639 ms.
// this is f2, i am callback.

// this is end task