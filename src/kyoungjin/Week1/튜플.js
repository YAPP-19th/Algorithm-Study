function solution(s) {
  let answer = [];
  /*  
    주어진 s 에서 숫자만 뽑아서 배열로 변환
    배열은 길이 순으로 오름차순 정렬
    */
  s = s
    .substring(2, s.length - 2)
    .split("},{")
    .map((array) => {
      return array.split(",").map((element) => {
        return parseInt(element);
      });
    })
    .sort(function (a, b) {
      return a.length - b.length;
    })
    /*  정렬된 배열을 길이가 작은 것부터 조회하면서 
      배열의 값이 answer에 값이 있는지 확인 */
    .forEach((array) => {
      array.forEach((num) => {
        if (!answer.includes(num)) {
          answer.push(num);
        }
      });
    });

  return answer;
}
