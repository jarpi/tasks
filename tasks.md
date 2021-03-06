## Tasks for 17-02-2015 

- ## Is nodeJS a good idea?: 
	* http://nodeguide.com/convincing_the_boss.html 
- ### Understanding event loop: 
	* https://www.youtube.com/watch?v=oSe6QC-teUY 
	* https://www.youtube.com/watch?v=mICRK6egD-I 
	* https://vimeo.com/76557798 
	* http://strongloop.com/strongblog/node-js-event-loop/ 
	* http://stackoverflow.com/questions/25568613/node-js-event-loop 
	* https://github.com/maxogden/art-of-node/#the-art-of-node 
	* http://stackoverflow.com/questions/2353818/how-do-i-get-started-with-node-js 
	* http://nodeguide.com/ 
	* http://www.nodebeginner.org/ 
	* http://debuggable.com/posts/understanding-node-js:4bd98440-45e4-4a9a-8ef7-0f7ecbdd56cb 
	* https://github.com/tj/masteringnode 
	* http://www.addyosmani.com/resources/essentialjsdesignpatterns/book/ 
	* http://blog.mixu.net/2011/02/01/understanding-the-node-js-event-loop/ 
	* http://www.javaworld.com/article/2079190/scripting-jvm-languages/6-things-you-should-know-about-node-js*html 
	* http://www.smashingmagazine.com/2013/11/21/introduction-to-full-stack-javascript/ 
	* http://www.crockford.com/javascript/javascript.html 
	* http://www.kegel.com/c10k.html 

- ### Streams 
	* https://github.com/substack/stream-handbook 
	* http://www.sitepoint.com/basics-node-js-streams/ 

- ### Project overview 


- ### Private members javascript: 
	* http://www.crockford.com/javascript/private.html 

- ### Javascript inheritance:
	* http://www.crockford.com/javascript/inheritance.html 

- ### libuv read / watch libuv presentation: 
	* http://nikhilm.github.io/uvbook/basics.html  
	* Here i've learned basics of libuv, where is the nodeJS magic and why it works  
	* libev / libeio was replaced by libuv 


##  Tasks for 18-02-2015 


- ### TODO: 
	* Javascript GC - X 
	* Javascript closures - X 
	* Common patterns - X 
	* Promises - X 
	* Generators - X 
	* Get more ideas about transcript voice to text - V 
	* Do some example code - V  
	* Streams - V 
	* Try catch Javascript - X 



``` 
There are already two great resources that you can use to learn about node streams* One is the stream-adventure (see the Learn Node Interactively section) and the other is a reference called the Stream Handbook  

https://www.coursera.org/course/nlp 

Books[edit]
Books like "Fundamentals of Speech Recognition" by Lawrence Rabiner can be useful to acquire basic knowledge but may not be fully up to date (1993)* Another good source can be "Statistical Methods for Speech Recognition" by Frederick Jelinek and "Spoken Language Processing (2001)" by Xuedong Huang etc* More up to date are "Computer Speech", by Manfred R* Schroeder, second edition published in 2004, and "Speech Processing: A Dynamic and Optimization-Oriented Approach" published in 2003 by Li Deng and Doug O'Shaughnessey* The recently updated textbook of "Speech and Language Processing (2008)" by Jurafsky and Martin presents the basics and the state of the art for ASR* Speaker recognition also uses the same features, most of the same front-end processing, and classification techniuqes as is done in speech recognition* A most recent comprehensive textbook, "Fundamentals of Speaker Recognition"[68] by Homayoon Beigi, is an in depth source for up to date details on the theory and practice* A good insight into the techniques used in the best modern systems can be gained by paying attention to government sponsored evaluations such as those organised by DARPA (the largest speech recognition-related project ongoing as of 2007 is the GALE project, which involves both speech recognition and translation components)*

A good and accessible introduction to speech recognition technology and its history is provided by the general audience book "The Voice in the Machine* Building Computers That Understand Speech" by Roberto Pieraccini (2012)*

The most recent book on speech recognition is "Automatic Speech Recognition: A Deep Learning Approach" (Publisher: Springer) written by D* Yu and L* Deng published near the end of 2014, with highly mathematically-oriented technical detail on how deep learning methods are derived and implemented in modern speech recognition systems based on DNNs and related deep learning methods*[61] A related book, published earlier in 2014, "Deep Learning: Methods and Applications" by L* Deng and D* Yu provides a less technical but more methodology-focused overview of DNN-based speech recognition during 2009-2014, placed within the more general context of deep learning applications including not only speech recognition but also image recognition, natural language processing, information retrieval, multimodal processing, and multitask learning* 
``` 

- ###  Useful links: 
	* Speech to text - Automatic Speech recognition 
		* https://dictation.io/ 
		* https://github.com/sreuter/node-speakable 
		* https://utbrudd.bouvet.no/2014/11/11/getting-started-with-html5-speech-recognition-on-google-chrome/ 
		* http://www.nadavos.com/making-node-speak/ 
		* https://www.npmjs.com/package/google-speech 
		* https://www.npmjs.com/search?q=speech+ 
		* https://www.npmjs.com/package/google-speech-api 
		* https://xiph.org/flac/ 

	* Get text subject / meaning 
		* http://phys.org/news/2013-07-natural-language-texts*html 
		* http://stackoverflow.com/questions/1140908/parsing-meaning-from-text 
		* Take a look to NLTK 


- ### Tasks [1819]-02-2015 

	- Try to implement: 
		* Fully Automated
			* Search for salient or informative words (weight based estimation) 
				- td-idf 
					* Wi = TFij * IDFi (term frequency) 
				- Topic signature 
					* LLR: 1 = -2Log(lambda)>10 || 0 (Log-likelihood ratio) 

	- Learn about syntax trees (could be possible that before process the file, we could avoid some words, speed optimization) 

	

- ### Tasks 20-02-2015 

	* Finish tf-idf hand made in python - X 
	* Start to read the nltk book - (21-02-2015)
	* Take a look opencv library - (22-02-2015) 

- ### Tasks 21-02-2015 

	* Read NLTK book - http://www*nltk*org/book/ 
	* Finish tf-idf hand made in python - 
	* See generators talk in nodejs - 

- ### Tasks 23-02-2015 

	- Search for a speech recognizition API 
		* https://www.talater.com/annyang/ 
		* http://www.google.com/intl/es/chrome/demos/speech*html
		* http://en.wikipedia.org/wiki/Speech_recognition 
		* http://en.wikipedia.org/wiki/Amplitude 
		* http://en.wikipedia.org/wiki/Frequency 
		* http://en.wikipedia.org/wiki/Artificial_neural_network 
		* https://github.com/gillesdemey/google-speech-v2 
		* http://text-processing.com/ 
		* https://github.com/Uberi/speech_recognition 

- ### Tasks 25-02-2015 

	* Improve tfidf algorithm 
	* Search for a tested library to do tfidf 
	* Try to automatize voice transcript with google api 
	* Read about openCV 

	* Resources 
		* http://streamhacker.com/ 
		* http://radimrehurek.com/2014/02/word2vec-tutorial/ 
		* http://stanford.edu/~rjweiss/public_html/IRiSS2013/text2/notebooks/tfidf.html 
	- Parse shakespeare text - TOTALTIME: 0:06:30*379532 


- ### Tasks 26-02-2015 

	- Try to use machine learning 
	- Do some more tests in openCV 
	- Resources 
		* http://stevenloria.com/how-to-build-a-text-classification-system-with-python-and-textblob/ 



- ### Tasks 27-02-2015 

	- Make a demo for sentiment analysis for demo day 
	- Search for reflection in javascript 

	- Resources 
		* https://github.com/vinta/awesome-python 
		* https://github.com/sindresorhus/awesome-nodejs 

	

- ### Tasks 2-03-2015 

	- Analyze gensim lib for text summarizing 
	- Take a look to featureserver project 

	- Resources: 
		* http://libots*sourceforge.net/
		* http://www.summarization.com/mead/ 
		* https://github.com/thavelick/summarize 
		* https://groups.google.com/forum/#!forum/gensim 
		* http://cscorley.github.io/2014/05/06/using-gensim-for-lda/ 


- ### Tasks 3-03-2015 

	* Try to configure a featureserver (gis) 
	* Do some JS tutorials for nodeschool 


- ### Tasks 4-03-2015 
	* Standby featureserver project 
	* Try to get something working on text summarize 
	* Keep working on nodeschool tutorials 

	* Resources 
		* http://www.predictiveanalyticstoday.com/top-11-free-software-for-text-analysistext-mining-text-analytics/ 
		* http://rekn.itercommunity.org/MR/tm
		* http://entopix.com/so-you-need-to-understand-language-data-open-source-nlp-software-can-help.html 
		* http://www.r-bloggers.com/so-what-can-text-analysis-do-for-you/ 
		* http://en.wikipedia.org/wiki/Weka_(machine_learning) 
		* http://en.wikipedia.org/wiki/Latent_Dirichlet_allocation
		* http://en.wikipedia.org/wiki/Latent_semantic_indexing 
		* http://en.wikipedia.org/wiki/Vector_space_model 
		* http://en.wikipedia.org/wiki/Cosine_similarity 
		* http://www.predictiveanalyticstoday.com/top-predictive-analytics-software-api/ 
		* http://www.predictiveanalyticstoday.com/text-analytics/ 

	* Algorithms to implement 
		* http://radimrehurek.com/gensim/models/word2vec.html 
		* https://code.google.com/p/word2vec/
		* http://stackoverflow.com/questions/22129943/how-to-calculate-the-sentence-similarity-using-word2vec-model-of-gensim-with-pyt 
		* https://www.kaggle.com/c/word2vec-nlp-tutorial/details/part-2-word-vectors 
		* http://streamhacker.com/2014/12/29/word2vec-nltk/ 
		* http://www.quora.com/Word2vec/What-are-some-interesting-Word2Vec-results 
		* http://radimrehurek.com/2013/09/word2vec-in-python-part-two-optimizing/ 
		* http://www.predictiveanalyticstoday.com/text-analytics/ 
		* http://geojsonlint.com/ 

- ### Tasks 5-03-2015 

	* Install feature server - V 
	* Try to get it working - ¬ 

	* Resources: 
		* http://lists.osgeo.org/pipermail/featureserver/2008-August/000260.html 
		* http://jsonlint.com/ 
		* http://geojsonlint.com/ 
		* http://geojson.org/geojson-spec.html#named-crs
		* http://xml.fmi.fi/namespace/meteorology/conceptual-model/meteorological-objects/2009/04/28/docindex43.html 
		* http://www.gmlcentral.com/gml-model/ 

- ###  Tasks 6-03-2015 

	* Try to search an alternative for featureserver 
	* Attend to skype meeting 

- ### Tasks 9-03-2015 
	
	* Resources: 
		* http://programmers.stackexchange.com/questions/175981/good-technique-for-search-text-tokenization	
		* http://textanalysisonline.com/ 
		* http://textminingonline.com/dive-into-nltk-part-ii-sentence-tokenize-and-word-tokenize
		* http://www.summarization.com/ 
		* http://videolectures.net/mlss09uk_blei_tm/ 
		* http://www.cs.upc.edu/~nlp/wikicorpus/
- ### Tasks 10-03-2015 

	* Add algorithms to topic analyzer 
	* Continue reading postgis book 

- ### Tasks 11-03-2015 
	
	* Fix bugs in weighting code 
	* Test different algorithms 

	* Resources: 
		* http://www.williamjohnbert.com/2012/05/relatively-quick-and-easy-gensim-example-code/ 
		* http://stackoverflow.com/questions/22283396/document-similarity-gensim 

		 
- ### Tasks 12-03-2015 
	
	* GeoServer REST tests 
	* Analyze connector for other REST datasources 

	* Resources: 
		* http://docs.geoserver.org/latest/en/user/extensions/importer/rest_examples.html 
		* http://es.slideshare.net/jdeolive/geoscript-spatial-capabilities-for-scripting-languages?next_slideshow=2 
		* http://www.idee.es/resources/documentos/RD_wfs_v2_0.pdf 
		* http://es.wikipedia.org/wiki/GeoTools
		* http://docs.geotools.org/latest/developer/communication.html 
		* http://geotoolsnews.blogspot.com.es/2010/09/geospatial-for-java-workbooks-available.html 
		* You don't know your JS (callbacks, promises, generators) 

- ### Tasks 15-03-2015 

	* Resources for hack on business 2015: 
		* strategyzer.com 

		
- ### Tasks 16-03-2015 

	* Load words into python dictionary to improve sentiment analysis 
	* Search info about creating and deploying a WFS rest server with GeoTools 
	* Try to do a minimum rest api 

- ### Tasks 17-03-2015 
	
	* Implement a minimal method of WFS "GetFeature" with nodeJS and express 
	* http://www.hola.com/actualidad/2015031777516/hermana-ronaldo-habla-separacion/ 

- ### Tasks 18-03-2015 

	* Work query parser 

	* Resources: 
		* Overriding methods in Javascript: http://stackoverflow.com/questions/6885404/javascript-override-methods 
		* http://dailyjs.com/2012/11/26/js101-proto/ 
		* http://philipwalton.com/articles/implementing-private-and-protected-members-in-javascript/ 
		* http://www.meanstack.co/javascript-proto-vs-prototype-proto/ 
		* http://wildlyinaccurate.com/understanding-javascript-inheritance-and-the-prototype-chain/ 
		* http://www.htmlgoodies.com/beyond/javascript/accessing-private-functions-in-javascript.html 
		* https://javascriptweblog.wordpress.com/2010/06/07/understanding-javascript-prototypes/ 
		* http://www.meanstack.co/javascript-proto-vs-prototype-proto/ 
		* http://geekabyte.blogspot.com.es/2013/03/difference-between-protoype-and-proto.html 
		* http://stackoverflow.com/questions/13040684/javascript-inheritance-object-create-vs-new 
		* http://dailyjs.com/2012/06/04/js101-object-create/ 
		* http://javascriptissexy.com/javascript-prototype-in-plain-detailed-language/ 
		* http://stackoverflow.com/questions/6885404/javascript-override-methods 
		* http://es.slideshare.net/cacois/nodejs-patterns-for-discerning-developers 
		
		* How generators replace callbacks: http://jlongster.com/A-Study-on-Solving-Callbacks-with-JavaScript-Generators

		* Book: Javascript patterns 
		* http://bonsaiden.github.io/JavaScript-Garden/ 

		* Each object instance is have a __proto__ that means and instance to the object that was used 
		to made it. 
		
		* A function is called constructor, is also has a "prototype" var automatically created that points to an instance of the "function.prototype" who exposes instance variable and methods 

		* Machine learning and funny things in nodejs: http://73rhodes.github.io/talks/ 

		* Talks for every Javascript developer: https://www.youtube.com/playlist?list=PLseEp7p6Ewia6RT5Ngz8yk-t-jAZvA-8N 

		* NodeJS streams: http://nodestreams.com/ 
		* http://koajs.com/ 
		
- ### Tasks 20-03-2015 
	
	* Get something working 

- ### Tasks 21-03-2015 
	
	* Keep working on WFS layer 



- ### Tasks 22-03-2015 

	* Keep adding features to WFS layer 

	Resources: 
		* http://www.nodehispano.com/ 

		
- ### Tasks 23-03-2015  
	
	* Write unit tests 
	* Write functional tests 
	* Upload to travis 
	* Try to improve performance 
	* Upload to travis-ci 

	Resources: 
		* https://github.com/caolan/nodeunit
		* https://travis-ci.org/jarpi/node_wfs_api/ 
		* http://www.clock.co.uk/blog/tools-for-unit-testing-and-quality-assurance-in-node-js
		* https://nodejs.org/api/assert.html 
		* http://code.tutsplus.com/tutorials/travis-ci-what-why-how--net-34771 

- ### Tasks 24-03-2015 

	* Write unit tests 
	* Write documentation 
	* Fix word extractor 

	

