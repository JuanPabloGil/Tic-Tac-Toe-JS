
const gameBoard = (function(doc) {

  const render = (arr) => {
    const squares = [...doc.querySelectorAll('.square')];
    squares.forEach((square, index) => {
      square.value = arr[index];
    });
  }

  return {
    render
  }

})(document);
