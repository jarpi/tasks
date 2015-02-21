#!/usr/bin/python 
import math 

class funcs: 

	def tf(self,ocurrences,totalWordsInDoc): 
		return ocurrences/totalWordsInDoc 
	def idf(self,totalDocs,docsContainingWord): 
		return math.log(totalDocs/docsContainingWord) 
	def tfidf(self, ocurrences, totalWordsInDoc, totalDocs, docsContainingWord): 
		return float(self.tf(ocurrences,totalWordsInDoc)*self.idf(totalDocs,docsContainingWord)) 
