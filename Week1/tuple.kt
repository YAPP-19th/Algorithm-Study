class Solution {
    fun solution(s: String): IntArray {
        return s.split("{", "}", ",")
            .asSequence()
            .filter { list -> list.isNotBlank() }
            .groupBy { it.toInt() }
            .map { it.key to it.value.size }
            .sortedByDescending { it.second }
            .map { it.first }
            .toList()
            .toIntArray()
    }
}
