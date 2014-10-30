/* iOS
 * There may be times when we need a quick way to reference whether iOS is in play or not.
 * While a primative means, will be helpful for that.
 */
Modernizr.addTest('ios', function () {
  return !!/(iPad|iPhone|iPod)/g.test( navigator.userAgent );
});

Modernizr.addTest('android', function () {
  return !!navigator.userAgent.match(/Android/i);
});

navigator.userAgent.match(/Android/i)