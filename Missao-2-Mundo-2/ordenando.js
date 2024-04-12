const swap = (vetor, posicao1, posicao2) => {
  [vetor[posicao1], vetor[posicao2]] = [vetor[posicao2], vetor[posicao1]];
};

const shuffle = (vetor, trocas) => {
  for (let i = 0; i < trocas; i++) {
    const posicao1 = Math.floor(Math.random() * vetor.length);
    const posicao2 = Math.floor(Math.random() * vetor.length);
    swap(vetor, posicao1, posicao2);
  }
};

const bubble_sort = (vetor) => {
  const n = vetor.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (vetor[j] > vetor[j + 1]) {
        swap(vetor, j, j + 1);
      }
    }
  }
};

const selection_sort = (vetor) => {
  const n = vetor.length;
  for (let i = 0; i < n - 1; i++) {
    let min_idx = i;
    for (let j = i + 1; j < n; j++) {
      if (vetor[j] < vetor[min_idx]) {
        min_idx = j;
      }
    }
    swap(vetor, i, min_idx);
  }
};

const quick_sort = (vetor, inicio = 0, fim = vetor.length - 1) => {
  if (inicio < fim) {
    const indicePivot = particionamento(vetor, inicio, fim);
    quick_sort(vetor, inicio, indicePivot - 1);
    quick_sort(vetor, indicePivot + 1, fim);
  }
};

const particionamento = (vetor, inicio, fim) => {
  const pivot = vetor[fim];
  let i = inicio - 1;
  for (let j = inicio; j < fim; j++) {
    if (vetor[j] < pivot) {
      i++;
      swap(vetor, i, j);
    }
  }
  swap(vetor, i + 1, fim);
  return i + 1;
};

function add() {
  const valor = document.getElementById("valor").value;
  const node = document.createElement("li");
  node.textContent = valor;
  document.getElementById("valores").appendChild(node);
}

function ordenar() {
  console.log("Chamada para ordenar()");
  const lista = document.getElementById("valores");
  const valores = Array.from(lista.children).map((item) =>
    parseInt(item.textContent)
  );
  console.log("Valores antes da ordenação:", valores);
  const algoritmo = document.getElementById("algoritmo").value;
  console.log("Algoritmo selecionado:", algoritmo);
  switch (algoritmo) {
    case "bubble_sort":
      bubble_sort(valores);
      break;
    case "selection_sort":
      selection_sort(valores);
      break;
    case "quick_sort":
      quick_sort(valores);
      break;
    default:
      break;
  }
  console.log("Valores depois da ordenação:", valores);
  lista.innerHTML = "";
  valores.forEach((item) => {
    const node = document.createElement("li");
    node.textContent = item;
    lista.appendChild(node);
  });
}

function misturar() {
  console.log("Chamada para misturar()");
  const lista = document.getElementById("valores");
  const valores = Array.from(lista.children).map((item) =>
    parseInt(item.textContent)
  );
  console.log("Valores antes da mistura:", valores);
  shuffle(valores, valores.length * 2);
  console.log("Valores depois da mistura:", valores);
  lista.innerHTML = "";
  valores.forEach((item) => {
    const node = document.createElement("li");
    node.textContent = item;
    lista.appendChild(node);
  });
}
