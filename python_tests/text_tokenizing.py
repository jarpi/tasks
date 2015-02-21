#!/usr/bin/env python 
import wordHit, docHit, funcs

words = {} 
docs = {} 

def countWordsInLine(line): 
	line.replace("\n","")
	line.replace("\r\n","") 
	line.replace(".","") 
	return len(line.split(None)) 

def parseLines(document): 
	wordCount = 0 
	for line in document: 
		wordCount += countWordsInLine(line) 
		fillWords(line, document) 
	return wordCount 

def fillWords(line,document): 
	global words 
	for word in line.lower().replace("\n","").replace("\r\n","").split(" "): 
		newHit = docs[document.name].wordContainer.get(word, wordHit.wordHit(word)) 
		newHit.addOcurrence()  
		# newHit.addDocContainingWord(document.name) 
		docs[document.name].wordContainer[word.getName()] = wordHit 
		# words[word] = newHit 

if __name__ == '__main__':
	#documentList = ["./texts/shak.txt","./texts/text2.txt"]; 
	documentList = ["./texts/test.txt","./texts/test2.txt"]; 
	wordCount = 0 
	totalDocs = len(documentList) 
	helpers = funcs.funcs() 
	for fileName in documentList: 
		doc = docHit.docHit(fileName) 
		document = open(fileName,'r') 
		wordCount = parseLines(document) 
		doc.setWordCount(wordCount) 
		docs[fileName] = doc 
		document.close() 
	for docHitKey, docHitValue in docs.items(): 
		for wordHitKey, wordHitValue in docHitValue.wordContainer.items(): 
			wordHitValue.setTFIDF(helpers.tfidf(wordHitValue.getOcurrences(), docHitValue.getWordCount(), totalDocs, wordHitValue.getNDocsContainingWord())) 
			print wordHitValue  





