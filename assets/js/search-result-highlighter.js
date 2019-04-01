// 2019 Pandorabots

function matchTextNodes(string) {
  if(!string) return []
  let pageContent = document.querySelector('.pb-docs__content')
  if(!pageContent) return []

  let regex = new RegExp(`(${string})`, 'ig')

  const handleMatch = function(textNode) {
    return wrapMatches(textNode, regex, string.length)
  }

  return parseChildNodes(pageContent, handleMatch)
}

function parseChildNodes(node, handleMatches) {
  return Array.from(node.childNodes).forEach(child => {
    if(child.nodeType == 1 && child.nodeName == 'CODE') {
      return null
    } else if(child.nodeType == 3) {
      return handleMatches(child)
    } else {
      return parseChildNodes(child, handleMatches)
    }
  })
}

function wrapMatches(textNode, regex, matchLength) {
  const text = textNode.textContent
  if(!text.trim()) return
  const matches = getMatchIndices(text, regex, matchLength, 0)

  const resultSpanOpen = '<span id="search-result">'
  const resultSpanClose = '</span>'

  let start = 0;
  let replacementHtml = ''

  matches.forEach((match, index) => {
    let resultLocation = (match.index)
    if(resultLocation < 0) return console.log('index < 0')

    let beforeText = text.substr(start, (resultLocation - start))

    start = (resultLocation + matchLength)

    replacementHtml += beforeText + resultSpanOpen + match.match + resultSpanClose
  })

  replacementHtml += text.substr(start, text.length)

  const replacementNode = document.createElement('span')
  replacementNode.innerHTML = replacementHtml

  textNode.parentNode.insertBefore(replacementNode, textNode)
  textNode.parentNode.removeChild(textNode)
}

function getMatchIndices(string, regex, queryLength, startpos=0) {
  const substring = string.substring(startpos)

  let matchMap = []

  while((matches = regex.exec(substring)) !== null) {
    const prevMatchIndex = parseInt(regex.lastIndex)
    const matchStart = (prevMatchIndex - queryLength)

    matchMap.push({match: matches[0], index: matchStart})
  }

  return matchMap
}

function extractSearchString() {
  let searchString = ''
  if(window.location.search && window.location.search.includes('?search=')) {
    searchString = (window.location.search.split('&')[0] || '').split(/[\?\=]/)
    searchString = searchString[searchString.length - 1]
  }

  return searchString
}

function scrollToFirstResult() {
  setTimeout(function(){
    var pageContent = document.querySelector('.pb-docs__content')
    var firstResult = document.querySelector('.pb-docs__content #search-result')
    pageContent.scrollTop = firstResult.offsetTop - 30
  }, 30)
}

function highlightSearchResult() {
  const searchQuery = extractSearchString()

  if(searchQuery) {
    matchTextNodes(searchQuery)
    scrollToFirstResult()
  }
}
