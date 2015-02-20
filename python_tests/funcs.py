class funcs(): 

	def tf(ocurrences,totalWordsInDoc): 
		return ocurrences/totalWordsInDoc 
	def idf(totalDocs,docsContainingWord): 
		return math.log(totalDocs/docsContainingWord) 

