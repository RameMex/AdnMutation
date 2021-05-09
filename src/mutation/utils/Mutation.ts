class Mutation {
    reverseMatrix(m){
      return m.map((string) => {
        return this.reverseString(string);
      });
    }
    reverseString(string){
      return string.split("").reverse().join("");
    }
    getLeftDiagonal(m){
      let reverse = this.reverseMatrix(m);
      return this.getRightDiagonal(reverse);
    }
     getRightDiagonal (m) {
      var s, x, y, d,
      o = [];
      for (s = 0; s < m.length; s++) {
        d = [];
        for(y = s, x = 0; y >= 0; y--, x++)
        d.push(m[y][x]);
        o.push(d);
      }
      for (s = 1; s < m[0].length; s++) {
        d = [];
        for(y = m.length - 1, x = s; x < m[0].length; y--, x++)
        d.push(m[y][x]);
        o.push(d);
      }
      return o.map((array) => {
          return array.join('');
        });
      }
      findMutantBlocks = function (matrix) {
  
        let regex = /([ATGC])\1{3,4}/;
  
        let straight = matrix.filter((string) => {
          return regex.test(string);
        });
  
        let right = this.getRightDiagonal(matrix).filter((string) => {
          return regex.test(string);
        });
  
        let left = this.getLeftDiagonal(matrix).filter((string) => {
          return regex.test(string);
        });
  
        return straight.concat(right).concat(left);
      };
      isMutant = function (matrix) {
        let blocks = this.findMutantBlocks(matrix);
        return blocks.length > 1;
      };
  
      showMutantBlocks = function (matrix) {
        let blocks = this.findMutantBlocks(matrix);
        if(blocks.length > 1)
          return blocks;
        else
          return [];
      };
  }
  export default Mutation