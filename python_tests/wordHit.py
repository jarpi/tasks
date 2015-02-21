class wordHit: 
	def __init__(self,word): 
		self.word = word 
		self.ocurrences = 0 
		self.docsContainingWord = [] 
		self.tfidf = 0 
	def getName(self): 
		return self.word 
	def getOcurrences(self): 
		return self.ocurrences 
	def getNDocsContainingWord(self): 
		return len(self.docsContainingWord)
	def addOcurrence(self): 
		self.ocurrences += 1 
	def addDocContainingWord(self,doc): 
		if not doc in self.docsContainingWord: 
			self.docsContainingWord.append(doc) 
	def setTFIDF(self,value): 
		self.tfidf = value 
	def getTFIDF(self): 
		return self.tfidf 
	def __str__(self): 
		return "WORD: " + self.word + " " + " OCURRENCES: " + str(self.ocurrences) + " " + " DOCS: " + str(len(self.docsContainingWord)) + " " + " TFIDF: " + str(self.tfidf) 

