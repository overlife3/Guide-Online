function balancedParens(n) {
  if (n === 0) return []
	let initialStr = '()'.repeat(n) //
	const res = [initialStr]
	let nesting = 1
	let nestingCount = 1
	let i = 1
	while (nesting  <= n) {
		let str = initialStr.slice(0, (n - nestingCount) * 2)
		str = str.slice(0, i - 1) + depthStaples(i).repeat(nestingCount) + str.slice(i - 1)
		// res.push(str)
		i += 1
		if (i === n) {
			nestingCount += 1
		}
		if (nestingCount >= n) {
			nestingCount = 1
			nesting += 1
		}
		console.log(str)
	}
}

function depthStaples(n) {
	return '('.repeat(n) + ')'.repeat(n)
}


balancedParens(2)