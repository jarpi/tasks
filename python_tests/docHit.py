import wordHit 
class docHit: 
	def __init__(self,name): 
		self.docName = name 
		self.wordCount = 0 
		self.wordContainer = {} 
		self.docHandler = open(name,'r')  
	def getWordCount(self): 
		return self.wordCount 
	def setWordCount(self, wordCount): 
		self.wordCount = wordCount 
	def closeDocument(self): 
		self.docHandler.close() 
	def addWordToContainer(self, word): 
		self.wordContainer[word.getName()] = word 
	def getWordFromContainer(self, wordName): 
		return self.wordContainer.get(wordName, wordHit.wordHit(wordName)) 
	def existsWordInContainer(self, wordName): 
		return self.wordContainer.has_key(wordName) 
	def getWordContainer(self): 
		return self.wordContainer.items()
	def __str__(self): 
		return self.docName + " " + str(self.wordCount + " " + str(self.wordContainer)) 

