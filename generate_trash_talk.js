const task = {
  developer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
  designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
  founder: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
}

const phrase = ['很簡單', '很容易', '很快', '很正常']
//random index
function sample(array) {
  let randomIndex = Math.floor(Math.random() * array.length)
  return array[randomIndex]
}

function generateResault(options) {
  const profession = {
    developer: '工程師',
    designer: '設計師',
    founder: '創業家'
  }
  let taskResult = ''
  let phraseResult = ''
  let target = Object.keys(options)
 
  console.log(options.length)
  if (!target[0]) { 
    return '請記得勾選選項喔！'
  }

  if (target.length >= 2) {
    return '一次請選一個就好，感恩。'
  }

  if (options.developer === 'on') {
    taskResult = sample(task.developer)
  }

  if (options.designer === 'on') {
    taskResult = sample(task.designer)
  }

  if (options.founder === 'on') {
    taskResult = sample(task.founder)
  }

  phraseResult = sample(phrase)
  return '身為一個' + profession[target[0]]+ taskResult + phraseResult
}

module.exports = generateResault