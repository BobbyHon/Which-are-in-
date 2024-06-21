function inArray(array1,array2){
    let r = []
    array2 = array2.join(' ')
    for (let i = 0; i < array1.length; i++){
      if (array2.includes(array1[i])) r.push(array1[i])
    }
    return r.sort((a, b) => a.localeCompare(b))
  }