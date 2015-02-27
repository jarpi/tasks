# -*- coding: utf-8 -*-
#!/usr/bin/env python 
import sys 
from textblob.classifiers import NaiveBayesClassifier 

train_set = [
    ('I love this sandwich.', 'pos'),
    ('I like this', 'pos'), 
    ('This is an amazing place!', 'pos'),
    ('I feel very good about these beers.', 'pos'),
    ('This is my best work.', 'pos'),
    ('What an awesome view', 'pos'), 
    ('He is my friend', 'pos'), 

    ('I do not like this restaurant', 'neg'),
    ("I don't like this",'neg'),  
    ('I am tired of this stuff.', 'neg'),
    ("I can't deal with this", 'neg'),
    ('He is my sworn enemy!', 'neg'),
    ('My boss is horrible.', 'neg') 
    ('I hate', 'neg') 
    ] 
    
test_set = [
	('The beer was good.', 'pos'),
    ('I do not enjoy my job', 'neg'),
    ("I ain't feeling dandy today.", 'neg'),
    ("I feel amazing!", 'pos'),
    ('Gary is a friend of mine.', 'pos'),
    ("I can't believe I'm doing this.", 'neg')
    ] 

if __name__ == '__main__': 
    classifier = NaiveBayesClassifier(train_set) 
    print classifier.accuracy(test_set) 
    print "Ready: " 
    while 1:
        try:
            line = sys.stdin.readline() 
            print classifier.classify(line) 
        except KeyboardInterrupt:
            break
        if not line:
            break




