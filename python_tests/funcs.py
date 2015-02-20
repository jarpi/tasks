#!/usr/bin/python 
import math 

class funcs: 

	def tf(self,ocurrences,totalWordsInDoc): 
		return ocurrences/totalWordsInDoc 
	def idf(self,totalDocs,docsContainingWord): 
		print str(totalDocs) + " " + str(docsContainingWord) 
		return math.log(totalDocs/docsContainingWord)

