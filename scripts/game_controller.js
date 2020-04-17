
const gameController = (function(doc) {

  const render = (arr) => {
    const squares = [...doc.querySelectorAll('.square')];
    squares.forEach((square, index) => {
      square.textContent = arr[index];
    });
  }

  return {
    render
  }

})(document);
