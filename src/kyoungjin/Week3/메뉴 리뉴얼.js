function solution(orders, course) {
  const answer = [];
  const parsedOrders = orders.map((order) => {
    return order.split("");
  });

  course.map((size) => {
    const orderMap = {};
    let max = 0;
    parsedOrders.forEach((order) => {
      combination(order, size).forEach((sizedOrder) => {
        const menu = sizedOrder.sort().join("");
        orderMap[menu]
          ? ((orderMap[menu] += 1),
            (max = orderMap[menu] > max ? orderMap[menu] : max))
          : (orderMap[menu] = 1);
      });
    });

    Object.entries(orderMap).map(([key, value]) => {
      if (value === max) {
        answer.push(key);
      }
    });
  });

  return answer.sort();
}

const combination = (array, selectNum) => {
  const result = [];

  if (selectNum === 1) return array.map((item) => [item]);

  array.forEach((item, index, array) => {
    const fixed = item;
    const restArr = array.slice(index + 1);
    const restCombination = combination(restArr, selectNum - 1);
    const fixedCombination = restCombination.map((item) => [fixed, ...item]);
    result.push(...fixedCombination);
  });

  return result;
};
