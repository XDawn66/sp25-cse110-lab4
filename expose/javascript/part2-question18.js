let time = function () {
  setInterval(function () {
    let d = new Date();
    console.log(d.toLocaleTimeString());
  }, 1000);
};
time();
