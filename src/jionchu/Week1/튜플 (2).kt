/* Programmers
 * 2019 카카오 개발자 겨울 인턴십 - 튜플
 * created on 2021.09.14
 * created by jionchu */ 

class Solution {
    fun solution(s: String): IntArray {
        // 집합별로 분리
        var setList = s.substring(2,s.length-2).split("},{")
        val answer = IntArray(setList.size)
        
        // 집합 길이로 정렬
        setList = setList.sortedBy() { it.length }
        
        // 원소가 한 개인 집합부터 확인
        for (i in setList.indices) {
            val numbers = setList[i]
            
            // 중복되는 원소가 없으므로 정답 배열에 존재하지 않는 숫자인 경우 저장
            numbers.split(",").forEach() {
                if (!answer.contains(it.toInt())) {
                    answer[i] = it.toInt()
                }
            }
        }
        
        return answer
    }
}