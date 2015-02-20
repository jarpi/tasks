class wordHit(object): 
	def __init__(self,word): 
		self.word = word 
		self.ocurrences = 0 
		self.docsContainingWord = 0 
	def getName(self): 
		return self.word 
	def getOcurrences(self): 
		return self.ocurrences 
	def getDocsContainingWord(self): 
		return self.docsContainingWord 
	def addOcurrence(self): 
		self.ocurrences += 1 
	def addDocContainingWord(self): 
		self.docsContainingWord += 1 

