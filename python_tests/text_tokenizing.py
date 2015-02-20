#!/usr/bin/env python 
import wordHit 
import funcs 

def countWordsInLine(line): 
	line.replace("\n","")
	line.replace("\r\n","") 
	line.replace(".","") 
	return len(line.split(None)) 

def groupCountWordsInDocument(document): 
	global words 
	global wordCount 
	for line in document:  
		wordCount += countWordsInLine(line) 
		for word in line.lower().split(None):  
			words[word] = words.get(word,0)+1 

if __name__ == '__main__':
	#documentList = ["./texts/shak.txt","./texts/text2.txt"]; 
	documentList = ["./texts/test.txt"]; 
	words = {} 
	wordCount = 0 
	i = 0 
	for fileName in documentList: 
		document = open(fileName,'r') 
		groupCountWordsInDocument(document) 
		document.close() 
		totalDocs+=1 
	print wordCount 
	print words 
	print ("Exit") 
