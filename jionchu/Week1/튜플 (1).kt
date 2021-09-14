class Solution {
    fun solution(s: String): IntArray {
        // 모든 숫자들의 배열
        val numbers = s.split('{','}',',')
        val counts = mutableMapOf<String,Int>()
        
        // 숫자가 총 몇 번 등장하는지 세기
        for (num in numbers) {
            if (num != "") {
                counts.put(num, counts.getOrElse(num, {0})+1)
            }
        }
        
        // 등장한 횟수에 따라 해당하는 위치에 저장
        // 많이 등장한 숫자일수록 앞에 저장한다.
        val answer = IntArray(counts.size)
        counts.forEach() {
            answer[counts.size - it.value] = it.key.toInt()
        }
        
        return answer
    }
}