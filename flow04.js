// 单线程异步执行(并发流程控制)

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
    console.timeEnd("flow control");
  }
}

console.time("flow control");
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
// the task #0 cost 491 ms.
// this is f2, i am callback.

// the task #1 cost 2013 ms.
// this is f2, i am callback.

// the task #3 cost 2593 ms.
// this is f2, i am callback.

// the task #2 cost 2823 ms.
// this is f2, i am callback.

// the task #4 cost 4569 ms.
// this is f2, i am callback.

// this is end task
// flow control: 4572.761ms