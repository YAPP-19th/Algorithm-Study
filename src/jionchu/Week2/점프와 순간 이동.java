/* Programmers
 * Summer/Winter Coding(~2018) - 점프와 순간 이동
 * created on 2021.09.30
 * created by jionchu */

public class Solution {
    public int solution(int n) {
        int answer = 1;

        while (n > 1) {
            // 순간이동으로 도착할 수 있는 위치인 경우
            if (n % 2 == 0) n /= 2;
            // 순간이동으로 도착할 수 없는 경우 건전지 사용
            else {
                n--;
                answer++;
            }
        }

        return answer;
    }
}