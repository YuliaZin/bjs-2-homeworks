function cachingDecoratorNew(func) {
  let cache = [];

function wrapper(...args) {
    const hash = args.join(","); // получаем правильный хэш
    let idx = cache.findIndex(item => item.hash === hash); // ищем элемент, хэш которого равен нашему хэшу
    if (idx !== -1 ) { // если элемент не найден
        console.log("Из кэша: " + cache[idx].result); // индекс нам известен, по индексу в массиве лежит объект, как получить нужное значение?
        return "Из кэша: " + cache[idx].result;
    }

    let result = func(...args); // в кэше результата нет - придётся считать
    cache.push({
      hash: hash,
      result: result
    }) ; // добавляем элемент с правильной структурой
    if (cache.length > 5) { 
      cache.shift(); // если слишком много элементов в кэше надо удалить самый старый (первый) 
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;  
}
return wrapper;
}


function debounceDecoratorNew(func, ms) {
  let timer;
  return function(...rest) {
      if (!timer) {
          func(...rest);
      }

      clearTimeout(timer);

      timer = setTimeout(() => {
          func(...rest);
      }, ms)
  }
}

function debounceDecorator2(func, ms) {
  let timer;
  wrapper.count = 0;

  function wrapper(...rest) {
      if (!timer) {
          func(...rest);
          wrapper.count++;
      }

      clearTimeout(timer);

      timer = setTimeout(() => {
          func(...rest);
          wrapper.count++;
      }, ms)
  }
  return wrapper
}
