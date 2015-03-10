# -*- coding: utf-8 -*-
#!/usr/bin/env python 
import string 

class Utils: 
	def cleanStopWordsPunctuations(self, documentList, stopList): 
		texts = [] 
		for documentFilename in documentList: 
			doc = open(documentFilename,'r')  
			for line in doc: 
				line = line.translate(None, string.punctuation)
				texts.append([word for word in line.lower().split() if word not in stopList]) 
			doc.close() 
		return texts 

