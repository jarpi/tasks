#!/usr/bin/env python 
import wordHit, funcs

words = {} 

def countWordsInLine(line): 
	line.replace("\n","")
	line.replace("\r\n","") 
	line.replace(".","") 
	return len(line.split(None)) 

def parseLines(document): 
	wordCount = 0 
	for line in document: 
		wordCount += countWordsInLine(line) 
		fillWords(line) 
	return wordCount 

def fillWords(line): 
	global words 

	for word in line.replace("\n","").replace("\r\n","").split(" "): 
		newHit = words.get(word, wordHit.wordHit(word)) 
		newHit.addOcurrence() 
		newHit.addDocContainingWord() 
		words[word] = newHit 

if __name__ == '__main__':
	#documentList = ["./texts/shak.txt","./texts/text2.txt"]; 
	documentList = ["./texts/test.txt"]; 
	wordCount = 0 
	totalDocs = len(documentList) 
	for fileName in documentList: 
		document = open(fileName,'r') 
		wordCount += parseLines(document) 
		document.close() 
		totalDocs+=1 
	print wordCount 
	print words 
	print ("Exit") 


