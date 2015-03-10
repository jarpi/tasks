# -*- coding: utf-8 -*-
#!/usr/bin/env python 
from utils import Utils 
from gensim import corpora, models, similarities 

class LSI: 
	def __init__(self, documentList, stopList): 
		self.documentList = documentList 
		self.stopList = stopList 
		self.texts = [] 
		self.dictionary = [] 
		self.corpus = [] 
		self.lsiModel = [] 
		self.index = [] 
		self.utils = Utils()  
		self.isInitialized = False  
		self.initMe()

	def runQuery(self,keyword): 
		if ( self.isInitialized ): 
			vec = self.dictionary.doc2bow(keyword.lower().split()) 
			sims = self.index[self.lsiModel[vec]] 
			return (list(enumerate(sims))) 
		return [] 

	def initMe(self): 
		if ( not self.isInitialized ): 
			self.texts = self.utils.cleanStopWordsPunctuations(self.documentList, self.stopList) 
			self.dictionary = corpora.Dictionary(self.texts) 
			self.corpus = [self.dictionary.doc2bow(text) for text in self.texts] 
			self.lsiModel = models.LsiModel(self.corpus, id2word=self.dictionary, num_topics=300) 
			self.index = similarities.SparseMatrixSimilarity(self.lsiModel[self.corpus], num_features=12) 
			self.isInitialized = True   
