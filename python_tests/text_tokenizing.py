# -*- coding: utf-8 -*-
#!/usr/bin/env python 
import wordHit, docHit, funcs

words = {} 
docs = {} 

def countWordInDocs(word): 
	wordInDocs = 0
	for docKey, docValue in docs.items(): 
		if docValue.existsWordInContainer(word): 
			wordInDocs += 1 
	return wordInDocs 

def countWordsInLine(line): 
	line.replace("\n","")
	line.replace("\r\n","") 
	line.replace(".","") 
	return len(line.split(None)) 

def parseLines(document): 
	wordCount = 0 
	for line in document.docHandler: 
		wordCount += countWordsInLine(line) 
		fillWords(line, document) 
	return wordCount 

def fillWords(line,document): 
	global words 
	for word in line.lower().replace('\n',' ').replace('\r','').replace('.','').split(" "): 
		newHit = document.getWordFromContainer(word) 
		newHit.addOcurrence() 
		document.addWordToContainer(newHit) 

if __name__ == '__main__':
	#documentList = ["./texts/shak.txt","./texts/text2.txt"]; 
	documentList = ["./texts/test.txt","./texts/test2.txt"]; 
	wordCount = 0 
	totalDocs = len(documentList) 
	helpers = funcs.funcs() 
	for documentFilename in documentList: 
		doc = docHit.docHit(documentFilename) 
		wordCount = parseLines(doc) 
		doc.setWordCount(wordCount) 
		docs[documentFilename] = doc 
		doc.closeDocument() 
	for docKey, docValue in docs.items(): 
		for wordKey, wordValue in docValue.getWordContainer(): 
			wordValue.setTFIDF(helpers.tfidf(wordValue.getOcurrences(), docValue.getWordCount(), totalDocs, countWordInDocs(wordValue.getName())))
			print wordValue 





