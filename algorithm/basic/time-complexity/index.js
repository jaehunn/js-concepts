// 1. example
{
  // O(items.length^2)
  function majority(items) {
    let major = -1;
    let majorCount = 0;
    for (let i = 0; i < items.length; i += 1) {
      let count = 0;

      for (let j = 0; j < items.length; j += 1) {
        if (items[j] === items[i]) count += 1;
      }

      if (count > majorCount) {
        majorCount = count;
        major = items[i];
      }
    }

    return major;
  }

  // O(items.length + 100)
  function betterMajority(items) {
    let counts = [];
    for (let i = 0; i < items.length; i += 1) {
      if (!counts[items[i]]) counts[items[i]] = 1;
      else counts[items[i]] += 1; // index == items[i]
    }

    // if items element: [0, ...100]
    let major = 0;
    for (let i = 1; i <= 100; i += 1) {
      if (counts[i] > counts[major]) major = i;
    }

    return major;
  }
}

// 2. linear time (N)
{
  // O((items.length + M + 1) * (items.length))
  function movingAverage(items, M) {
    let results = [];
    for (let i = M - 1; i < items.length; i += 1) {
      let sum = 0;

      for (j = 0; j < M; j += 1) {
        sum += items[i - j]; // [0, ...M-1]
      }

      results.push(sum / M);
    }

    return results;
  }

  // O(items.length)
  function betterMovingAverage(items, M) {
    let results = [];

    let sum = 0;
    for (let i = 0; i < M - 1; i += 1) {
      sum += items[i]; // [0, ...M-2]
    }

    for (let i = M - 1; i < items.length; i += 1) {
      sum += items[i]; // M-1
      results.push(sum / M);
      sum -= items[i - (M - 1)]; // front
    }

    return results;
  }
}

// 3. sublinear time (logN)
{
}

// 4. exponential time (n^2)
{
  // O(O(canEveryBodyEat) * 2^M)
  const INF = 987654321;
  const M = 10; // menus length limit

  function canEverybodyEat(menus) {} // return true or false

  function selectMenu(menus, foods) {
    if (foods === M) {
      if (canEverybodyEat(menus)) return menus.length();

      return INF; // failure
    }

    let result = selectMenu(menus, foods + 1); // didn't cook

    menus.push(); // add
    result = Math.min(result, selectMenu(menus, foods + 1)); // cook

    menus.pop(); // reset

    return result;
  }

  // *WIP
  // O(2^num)
  function factor(num) {
    if (num === 1) return [1, 1];

    let result = [];
    for (let div = 2; num > 1; div += 1) {
      while (num % div === 0) {
        num /= div;

        result.push(div);
      }
    }

    return result;
  }
}
