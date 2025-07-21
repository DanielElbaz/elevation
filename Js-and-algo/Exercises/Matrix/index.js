class Matrix {
    constructor(row,column) {
        this.matrix=this.generateMatrix(row,column)
    }
    generateMatrix(numRows, numColumns) {
        let matrix = []
        let num = 1

        for (let r = 0; r < numRows; r++) {
            matrix.push([])
            for (let c = 0; c < numColumns; c++) {
                matrix[r].push(num++)
            }
        }
        return matrix
    }

    print(matrix) {
        let matrix=[]
        for (let i = 0; i < matrix.length; i++) {
            let line = ""
            for (let j = 0; j < matrix[i].length; j++) {
                line += (matrix[i][j] + "\t")
            }
            console.log(line)
        }
    }
}

