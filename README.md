## 传统写法
```javascript
step1(function(value1) {
    step2(value1, function(value2) {
        step3(value2, function(value3) {
            step4(value3, function(value4) {
                //
            })
        });
    });
});
```
## Promise实现
```javascript
(new Promise(step1))
    .then(step2)
    .then(step3)
    .then(step4)
```

#### Promise对象直邮三种

* 异步操作“未完成” （pending）
* 异步操作“已完成”（resolved， 又称fulfilled）
* 异步操作“失败” （rejected）

#### 这三种状态的变化途径只有两步

* 异步操作从“未完成”到“已完成”
* 异步操作从“未完成”到“失败”

#### 这种变化只能发生一次，一旦当前状态变为“已完成”或“失败”，就不会有新的状态了。因此， Promise对象的最终结果只有两种。

* 异步操作成功，promise对象返回一个值，状态变为‘resolved’。
* 异步操作失败，promise对象抛出一个错误，状态变为“rejected”。

#### Promise对象使用then方法添加回调函数。then 可以接受两个回调函数，第一个是异步操作成功时（变为“resolved”状态）时的回调函数，第二个是异步操作失败（变为“rejected”）时的回调函数（可以省略）。一旦回调函数改变，就变为相应的回调函数。