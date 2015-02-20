class wordHit(object): 
	def __init__(self,word): 
		self.word = word 
		self.ocurrences = 0 
		self.docsContainingWord = 0 
	def getWord(): 
		return self.word 
	def getOcurrences(): 
		return self.ocurrences 
	def getDocsContainingWord(): 
		return self.docsContainingWord 
	def addOcurrence(): 
		self.ocurrences += 1 
	def addDocContainingWord(): 
		self.docsContainingWord += 1 

