/* Programmers
 * 탐욕법(Greedy) - 조이스틱
 * created on 2021.09.16
 * created by jionchu */

class Solution {
    fun solution(name: String): Int {
        var answer = 0
        
        // A가 아닌 알파벳만 저장
        val alphabets = mutableListOf<Pair<Char,Int>>()
        name.forEachIndexed { index, alpha ->
            if (alpha != 'A') alphabets.add(Pair(alpha, index))
        }
        
        var joystick = 0 // 조이스틱 위치
        // 모든 알파벳을 변경할 때까지
        while (alphabets.size > 0) {
            
            val right = alphabets[0]
            val left = alphabets[alphabets.size-1]
            var rightDistance = 0
            var leftDistance = 0
            
            // 조이스틱을 왼쪽으로 움직일 때와 오른쪽으로 움직일 때 거리 구하기
            // 현재 조이스틱의 위치가 바꿔야 하는 알파벳들 중 가장 왼쪽일 때
            if (right.second >= joystick) {
                rightDistance = right.second - joystick
                leftDistance = joystick + name.length - left.second
            }
            // 현재 조이스틱의 위치가 바꿔야 하는 알파벳들 중 가장 오른쪽일 때
            else {
                rightDistance = name.length - joystick + right.second
                leftDistance = joystick - left.second
            }
            
            // 오른쪽 알파벳이 더 가까운 경우 조이스틱 오른쪽으로 이동하기
            if (rightDistance <= leftDistance) {
                answer += rightDistance
                answer += changeAlphabet(right.first)
                
                // 조이스틱 위치 업데이트
                joystick = right.second
                // 리스트에서 삭제
                alphabets.remove(right)
            }
            // 왼쪽 알파벳이 더 가까운 경우 조이스틱 왼쪽으로 이동하기
            else {
                answer += leftDistance
                answer += changeAlphabet(left.first)
                
                // 조이스틱 위치 업데이트
                joystick = left.second
                // 리스트에서 삭제
                alphabets.remove(left)
            }
        }
        
        return answer
    }
    
    fun changeAlphabet(char: Char): Int {
        return Math.min(char-'A', 'Z'-char+1)
    }
}