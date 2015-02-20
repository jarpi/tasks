class docHit: 
	def __init__(self,name): 
		self.docName = name 
		self.wordCount = 0 
	def getWordCount(self): 
		return self.wordCount 
	def setWordCount(self, wordCount): 
		self.wordCount = wordCount 
	def __str__(self): 
		return self.docName + " " + str(self.wordCount) 
