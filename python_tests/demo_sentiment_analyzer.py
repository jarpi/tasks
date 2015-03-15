# -*- coding: utf-8 -*-
#!/usr/bin/env python 
import sys 
from textblob.classifiers import NaiveBayesClassifier 

train_set = [
    ('i love this sandwich.', 'pos'),
    ('i like', 'pos'), 
    ('i do like', 'pos'), 
    ('this is an amazing place!', 'pos'),
    ('i feel very good about these beers.', 'pos'),
    ('this is my best work.', 'pos'),
    ('what an awesome view', 'pos'), 
    ('he is my friend', 'pos'), 
    ('do you like', 'pos'), 

    ('i do not like this restaurant', 'neg'),
    ("i don't like this",'neg'),  
    ('i am tired of this stuff.', 'neg'),
    ("i can't deal with this", 'neg'),
    ('he is my sworn enemy!', 'neg'),
    ('enemy', 'neg'), 
    ('my boss is horrible.', 'neg'),  
    ('i do not like', 'neg'), 
    ('i hate', 'neg') 
    ] 


# positiveSet = ['./texts/positive-words.txt']
# negativeSet = ['./texts/negative-words.txt']  
# train_set = [] 

def train_positive(): 
    global train_set 
    for document in positiveSet: 
        for line in open(document): 
            train_set.append((line.replace('\n',''),'pos'))

def train_negative(): 
    global train_set 
    for document in negativeSet: 
        for line in open(document): 
            train_set.append((line.replace('\n',''),'neg')) 

test_set = [
	('The beer was good.', 'pos'),
    ('I do not enjoy my job', 'neg'),
    ("I ain't feeling dandy today.", 'neg'),
    ("I feel amazing!", 'pos'),
    ('Gary is a friend of mine.', 'pos'),
    ("I can't believe I'm doing this.", 'neg')
    ] 

if __name__ == '__main__': 
    print "Initiallizing classifier... (training...)" 
    print train_set 
    classifier = NaiveBayesClassifier(train_set) 
    print classifier.accuracy(test_set) 
    print classifier.show_informative_features() 
    print "Ready " 
    while 1:
        try:
            line = sys.stdin.readline() 
            print classifier.classify(line) 
        except KeyboardInterrupt:
            break
        if not line:
            break


