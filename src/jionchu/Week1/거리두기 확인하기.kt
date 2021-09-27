/* Programmers
 * 2021 카카오 채용연계형 인턴십 - 거리두기 확인하기
 * created on 2021.09.15
 * created by jionchu */

class Solution {
    fun solution(places: Array<Array<String>>): IntArray {
        var answer: IntArray = IntArray(5)
        
        places.forEachIndexed { index, it ->
            for (i in 0 until 5) {
                for (j in 0 until 5) {
                    if (it[i][j] == 'P') {
                        // 맨해튼 거리 1인 경우
                        // 오른쪽
                        if (j+1 < 5 && it[i][j+1] == 'P') return@forEachIndexed
                        // 아래
                        if (i+1 < 5 && it[i+1][j] == 'P') return@forEachIndexed

                        // 맨해튼 거리 2인 경우
                        // 오른쪽
                        if (j+2 < 5 && it[i][j+2] == 'P' && it[i][j+1] != 'X') return@forEachIndexed
                        // 아래
                        if (i+2 < 5 && it[i+2][j] == 'P' && it[i+1][j] != 'X') return@forEachIndexed
                        // 오른쪽+아래
                        if (i+1 < 5 && j+1 < 5 && it[i+1][j+1] == 'P' && (it[i+1][j] != 'X' || it[i][j+1] != 'X')) return@forEachIndexed
                        // 왼쪽+아래
                        if (i+1 < 5 && j > 0 && it[i+1][j-1] == 'P' && (it[i+1][j] != 'X' || it[i][j-1] != 'X')) return@forEachIndexed
                    }
                }
            }

            // 모든 사람이 거리두기를 지킨 경우
            answer[index] = 1
        }
        
        return answer
    }
}