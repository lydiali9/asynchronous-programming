// 串行流程控制0
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

  if(count < 5) {
    var task = new LongTimeOperation(count);
    task.go(f2);
  } else {
    end();
    console.timeEnd("flow control");
  }
}

function end() {
  console.log("the end task");
}

console.time("flow control");
var taskFirst = new LongTimeOperation(0);
taskFirst.go(f2);


// 输出：
// this is longTimeOperation #0
// the task #0 cost 3906 ms.
// this is f2, i am callback.

// this is longTimeOperation #1
// the task #1 cost 831 ms.
// this is f2, i am callback.

// this is longTimeOperation #2
// the task #2 cost 1629 ms.
// this is f2, i am callback.

// this is longTimeOperation #3
// the task #3 cost 4795 ms.
// this is f2, i am callback.

// this is longTimeOperation #4
// the task #4 cost 2571 ms.
// this is f2, i am callback.

// the end task
// flow control: 13746.913ms
