const { spawn, Thread, Worker } = require('threads');

async function test(depth = 5) {
  console.log('running test', depth);
  if (depth <= 0) return;
  let t = await spawn(new Worker('./sharp'));
  try {
    await t.test();
  } finally {
    await Thread.terminate(t);
    return test(depth - 1);
  }
}

test(3).then(() => {
  console.log('All good');
});
